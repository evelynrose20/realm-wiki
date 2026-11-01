const {app,BrowserWindow,dialog,ipcMain,shell}=require('electron');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
let folder=null;
function dataPath(){return folder&&path.join(folder,'data','content.js')}
function validate(dir){return fs.existsSync(path.join(dir,'index.html'))&&fs.existsSync(path.join(dir,'data','content.js'))}
function load(){
 const source=fs.readFileSync(dataPath(),'utf8');
 const context={window:{}};
 vm.runInNewContext(source,context,{timeout:1500,filename:'content.js'});
 if(!context.window.WIKI_DATA||typeof context.window.WIKI_DATA!=='object')throw Error('Wiki data not found');
 return JSON.parse(JSON.stringify(context.window.WIKI_DATA));
}
function write(data){
 if(!data||!Array.isArray(data.articles)||!Array.isArray(data.patchCatalog)||!data.site)throw Error('Invalid wiki data');
 const file=dataPath();
 const now=new Date().toISOString().replace(/[:.]/g,'-');
 const backup=path.join(folder,'data','.editor-backups');
 fs.mkdirSync(backup,{recursive:true});
 fs.copyFileSync(file,path.join(backup,'content-'+now+'.js'));
 const temp=file+'.tmp';
 fs.writeFileSync(temp,'// Managed by Realm Wiki Editor. Edit through the desktop app or GitHub.\nwindow.WIKI_DATA = '+JSON.stringify(data,null,2)+';\n','utf8');
 fs.renameSync(temp,file);
 return {path:file,backup};
}
function start(){
 const win=new BrowserWindow({width:1320,height:840,minWidth:850,minHeight:600,webPreferences:{preload:path.join(__dirname,'preload.cjs'),contextIsolation:true,nodeIntegration:false,sandbox:false}});
 win.loadFile(path.join(__dirname,'index.html'));
}
ipcMain.handle('choose-folder',async()=>{
 const result=await dialog.showOpenDialog({properties:['openDirectory'],title:'Select your realm-wiki repository folder'});
 if(result.canceled)return null;
 if(!validate(result.filePaths[0]))throw Error('Select the wiki repository containing index.html and data/content.js');
 folder=result.filePaths[0];
 return {folder,data:load()};
});
ipcMain.handle('load-data',()=>{if(!folder)throw Error('Open a wiki folder first');return load()});
ipcMain.handle('save-data',(_,data)=>{if(!folder)throw Error('Open a wiki folder first');return write(data)});
ipcMain.handle('preview',async()=>{if(!folder)throw Error('Open a wiki folder first');await shell.openPath(path.join(folder,'index.html'));return true});
ipcMain.handle('path',()=>folder);
app.whenReady().then(start);
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)start()});

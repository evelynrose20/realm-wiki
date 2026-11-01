const {contextBridge,ipcRenderer}=require('electron');
contextBridge.exposeInMainWorld('wiki',{
 open:()=>ipcRenderer.invoke('choose-folder'),
 load:()=>ipcRenderer.invoke('load-data'),
 save:data=>ipcRenderer.invoke('save-data',data),
 preview:()=>ipcRenderer.invoke('preview'),
 path:()=>ipcRenderer.invoke('path'),
 importImage:()=>ipcRenderer.invoke('import-image')
});

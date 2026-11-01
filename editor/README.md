# Realm Wiki Editor

The Electron editor lives alongside the website in this repository.

## Download a Windows build

Open the **Actions** tab, select **Build Realm Wiki Editor (Windows)**, choose the latest successful run, and download the **Realm-Wiki-Editor-Windows** artifact. Extract the archive and run the portable EXE. Windows may warn about an unsigned application.

## Run from source

Requires Node.js. From this directory run:

```bash
npm install
npm start
```

## Edit and publish

1. Clone `evelynrose20/realm-wiki` using GitHub Desktop.
2. Launch Realm Wiki Editor and select the cloned repository folder.
3. Edit the homepage, articles, patches, and navigation, then click **Save changes**.
4. Commit and push changes in GitHub Desktop. GitHub Pages will deploy the website.

The app saves `data/content.js` and makes timestamped backups in `data/.editor-backups/` (ignored by Git). Backups are local only.

**Important:** This is a local Electron editor stored and built on GitHub, not an editor running inside GitHub Pages. A hosted multi-user editing experience would require authenticated publishing and moderation.

## Security

The wiki data loader runs in an isolated VM context, not inside the editor window. Only open trusted local wiki folders. Do not add secrets or unpublished lore to the public repository.

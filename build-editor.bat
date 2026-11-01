@echo off
setlocal
title Realm Wiki Editor - Windows Builder
cd /d "%~dp0"

echo ==========================================
echo       Realm Wiki Editor - Build
echo ==========================================
echo.

where node >nul 2>&1
if errorlevel 1 goto :no_node
where npm.cmd >nul 2>&1
if errorlevel 1 goto :no_node
if not exist "editor\package.json" goto :no_editor

cd /d "%~dp0editor"
echo [1/2] Installing dependencies...
call npm install
if errorlevel 1 goto :failed

echo.
echo [2/2] Building portable Windows executable...
call npm run dist:win
if errorlevel 1 goto :failed

echo.
echo SUCCESS! Your EXE is in:
echo %CD%\dist
echo.
start "" explorer.exe "%CD%\dist"
pause
exit /b 0

:no_node
echo ERROR: Node.js and npm were not found.
echo Install the Windows LTS version from https://nodejs.org/
echo Then reopen this BAT file.
goto :end

:no_editor
echo ERROR: editor\package.json was not found.
echo Keep this BAT in the root of your realm-wiki repository.
goto :end

:failed
echo.
echo BUILD FAILED. Read the error messages above.
echo You can send the error text to ChatGPT for help.
:end
echo.
pause
exit /b 1

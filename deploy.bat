@echo off
SETLOCAL

REM 1. Build React app (run in cmd /c to avoid blocking)
echo.
echo ===== Building React app =====
cmd /c "npm run build"
IF %ERRORLEVEL% NEQ 0 (
    echo Build failed. Exiting.
    exit /b %ERRORLEVEL%
)

REM 2. Remove old build files in root
echo.
echo ===== Cleaning old build files =====
IF EXIST static rmdir /s /q static
IF EXIST index.html del /f /q index.html
IF EXIST asset-manifest.json del /f /q asset-manifest.json
IF EXIST favicon.ico del /f /q favicon.ico
IF EXIST manifest.json del /f /q manifest.json
IF EXIST robots.txt del /f /q robots.txt
IF EXIST images rmdir /s /q images

REM 3. Copy new build files to root
echo.
echo ===== Copying new build files =====
xcopy /s /y /q build\* .

REM 4. Commit & push to GitHub
echo.
echo ===== Committing and pushing changes =====
git add .
git commit -m "Update React build"
git push origin main

echo.
echo ===== Deployment complete! =====
pause
ENDLOCAL
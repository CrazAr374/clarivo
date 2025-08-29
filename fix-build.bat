@echo off
echo Fixing Next.js build issues...
echo.

echo Step 1: Cleaning build cache...
if exist .next rmdir /s /q .next
if exist out rmdir /s /q out

echo Step 2: Clearing npm cache...
npm cache clean --force

echo Step 3: Reinstalling dependencies...
npm install

echo Step 4: Starting development server...
npm run dev

echo.
echo Build fix complete! The development server should now be running.
pause
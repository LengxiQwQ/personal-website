@echo off
chcp 65001 > nul

cd /d "D:\学习资料\个人网站\my-site"

start http://localhost:5173/
npm run dev

pause

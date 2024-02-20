cd 'C:\Github\kimer-stats'
pm2 start server.js --cron-restart="0 1 * * *"

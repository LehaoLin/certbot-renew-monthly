## certbot ssl update script
letsencript
Compulsory renewal of certificate on the 10th of every month

## Usage
### Nohup
```nohup node index.js &```
### pm2
```pm2 start index.js --name="certbot-renew"```

---
## certbot ssl证书更新脚本
letsencript
每个月10号强制更新证书

## 用法
推荐使用pm2管理进程，也可以nohup
### Nohup
```nohup node index.js &```
### pm2
```pm2 start index.js --name="certbot-renew"```


# 拉取代码
git pull
# 安装依赖
npm install && npm run docs:build

# 删除容器
docker rm -f Interview &> /dev/null

# 重启容器
docker run -d --restart=on-failure:5\
    -p 4000:80 \
    -v $PWD/docs/.vuepress/dist:/usr/share/nginx/html \
    --name Interview nginx

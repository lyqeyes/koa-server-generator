
#### 简介
方便前端人员在本地快速启动http服务，用于测试和学习。

#### 启动
* clone 
* npm install
* npm start
* visit 127.0.0.1:9000

#### 简单用法
* 目前代码中提供了简单的路由配置功能，只需三步即可添加可访问的页面
    * 在根目录下面的config.js文件中配置路由（参见已有的'page1,page2'）
    * 然后在views文件夹下添加同名的html文件
    * 重启服务，访问127.0.0.1:9000/test/\[你配置的地址\]
* 举例：在config.js中添加 *page3*,然后在views下面添加 *page3.html*,然后访问 *127.0.0.1:9000/test/page3*,即可访问你写的page3.html页面

#### 静态文件服务
* to be continue 

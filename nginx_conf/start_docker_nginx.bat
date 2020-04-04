@echo 启动nginx
 @docker run --rm --name ci4 ^
 -v %cd%\conf.d:/etc/nginx/conf.d ^
 -v %cd%\..\ci:/var/www -p 80:80 -itd nginx

 @pause
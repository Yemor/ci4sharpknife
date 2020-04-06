@docker kill ci4 phpfpm
@echo 启动phpfpm
 @docker run --rm --name phpfpm ^
 -v %cd%\..\ci:/var/www ^
 -p 9000:9000 -itd php:7.2-fpm
@echo 启动nginx
 @docker run --rm --name ci4 ^
 -v %cd%\conf.d:/etc/nginx/conf.d ^
 -v %cd%\..\ci:/var/www -p 80:80 -itd nginx

@pause
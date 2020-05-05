@echo 启动phpfpm
 @docker run --rm --name phpfpm ^
 -v %cd%\..\ci:/var/www ^
 -p 9000:9000 -itd qqnn779/sharkpnife:latest
 
 @pause
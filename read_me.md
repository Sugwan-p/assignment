npm init -y

# 의존성 관련 명령
npm i express 
npm i nodemon --save-dev 
npm i ejs  
npm i bcrypt
npm i --save express-async-handler
npm i mongoose 
npm i dotenv 
npm i -s express-session
npm i connect-mongo
npm i dayjs

# package script에 start로 등록 
nodemon test

"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon test"
},
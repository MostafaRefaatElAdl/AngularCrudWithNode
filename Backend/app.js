const express = require('express');
const mongoose=require("mongoose");
const morgan = require('morgan');
const bodyParser = require('body-parser')
const registerRouter = require('./routers/registerRouter')
const loginRouter = require('./routers/loginRouter')
const departmentRouter = require('./routers/departmentRouter')
const studentRouter = require('./routers/studentRouter')
const instructorRouter = require('./routers/instructorRouter')
const server = express();


mongoose.connect("mongodb://localhost:27017/ExamDB")
        .then(()=>{
                console.log("DataBase Connected");
                server.listen(process.env.PORT||8080,()=>{
                    console.log("I am listening ......")
                });
                
        })
        .catch(error=>{
                console.log("DataBase Connection Problem");

        })
// server.listen(8080, () => {
//     console.log("I'm listening ...")
// })
//********MiddleWares **********/
//**Save Log file */
server.use((request,response,next)=>{

    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Methods","GET,POST,DELETE,PUT,OPTIONS");
    response.header("Access-Control-Allow-Headers","Content-Type,Authorization")
    next();

})
//server.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
server.use(morgan(function (tokens, req, res) {
        return [
            tokens.method(req, res),
            tokens.url(req, res),
            tokens.status(req, res),
            tokens.res(req, res, 'content-length'), '-',
            tokens['response-time'](req, res), 'ms'
        ].join(' ')
    })
)

server.get('/', (request, response,next) => {
    response.send("You are here, please choose a page");
    next();
})



//******** Routing **********/
server.use(bodyParser.json());
server.use("/home",(request,response)=>{
    response.send("Home Page");
});

server.use(registerRouter)
server.use(loginRouter)
server.use(departmentRouter)
server.use(studentRouter)
server.use(instructorRouter)

//******** Error MiddleWare **********/
server.use((req, res) => {
    res.send('NOT FOUND');
  });

server.use((error, req, res) => {
    console.log(`server error : ${error}`);
  });

// //**2nd MW */
// server.use((request,response,next)=>{
//     console.log("Authentication");
//     next();
// })

// //**3rd MW */
// server.use((request,response,next)=>{
//     if(false){
//        // next();
//     }else{
//         //exception
//         next(new Error("Not Authorized"))
//     }
// })

// //**4th MW if Authorized */
// server.use((request,response,next)=>{
//     response.send("Hello!!")
// })

//**5th MW if NOT Authorized */
// //******** Error MiddleWare **********/
// server.use((error, request, response, next) => {
//     response.send("Authentication ERROR" + error);
// })

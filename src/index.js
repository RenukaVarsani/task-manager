const express = require('express')
const bodyParser = require('body-parser');
require('./db/mongoose')
const auth = require('./middleware/auth')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = 4000

 

// const multer = require('multer')
// const upload = multer({
//     dest:'images'
// })

// app.post('/upload',upload.single('upload'),(req,res)=>{
//      res.send()
// })









app.use(bodyParser.json()); 
app.use(userRouter)
app.use(taskRouter)
app.use(bodyParser.urlencoded({ extended: true })); 





app.listen(port, () => {
    console.log("server is up on port ");
})

const Task = require('./models/task')
const User = require('./models/user')


const jwt = require('jsonwebtoken')


//     const token = jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 days'})
//     console.log(token);

//   const data=  jwt.verify(token,'thisismynewcourse')
// console.log(data);


// const main = async () => {
//     const task = await Task.findById("6418149daa4aef80866878d9");
//     console.log(task, task.owner);
//     await task.populate("owner");
//     console.log(task.owner);
//   }; main();


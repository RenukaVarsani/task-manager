const express = require('express')
const bodyParser = require('body-parser');
require('./db/mongoose')
const auth = require('./middleware/auth')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = 4000

// app.use((req,res,next)=>{
//    if(req.method==='GET'){
// res.send('get is disable')

//    }
//    else{
//     next()
//    }
// })


// app.use((req,res,next)=>{
   
//  res.status(503).send('site is currently down')
 
//     }
//     // else{
//     //  next()
//     // }
//  )
 



app.use(bodyParser.json());
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () => {
    console.log("server is up on port ");
})

const bcrypt = require('bcrypt')

const myfuction = async () => {

    const password = '12r34'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password);
    console.log(hashedPassword);

    const isMatch = await bcrypt.compare(password, hashedPassword)
    console.log(isMatch);
}

const jwt = require('jsonwebtoken')

const myFuction = async()=>{
    const token = jwt.sign({_id:'abc123'},'thisismynewcourse',{expiresIn:'7 days'})
    console.log(token);

  const data=  jwt.verify(token,'thisismynewcourse')
console.log(data);
}

myFuction()
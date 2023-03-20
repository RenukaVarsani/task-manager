const mongoose = require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    
})

// const User = mongoose.model('User',{
//     name:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     age:{
//         type:Number,
//         default:0,
//         validate(value){
//             if(value<0){
//                 throw new Error('age must be positive')
//             }
//         }
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true,
//         lowercase:true,
       
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('email is invalid')
//             }
//         }
//     },
//     password:{
//         type:String,
//         required:true,
//         minlength:7,
//         trim:true  ,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error("invalid password")

//             }
//         }
//     }
// })

// const me =new User({
//     name:"  riaa",
//         email:"rIAAa@gmail.com",
//         password:"     w535ugykjgem,j"
// })

// me.save().then(()=>{
//     console.log(me);
// }).catch((err)=>{
//     console.log("error",err);
// })


//  

// const task = new Task({
//     description:"learn mongodb",
  

// })

// task.save().then(()=>{
//     console.log(task);
// }).catch((err)=>{
//     console.log("error",err);
// })




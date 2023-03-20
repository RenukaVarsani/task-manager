
require('../src/db/mongoose')

const Task = require('../src/models/task')
//const User = require('../src/models/user');

// Task.findByIdAndDelete('641458faae71421b92e64796').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed:true})
// }).then((result)=>{
//         console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })

const deletetaskAndCount = async(id)=>{
    const task =await Task.findByIdAndDelete(id)
    const count =await Task.countDocuments({completed:true})
    return count
}   

deletetaskAndCount('6414304ebb67224dcfb3b4d8').then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log(e);
})
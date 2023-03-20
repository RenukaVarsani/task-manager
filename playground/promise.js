require('../src/db/mongoose')

const Task = require('../src/models/task')
const User = require('../src/models/user');

// Task.findByIdAndDelete('641458faae71421b92e64796').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({completed:true})
// }).then((result)=>{
//         console.log(result);
// }).catch((e)=>{
//     console.log(e);
// })


User.findByIdAndUpdate('641458faae71421b92e64796',{age:1}).then((user)=>{
    console.log(user);
    return User.countDocuments({age:1})
}).then((result)=>{
        console.log(result); 
}).catch((e)=>{
    console.log(e);
})

const UpdateAgeAndCount = async(id,age)=>{
    const user= await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}

UpdateAgeAndCount('64142e3889c590f9663a3d2c',20).then((count)=>{
    console.log(count);
}).catch((e)=>{
    console.log((e));
})
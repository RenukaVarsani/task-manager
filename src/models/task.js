const mongoose = require('mongoose')


const task =  mongoose.model('Task',{

    description: {
        type: String,
      //  required: true
    },
    completed: {
        type: Boolean,
        default: false
    },

  
    owner:
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }})






module.exports = task
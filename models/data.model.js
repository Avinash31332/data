const mongoose= require('mongoose');

const dataSchema= new mongoose.Schema({
    title:{
        type: String,
    },
    story:{
        type:String,
    },
    gameplay:{
        type:String,
    },
    user:{
        type: String,
    }
})

const Data= mongoose.model('data',dataSchema);

module.exports= Data;
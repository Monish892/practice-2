const mongoose=require('mongoose')

const connectdb=async()=>{
    try{
        mongoose.connect('mongodb+srv://grmonishs65:2007@monish.pnlhe.mongodb.net/practice3')
        console.log('Mongodb is connected')

    }catch(error){

        console.error(error.message)

    }
}

module.exports=connectdb;
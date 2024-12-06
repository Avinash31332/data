const express= require('express')
const dotenv= require('dotenv');
dotenv.config();
const PORT= process.env.PORT;
const connectToDB= require('./config/db');
connectToDB();
const inputData= require('./routes/input.routes');
const app= express();

app.use(express.static('public'));
app.set('view engine','ejs');

app.use(express.json());
app.use(express.urlencoded({extended:true}))

//routes
app.use('/',inputData);

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})
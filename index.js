const dotenv = require('dotenv');
const express = require('express');
const app = express();

const User = require('./model/userSchema')

dotenv.config({ path : './.env'})

app.use(express.json())

const port = process.env.PORT; 

app.use(require('./router/route'))



// const middleware = (req,res,next)=>{
//     console.log('this is your middleware')
//     next()
// }

// app.get('/',(req,res)=>{
//     res.send('your server is raning at index.js server ')
// })

// app.use(middleware)


app.listen(port,()=>{
    console.log(`your server is raning http://localhost:${port}`)
})



const mongoose = require('mongoose')

const db = process.env.DATABASE;

mongoose.connect(db)
.then(()=>{console.log('your connection is successful width mongodb atlas ')})
.catch((err)=>{console.log(`your connection is ${err}`)})
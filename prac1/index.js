let express = require('express');
let mongoose = require('mongoose');
// const { enqueryModel } = require('./model/enquery.model');
// const {enqueryInsert, enqueryList, enqueryDelete, enqueryUpdate } = require('./controller/userEnqueryController');
const enqueryRoutes = require('./Routes/userRoute');
require('dotenv').config();

let app = express();

app.use(express.json());

app.use("/api/enquery",enqueryRoutes);

//http://localhost:8000/api/enquery/enquery-list



mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connect to mongoDB");
    app.listen(process.env.PORT,()=>{
        console.log("app is running on port "+process.env.PORT);
    })
})




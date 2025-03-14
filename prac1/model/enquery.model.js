let mongoose = require('mongoose');

let userEnquerySchema = mongoose.Schema({
    name:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    phone_no:{
       type:String,
       require:true 

    },
    msg:{
        type:String,
        require:true
    }

});
let enqueryModel = mongoose.model("enquery",userEnquerySchema);

module.exports={enqueryModel};
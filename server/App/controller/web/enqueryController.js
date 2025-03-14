let EnqueryModel = require('../../model/enquery.model');


let enqueryInsert=(req,res)=>{
    let {name,email,phone,message}=req.body;
    let enquery = new EnqueryModel({
        name: name,
        email: email,
        phone: phone,
        message: message
    });
    enquery.save().then((enquery) => {
        res.status(200).send(enquery);
    }).catch((err) => {
        res.status(400).send(err);
    });
};
let enqueryList = (req, res) => {
    EnqueryModel.find().then((enquery) => {
        res.status(200).send(enquery);
    }).catch((err) => {
        res.status(400).send(err);
    });
}
let enqueryDelete = (req, res) => {
    let id = req.params.id;
    EnqueryModel.findByIdAndDelete(id).then((enquery) => {
        res.status(200).send(enquery);
    }).catch((err) => {
        res.status(400).send(err);    
    });
}
let enqueryUpdate = (req, res) => {
    let id = req.params.id;
    let {name,email,phone,message}=req.body;
    EnqueryModel.findByIdAndUpdate  (id, {  name: name, email: email, phone: phone, message: message }, { new: true }).then((enquery) => {
        res.status(200).send(enquery);
    }).catch((err) => {
        res.status(400).send(err);    
    });
}

module.exports ={enqueryInsert,enqueryList, enqueryDelete, enqueryUpdate} ;
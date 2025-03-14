
let mongoose = require('mongoose');
const { enqueryModel } = require('../model/enquery.model');


let enqueryInsert = (req,res)=>{
    let{sName, sEmail, sPhone, sMsg} = req.body;
    let enquery = new enqueryModel({
        name:sName,
        email:sEmail,
        phone_no:sPhone,
        msg:sMsg
    })
    enquery.save().then(()=>{
        // console.log("data saves");
        res.send({status:1,message:"enquery saved successfully"});
    }).catch((err)=>{
        // console.log(err);
        res.send({status:0,message:"error occured",err});
    })
       
}
let enqueryList = async(req,res)=>{
    let enqueryList =await enqueryModel.find();
    res.status(200).json({status:1,message:"data fetched",data:enqueryList})
    // res.send({status:1,message:"data fetched",data:enqueryList});

}
let enqueryDelete = async(req,res)=>{
    let enqueryid= req.params.id;
    let enquerydelete = await enqueryModel.deleteOne({_id:enqueryid});
    res.send({status:1,message:"deleted successfully",id:enqueryid,delRes:enquerydelete});

}
let enqueryUpdate = async(req,res)=>{
    let enqueryid=req.params.id;
    let{sName, sEmail, sPhone, sMsg} = req.body;
    let enqueryObj={
        name:sName,
        email:sEmail,
        phone_no:sPhone,
        msg:sMsg
    }
    let enqueryUpdate = await enqueryModel.updateOne({_id:enqueryid},enqueryObj);
    res.send({status:1,message:"updated successfully",id:enqueryid,updateRes:enqueryUpdate});

}
module.exports={enqueryInsert,enqueryList,enqueryDelete,enqueryUpdate};

const StudentModel=require("../Models/Fee")

// post
const CreateFee=async(req,res)=>{
    const newData=FeeModel(req.body)
    const SaveData=await newData.save()
    if(SaveData){
        res.send(SaveData)
    }
}
// Read 

const ReadFee=async (req,res)=>{
    const getData=await FeeModel.find()
    if(getData){
        res.send(getData)
    }
}

// read single data
const ReadSingleFee=async (req,res)=>{
    const getData=await FeeModel.find( {_id: req.params.id})
    if(getData){
        res.send(getData)
    }
}



const UpdateFee=async (req,res)=>{
    const updateData=await FeeModel.updateOne(
        {_id: req.params.id},
        {$set: req.body}
    )
    if(updateData){
        res.send("Succes Update")
    }
}

// delete

const DeleteFee=async (req,res)=>{
    const removeDate= await FeeModel.deleteOne({_id: req.params.id})

    if(removeDate){
        res.send("Succes Deleted")
    }
}
module.exports={CreateFee,ReadFee,ReadSingleFee,UpdateFee,DeleteFee }

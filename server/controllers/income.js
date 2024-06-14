const incomeSchema=require('../models/incomeSchema');


exports.addIncome=async(req,res)=>{

    const {title,amount,category,date,description,type}=req.body;
    const income=incomeSchema({
        title,
        amount,
        category,
        date,
        description,
        type
    });
try {
    
    if(!title || !amount || !category || !date ||!description){
        return res.status(400).json({message:"all fields are mandatory"});
    }

    if(amount <=0 || !amount==='numbers'){
        return res.status(400).json({message:"amount cant be negative"});
    }

    income.save();
    res.status(200).json({message:"income added"});
} catch (error) {
    res.status(500).json({message:"server error"});
}
}

exports.getIncomes=async(req,res)=>{
try {
    const incomes= await incomeSchema.find().sort({createdAt:-1})
    res.status(200).json(incomes);
} catch (error) {
    res.status(500).json({message:"servr error"});
}
}


exports.deleteIncome=async(req,res)=>{

    const {id}=req.params;
    incomeSchema.findByIdAndDelete(id)
    .then((income) =>{
       res.status(200).json({message:"deleted"})
    })
    .catch((err)=>{
         res.status(500).json({message:"server error"})
    })
}
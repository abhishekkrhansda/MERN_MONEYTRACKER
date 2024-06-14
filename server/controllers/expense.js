const expenseSchema=require('../models/expenseSchema');


exports.addExpense=async(req,res)=>{
    const {title,amount,date,category,description}=req.body;
    const expense=expenseSchema({
        title,
        amount,
        date,
        category,
        description
    })

try {
  

    if(!title || !amount || !date ||!category || !description){
        res.status(400).json({messsage:"all field are mandatory"});
    }
    if(amount<0 || !amount==='numbers'){
        res.status(400).json({message:"amount cant be in negative"});
    }

   await expense.save()
   res.status(200).json({message:"expense added"});
} catch (error) {
    res.status(500).json({message:"server error"});
}
}


exports.getExpense=async(req,res)=>{
    try {
        const incomes= await expenseSchema.find().sort({createdAt:-1})
        res.status(200).json(incomes);
    } catch (error) {
        res.status(500).json({message:"servr error"});
    }
    }
    
    
    exports.deleteExpense=async(req,res)=>{
    
        const id=req.params;
        expenseSchema.findByIdAndDelete(id)
        .then((income) =>{
           res.status(200).json({message:"deleted"})
        })
        .catch((err)=>{
             res.status(500).json({message:"server error"})
        })
    }

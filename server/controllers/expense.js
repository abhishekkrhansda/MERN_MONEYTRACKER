// const expenseSchema=require('../models/expenseSchema');


// exports.addExpense=async(req,res)=>{
//     const {title,amount,date,category,description}=req.body;
//     const expense=expenseSchema({
//         title,
//         amount,
//         date,
//         category,
//         description
//     })

// try {
  

//     if(!title || !amount || !date ||!category || !description){
//         res.status(400).json({messsage:"all field are mandatory"});
//     }
//     if(amount<0 || !amount==='numbers'){
//         res.status(400).json({message:"amount cant be in negative"});
//     }

//    await expense.save()
//    res.status(200).json({message:"expense added"});
// } catch (error) {
//     res.status(500).json({message:"server error"});
// }
// }


// exports.getExpense=async(req,res)=>{
//     try {
//         const incomes= await expenseSchema.find().sort({createdAt:-1})
//         res.status(200).json(incomes);
//     } catch (error) {
//         res.status(500).json({message:"servr error"});
//     }
//     }
    
    
//     exports.deleteExpense=async(req,res)=>{
    
//         const id=req.params;
//         expenseSchema.findByIdAndDelete(id)
//         .then((income) =>{
//            res.status(200).json({message:"deleted"})
//         })
//         .catch((err)=>{
//              res.status(500).json({message:"server error"})
//         })
//     }



//=================================================================================================================================================


const User = require('../models/User'); // Import User model instead of expenseSchema
const mongoose = require('mongoose');

exports.addExpense = async (req, res) => {
    const { title, amount, date, category, description } = req.body;
    const {userId} = req.params; // Assuming you have user ID in req.user.id
     

    try {
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }

        if (amount < 0) {
            return res.status(400).json({ message: "Amount must be a positive integer" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Add expense to user's expenses array
        user.expenses.push({ title, amount, date, category, description });
        await user.save();

        res.status(200).json({ message: "Expense added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getExpense = async (req, res) => {
    const {userId} = req.params; // Assuming you have user ID in req.user.id

    try {
        const user = await User.findById(new mongoose.Types.ObjectId(userId));
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user.expenses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.deleteExpense = async (req, res) => {
    const {userId,expenseId} = req.params; // Assuming you have user ID in req.user.id
    

    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Remove expense from user's expenses array
        user.expenses = user.expenses.filter(expense => expense._id != expenseId);
        await user.save();

        res.status(200).json({ message: "Expense deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

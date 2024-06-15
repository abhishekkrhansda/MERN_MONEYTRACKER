// const incomeSchema=require('../models/incomeSchema');


// exports.addIncome=async(req,res)=>{

//     const {title,amount,category,date,description,type}=req.body;
//     const income=incomeSchema({
//         title,
//         amount,
//         category,
//         date,
//         description,
//         type
//     });
// try {
    
//     if(!title || !amount || !category || !date ||!description){
//         return res.status(400).json({message:"all fields are mandatory"});
//     }

//     if(amount <=0 || !amount==='numbers'){
//         return res.status(400).json({message:"amount cant be negative"});
//     }

//     income.save();
//     res.status(200).json({message:"income added"});
// } catch (error) {
//     res.status(500).json({message:"server error"});
// }
// }

// exports.getIncomes=async(req,res)=>{
// try {
//     const incomes= await incomeSchema.find().sort({createdAt:-1})
//     res.status(200).json(incomes);
// } catch (error) {
//     res.status(500).json({message:"servr error"});
// }
// }


// exports.deleteIncome=async(req,res)=>{

//     const {id}=req.params;
//     incomeSchema.findByIdAndDelete(id)
//     .then((income) =>{
//        res.status(200).json({message:"deleted"})
//     })
//     .catch((err)=>{
//          res.status(500).json({message:"server error"})
//     })
// }



//========================================================================================================================================================================



const User = require('../models/User');
const mongoose= require('mongoose');

exports.addIncome = async (req, res) => {
    const { title, amount, category, date, description, type } = req.body;
    const { userId } = req.params;

    try {
        if (!title || !amount || !category || !date || !description) {
            return res.status(400).json({ message: "All fields are mandatory" });
        }

     if (amount <= 0 ) {
            return res.status(400).json({ message: "Amount must be a positive integer" });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Add income to user's incomes array
        user.incomes.push({ title, amount, category, date, description, type });
        await user.save();

        res.status(200).json({ message: "Income added" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getIncome = async (req, res) => {
    const {userId} = req.params;
console.log(req.params);
    try {
        const user = await User.findById(new mongoose.Types.ObjectId(userId));
        console.log(user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user.incomes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.deleteIncome = async (req, res) => {
    const { userId,incomeId} = req.params;
    
    console.log(userId);
    console.log(incomeId);

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        
        // const incomeObjectId = await User.findById(incomeId);
        // console.log(incomeObjectId);
        // Remove income from user's incomes array
        user.incomes = user.incomes.filter(income => income._id != (incomeId));
        await user.save();

        res.status(200).json({ message: "Income deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};








// const User = require('../models/User');

// exports.addIncome = async (req, res) => {
//     const { title, amount, category, date, description, type } = req.body;
//     const userId = req.user.id; // Assuming you have user ID in req.user.id

//     try {
//         if (!title || !amount || !category || !date || !description) {
//             return res.status(400).json({ message: "All fields are mandatory" });
//         }

//         if (amount <= 0 || !Number.isInteger(amount)) {
//             return res.status(400).json({ message: "Amount must be a positive integer" });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Add income to user's incomes array
//         user.incomes.push({ title, amount, category, date, description, type });
//         await user.save();

//         res.status(200).json({ message: "Income added" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// exports.getIncome = async (req, res) => {
//     const userId = req.user.id; // Assuming you have user ID in req.user.id

//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json(user.incomes);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// exports.deleteIncome = async (req, res) => {
//     const userId = req.user.id; // Assuming you have user ID in req.user.id
//     const incomeId = req.params.id;

//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Remove income from user's incomes array
//         user.incomes = user.incomes.filter(income => income._id != incomeId);
//         await user.save();

//         res.status(200).json({ message: "Income deleted" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };










// const User = require('../models/User'); // Import User model instead of incomeSchema

// exports.addIncome = async (req, res) => {
//     const { title, amount, category, date, description, type } = req.body;
//     const userId = req.user.id; // Assuming you have user ID in req.user.id

//     try {
//         if (!title || !amount || !category || !date || !description) {
//             return res.status(400).json({ message: "All fields are mandatory" });
//         }

//         if (amount <= 0 || !Number.isInteger(amount)) {
//             return res.status(400).json({ message: "Amount must be a positive integer" });
//         }

//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Add income to user's incomes array
//         user.incomes.push({ title, amount, category, date, description, type });
//         await user.save();

//         res.status(200).json({ message: "Income added" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// exports.getIncome = async (req, res) => {
//     const userId = req.user.id; // Assuming you have user ID in req.user.id

//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         res.status(200).json(user.incomes);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

// exports.deleteIncome = async (req, res) => {
//     const userId = req.user.id; // Assuming you have user ID in req.user.id
//     const incomeId = req.params.id;

//     try {
//         const user = await User.findById(userId);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });
//         }

//         // Remove income from user's incomes array
//         user.incomes = user.incomes.filter(income => income._id != incomeId);
//         await user.save();

//         res.status(200).json({ message: "Income deleted" });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: "Server error" });
//     }
// };

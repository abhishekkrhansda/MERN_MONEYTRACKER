const { addExpense, getExpense, deleteExpense } = require('../controllers/expense');
const { addIncome, getIncome, deleteIncome } = require('../controllers/income');
const { login, signup } = require('../controllers/auth');
const {addUser} =require('../controllers/user');

const router = require('express').Router();

router.post('/users',addUser);
router.post('/users/:userId/add-income', addIncome);
router.get('/users/:userId/get-income', getIncome);
router.delete('/users/:userId/delete-income/:incomeId', deleteIncome);
router.post('/users/:userId/add-expense', addExpense);
router.get('/users/:userId/get-expense', getExpense);
router.delete('/users/:userId/delete-expense/:expenseId', deleteExpense);
router.post('/signup', signup);
router.post('/login', login);


module.exports = router;

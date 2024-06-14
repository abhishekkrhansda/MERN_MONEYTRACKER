import React, { useContext, useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    // Calculate incomes
    const getIncomes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-incomes`);
            setIncomes(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching incomes:", error);
            setError("Error fetching incomes");
        }
    };

    const addIncome = async (income) => {
        try {
            const response = await axios.post(`${BASE_URL}add-income`, income);
            getIncomes();
        } catch (error) {
            console.error("Error adding income:", error);
            setError(error.response?.data?.message || "Error adding income");
        }
    };

    const deleteIncome = async (id) => {
        try {
            const res = await axios.delete(`${BASE_URL}delete-income/${id}`);
            getIncomes();
        } catch (error) {
            console.error("Error deleting income:", error);
            setError("Error deleting income");
        }
    };

    const totalIncome = () => {
        return incomes.reduce((total, income) => total + income.amount, 0);
    };

    // Calculate expenses
    const addExpense = async (expense) => {
        try {
            const response = await axios.post(`${BASE_URL}add-expense`, expense);
            getExpenses();
        } catch (error) {
            console.error("Error adding expense:", error);
            setError(error.response?.data?.message || "Error adding expense");
        }
    };

    const getExpenses = async () => {
        try {
            const response = await axios.get(`${BASE_URL}get-expenses`);
            setExpenses(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error fetching expenses:", error);
            setError("Error fetching expenses");
        }
    };

    const deleteExpense = async (id) => {
        try {
            const res = await axios.delete(`${BASE_URL}delete-expense/${id}`);
            getExpenses();
        } catch (error) {
            console.error("Error deleting expense:", error);
            setError("Error deleting expense");
        }
    };

    const totalExpenses = () => {
        return expenses.reduce((total, expense) => total + expense.amount, 0);
    };

    const totalBalance = () => {
        return totalIncome() - totalExpenses();
    };

    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return history.slice(0, 3);
    };

    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncomes,
            incomes,
            deleteIncome,
            expenses,
            totalIncome,
            addExpense,
            getExpenses,
            deleteExpense,
            totalExpenses,
            totalBalance,
            transactionHistory,
            error,
            setError
        }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

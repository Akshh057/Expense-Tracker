import React, { useState,useContext } from 'react'
import './form.css'
import { ExpenseTrackerContext } from '../../context/context';
import {v4 as uuidv4} from 'uuid';
import  { incomeCategories, expenseCategories} from '../../constants/categories';
import formatDate from '../../utils/formatDate'
const initialState ={
    type:"Income",
    category:"Business",
    amount:"",
    date: formatDate(new Date()),
}
const Form = () => {
    const[formData,setFormData] = useState(initialState);
    console.log(formData);
    const{addTransaction} = useContext(ExpenseTrackerContext);
    const createTransaction = () =>{
        const transaction = {...formData,amount:Number(formData.amount), id:uuidv4()}
        addTransaction(transaction);
        setFormData(initialState);
    }
    const selectedCategories = formData.type==="Income"? incomeCategories:expenseCategories;
    return (
        <div>
             <div className="form__main">
             
                <div className="form__item">
                    <p>
                        ...
                    </p>
                </div>
                {/* <form > */}
                <div className="form__main2">
                        {/* <input type="text"/> */}
                    <select  className="type__cat" value={formData.type} onChange={(e)=> setFormData({...formData,type:e.target.value})}>
                            <option selected="selected" disabled="disabled">Choose Type</option> 
                            <option value="Income">Income</option>
                            <option value="Expense">Expense</option>
                        </select>
                        <select className="type__cat" value={formData.category} onChange={(e)=> setFormData({...formData,category:e.target.value})}>
                        {selectedCategories.map((c)=>
                                <option key={c.type} value={c.type}>
                                    {c.type}
                                </option>
                            )}                         
                        </select>
                   
                </div>
                <div className="form__text">
                    <input type="number" placeholder="Amount" className="type__cat" value={formData.amount} 
                    onChange={(e)=> setFormData({...formData,amount:e.target.value})}
                     />
                    <input type="date" className="type__cat"
                    value={formData.date} 
                    onChange={(e)=> setFormData({...formData,date:formatDate(e.target.value)})}

                    />
                </div> 
                <button className="form__btn" type="submit" onClick={createTransaction}>
                            CREATE            
                </button>
                {/* </form> */}
             </div>
        </div>
    )
}

export default Form

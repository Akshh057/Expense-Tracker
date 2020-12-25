import React from 'react'
import './main.css';
import { HorizontalBar } from 'react-chartjs-2';
import Form from './Form';
import List from './List/List';
const Main = () => {
    return (
        <div className="main__con">
        <h2>Expense Tracker</h2>
            <div className="main__heading">
                <div className="main__balance">
                    Total Balance $100
                </div>
                <div className="main__tip">
                    {/* InfoCard */}
                    Try Saying: Add income for $100 in Category Salary for Monday...
                </div>
                <hr/>
                <Form/>
             </div>
                <div>
                    <div>
                        <div>
                            <List/>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Main

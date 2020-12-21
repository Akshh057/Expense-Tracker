import React from 'react'
import './main.css';
import { HorizontalBar } from 'react-chartjs-2';
const Main = () => {
    return (
        <div className="main__con">
            <div className="main__heading">
                <h2>Expense Tracker</h2>
                <div className="main__balance">
                    Total Balance $100
                </div>
                <div className="main__tip">
                    {/* InfoCard */}
                    Try Saving: Add income for $100 in Category Salary for Monday...
                </div>
                <hr/>

             </div>
                <div>
                    <div>
                        <div>
                            {/* List */}
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Main

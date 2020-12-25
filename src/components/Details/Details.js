import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import './details.css';
import useTransactions from '../../useTransactions';
const Details = ({title}) => {
    const {total,chartData} = useTransactions(title);
    return (
        <div className={ `${title=== "Income" ? "income":"expense"}` }>
           <h2>{title}</h2>
           <div >
                ${total}
           </div>
          <div style={{height:"auto", border:"1px solid red"}}>
                {chartData.lables} 
          </div>
           <Doughnut data={chartData}/> 
        </div>
    )
}

export default Details

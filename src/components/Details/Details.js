import React from 'react'
import {Doughnut} from 'react-chartjs-2';
import './details.css';
const Details = ({title}) => {
    return (
        // <Card className={classses.income}>
        //     <CardHeader title="Income"/>
        //     <CardContent>
        //         <Typography variant="h5">$50</Typography>
        //     </CardContent>
        // </Card>
        <div className={ `${title=== "Income" ? "income":"expense"}` }>
           <h2>{title}</h2>
           <div >
                $50
           </div>
        </div>
    )
}

export default Details

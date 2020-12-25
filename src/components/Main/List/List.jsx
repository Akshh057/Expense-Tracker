import React,{useContext} from 'react'
import {List as MUIList,ListItem,ListItemAvatar, ListItemText, Avatar,ListItemSecondaryAction,IconButton,Slide} from '@material-ui/core'
import {Delete} from '@material-ui/icons';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import useStyles from './stylelist';
import {ExpenseTrackerContext} from "../../../context/context";
const List = () => {
    const classes = useStyles();
    const {deleteTransaction,transactions} = useContext(ExpenseTrackerContext);
    // console.log(globalState);
    
    // const ob = {
    //     backg
    // }
    return ( 
        <MUIList dense={false} className={classes.list}>
                {transactions.map((transaction) =>(
                  <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={transaction.type === 'Income'? classes.avatarIncome : classes.avatarExpense}>
                                    <MoneyOffIcon  />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                            <ListItemSecondaryAction>
                                <IconButton  edge="end" aria-label="delete" onClick={()=> deleteTransaction(transaction.id)}>
                                    <Delete/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                  </Slide>  
                ))}
        </MUIList>
    )
}

export default List
//{transaction.type === 'Income'? classes.in : classes.ex} transaction.type === 'Income'? classes.avatarIncome : classes.avatarExpense
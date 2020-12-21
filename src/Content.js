import React from 'react'
import Details from './components/Details/Details'
import './Styles/content.css';
import Main from './components/Main/Main';
const Content = () => {
    return (
        <div className="content">
            <Details title="Income"/>
            <Main/>
            <Details title="Expense"/>
            
        </div>
    )
}

export default Content

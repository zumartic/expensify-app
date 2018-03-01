import React from 'react';
import { Link } from 'react-router-dom';

//props.history.push('/');

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>   
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
);

export default ExpenseListItem;
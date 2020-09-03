import React from 'react';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const handleRemove = () => {
        remove(e)
    }
    const remove = () => {
        console.log("removed")
        return
    }

    return (
        <>
            <ul className="BoxList">
                <li><Box height={100} width={100} backgroundColor="blue" remove={remove} /></li>
                <li><Box height={100} width={100} backgroundColor="black" /></li>
                <li><Box height={100} width={100} backgroundColor="purple" /></li>
            </ul>
            <div>< NewBoxForm /></div>
        </>
    );
}

export default BoxList;
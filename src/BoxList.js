import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {

    const remove = (e) => e.target.parentNode.remove()

    const [formData, setFormData] = useState({
        width: "",
        height: "",
        color: ""
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    };


    return (
        <>
            <ul className="BoxList">
                <li><Box height={100} width={100} backgroundColor="blue" remove={(e) => remove(e)} /></li>
                <li><Box height={100} width={100} backgroundColor="black" remove={(e) => remove(e)} /></li>
                <li><Box height={100} width={100} backgroundColor="purple" remove={(e) => remove(e)} /></li>
            </ul>
            <div>< NewBoxForm /></div>
        </>
    );
}

export default BoxList;
import React from 'react';
import './NewBoxForm.css'

function NewBoxForm() {

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <label htmlFor="width">Width: </label>
            <input id="width" type="text"></input>
            <label htmlFor="height">Height: </label>
            <input id="height" type="text"></input>
            <label htmlFor="Background Color">Background Color: </label>
            <input id="Background Color" type="text"></input>
        </form>
    );
}

export default NewBoxForm;
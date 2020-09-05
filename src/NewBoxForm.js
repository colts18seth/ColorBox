import React, { useState } from 'react';
import './NewBoxForm.css'

function NewBoxForm({ addBox }) {
    const INITIAL_STATE = {
        width: "",
        height: "",
        color: ""
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value
        }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        addBox(formData.width, formData.height, formData.color);
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <label htmlFor="width">Width:
            <input
                    id="width"
                    name="width"
                    type="text"
                    value={formData.width}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="height">Height:
            <input
                    id="height"
                    name="height"
                    type="text"
                    value={formData.height}
                    onChange={handleChange}
                />
            </label>
            <label htmlFor="color">Background Color:
            <input
                    id="color"
                    name="color"
                    type="text"
                    value={formData.color}
                    onChange={handleChange}
                />
            </label>
            <button>Add Box</button>
        </form>
    );
}

export default NewBoxForm;
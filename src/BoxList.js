import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
    const [boxes, setBoxes] = useState([]);
    const addBox = (width, height, color) => {
        setBoxes(boxes => [...boxes, { width, height, color }])
    };
    const remove = (e) => e.target.parentNode.remove();

    return (
        <>
            <div>< NewBoxForm addBox={addBox} /></div>
            <ul className="BoxList">
                {boxes.map(({ width, height, color }) =>
                    <Box
                        key={uuid()}
                        width={width}
                        height={height}
                        color={color}
                        remove={(e) => remove(e)}
                    />
                )}
            </ul>
        </>
    );
}

export default BoxList;
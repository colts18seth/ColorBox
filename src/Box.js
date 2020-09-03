import React from 'react';
import './Box.css';

const Box = ({ width, height, backgroundColor, remove }) => {

    return (
        <>
            <div className="Box" style={{ width: width, height: height, backgroundColor: backgroundColor }}  >
                <button onClick={remove}>X</button>
            </div>
        </>
    );
}

export default Box;
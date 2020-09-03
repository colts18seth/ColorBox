import React from 'react';
import './Box.css';

const Box = ({ width, height, backgroundColor }) => {

    return (
        <>
            <div className="Box" style={{ width: width, height: height, backgroundColor: backgroundColor }}  >
                <button>X</button>
            </div>
        </>
    );
}

export default Box;
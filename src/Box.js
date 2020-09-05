import React from 'react';
import './Box.css';

const Box = ({ width, height, color, remove }) => {

    const style = {
        width: Number(width),
        height: Number(height),
        backgroundColor: color
    }

    return (
        <li className="Box" style={style} data-testid="Box"  >
            <button onClick={remove}>X</button>
        </li>
    );
}

export default Box;
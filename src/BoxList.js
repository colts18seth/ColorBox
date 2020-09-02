import React from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

function BoxList() {
    return (
        <div className="BoxList">
            // TODO Add all box components here
            <Box height="100" width="100" backgroundColor="blue" />
            {/* < NewBoxForm /> */}
        </div>
    );
}

export default BoxList;
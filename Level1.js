import React, { useContext } from 'react';
import { ImamContext } from './Imam';
import Level2 from './Level2';

function Level1() {
    const { generalCommand } = useContext(ImamContext); 

    return (
        <div>
            <h2>Level 1 Musallis</h2>
            <p>General Command: {generalCommand}</p> {/* Display general command */}
            <Level2 />
        </div>
    );
}

export default Level1;

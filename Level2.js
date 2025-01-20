import React, { useContext, useEffect } from 'react';
import { ImamContext } from './Imam';

function Level2() 
{
    const { generalCommand, levelCommand, instructLevel } = useContext(ImamContext);

    const level = 2; 

    useEffect(() => {
        instructLevel(level);
    }, [level, instructLevel]);

    return (
        <div>
            <h3>Level 2 Musallis</h3>
            <p>General Command: {generalCommand}</p>
            {levelCommand && <p>Level-Specific Command: {levelCommand}</p>}
        </div>
    );
}

export default Level2;

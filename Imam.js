import React, { createContext, useState } from 'react';
import Level1 from './Level1';

const ImamContext = createContext();

function Imam() {
    const [generalCommand, setGeneralCommand] = useState("Switch off your mobile phones! 📵");
    const [levelCommand, setLevelCommand] = useState("");

    const instructLevel = (level) => {
        if (level === 2) {
            setLevelCommand("Level 2: Please open the windows. 🌬️");
        }
    };

    return (
        <div>
            <ImamContext.Provider value={{ generalCommand, levelCommand, instructLevel }}>
                <Level1 />
            </ImamContext.Provider>
        </div>
    );
}

export default Imam;
export { ImamContext };

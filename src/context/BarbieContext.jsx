import React, { createContext, useState, useContext } from 'react';
import { theme } from '../theme';

const BarbieContext = createContext();

export const useBarbie = () => useContext(BarbieContext);

export const BarbieProvider = ({ children }) => {
    const [outfit, setOutfit] = useState(null);
    const [barbieName, setBarbieName] = useState("My Barbie");
    const [selectedBarbieIndex, setSelectedBarbieIndex] = useState(0);
    const [hasSetupFinished, setHasSetupFinished] = useState(false);

    const finishSetup = () => {
        setHasSetupFinished(true);
    };

    const resetSetup = () => {
        setHasSetupFinished(false);
    };

    const value = {
        theme,
        outfit,
        barbieName,
        setBarbieName,
        selectedBarbieIndex,
        setSelectedBarbieIndex,
        hasSetupFinished,
        finishSetup,
        resetSetup
    };

    return (
        <BarbieContext.Provider value={value}>
            {children}
        </BarbieContext.Provider>
    );
};

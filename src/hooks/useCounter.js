import React, { useState } from 'react'

export const useCounter = (initialState = 1) => {

    const [counter, setCounter] = useState(initialState)

    const handleNext = () => {
        if (counter <= 99) {
            setCounter(counter + 1)
        };

    }

    const handlePrevious = () => {
        if (counter >= 1) {
            setCounter(counter - 1)
        };
    };

    return {
        handleNext,
        handlePrevious,
        counter
    };
};





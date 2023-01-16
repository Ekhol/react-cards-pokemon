import { useState } from 'react';
import axios from 'axios';

function useFlip(initialState = true) {
    const [isFlipped, setFlipped] = useState(initialState);

    const flipCard = () => {
        setFlipped(isUp => !isUp);
    };

    return [isFlipped, flipCard];
}

function useAxios(key, baseUrl) {
    const [responses, setResponses] = useState(key);

    const addResData = async (formatter = data => data, urlEnd = '') => {
        const res = await axios.get(`${baseUrl}${urlEnd}`);
        setResponses(data => [...data, formatter(res.data)]);
    };

    return [responses, addResData];
}

export { useFlip, useAxios };
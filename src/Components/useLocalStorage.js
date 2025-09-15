import { useState, useEffect } from 'react';

const useLocalStorageList = () => {
    let [locStorageList, setLocStorageList] = useState(null);

    useEffect(() => {
        const listToStore = todoList;
        setLocStorageList(listToStore); 
    }, [todoList]);

    return {locStorageList, setLocStorageList};
};

export default useLocalStorageList;
import { useEffect, useState } from 'react'

export const useFetch = (url) => {
    // funciones que conectan con la api y la desmontan
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });


    const getData = async () => {

        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url)
        const data = await resp.json();

        // console.log(data);

        setState({
            data: data,
            isLoading: false,
            error: null
        });

    };

    useEffect(() => {
        getData()
    }, [url]);


    return {
        data: state.data,
        isLoading: state.isLoading,
        error: state.error
    };

};

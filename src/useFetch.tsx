import { useState, useEffect } from "react";

const fetchdata = async function(url: string, abortController : AbortController) {
    try {
            const response = await fetch(url, { signal: abortController.signal });
            if (response.ok !== true) {
                throw new Error();
            }
            const data = await response.json();
            return data;
        } catch (error : any) {
            error.message = "can't show content";
            throw error;
        }
}

const useFetch = (url : string) => {
    const [data, setData] = useState(undefined);
    const [isLoading , setIsLoading] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const abortController = new AbortController();
        const data = fetchdata(url, abortController);
        
        data.then((data) => {
                    setData(data);
                    setError(undefined);
                })
            .catch((error) => {
                    if (error.name !== 'AbortError')
                        setError(error.message);
                })
            .finally(() => setIsLoading(false));
            return () => abortController.abort();
    }, [url])
    return ({data, isLoading, error});
}

export default useFetch; 
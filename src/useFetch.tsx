import { useState, useEffect } from "react";


const fetchdata = async function(url: string) {
    try {
            const response = await fetch(url);
            if (response.ok !== true) {
                throw new Error();
            }
            const data = await response.json();
            return data;
        } catch (error : any) {
            throw new Error("can't show blogs");
        }
}

const useFetch = (url : string) => {
    const [data, setData] = useState(undefined);
    const [isLoading , setIsLoading] = useState(true);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const data = fetchdata(url);
        data.then((data) => {
            setData(data);
        })
        .catch((error) => {
            setError(error.message);  
        })
        .finally(() => setIsLoading(false));
    }, [])
    return ({data, isLoading, error});
}

export default useFetch; 
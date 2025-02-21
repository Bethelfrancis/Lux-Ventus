"use client"
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ erorr, setError ] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    throw new Error('Ran into an Error')
                }
                const result = await res.json()
                setData(result)
            } catch (error) {
                setError(erorr);
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [url])

    return { data, erorr, loading }
}
 
export default useFetch;
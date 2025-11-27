import { useEffect, useState } from "react"

export const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error,setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null)
        const handleProdutos = async () => {
           try {
            const apiProdutos = await fetch(url)
            const data = await apiProdutos.json()
            setData(data)
           } catch (error) {
            setError(error)
           }
           finally{
            setLoading(false)
           }
        }

        handleProdutos()
    }, [url])

    return {data, loading, error}
}
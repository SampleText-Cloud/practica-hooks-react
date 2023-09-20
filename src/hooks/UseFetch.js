import { useEffect } from "react"
import { useState } from "react"


export const UseFetch = (url) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        errors: null
    })

    const getFetch = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setState({
                data,
                isLoading: false,
                errors: null
            })
        } catch (error) {
            
        }
    }

    useEffect(() => {
        getFetch()
    }, [url])

    return {
        data,
        isLoading,
        errors
    }
}

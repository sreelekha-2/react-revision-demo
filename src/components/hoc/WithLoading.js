import { useEffect, useState } from "react"

export const withLoading = (WrappedComponent) => {
    const WithLoading = () => {
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            setTimeout(() => {
                setIsLoading(false)
            }, 2000)
        }, [])

        return <WrappedComponent isLoading={isLoading}/>
    }

    return WithLoading
}
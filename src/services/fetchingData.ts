export const FetchingData = async<T>(url: string): Promise<T> => {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error("Something went wrong!")
    }
    const data: T = await response.json()
    return data
}
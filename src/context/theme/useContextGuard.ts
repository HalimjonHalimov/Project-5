import { useContext, type Context } from "react";

export const useContextGuard = <T>(context: Context<T | null>, hookName: string): T => {
    const value = useContext(context)

    if (value === null) {
        throw new Error(`${hookName} must be within Provider`)
    }
    return value
}
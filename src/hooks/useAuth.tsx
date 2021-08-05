import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

// Serve para otimizar os imports
export function useAuth() {
    const value = useContext(AuthContext)

    return value;
}
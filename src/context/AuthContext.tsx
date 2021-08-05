import { ReactNode, useState, createContext, useEffect } from "react"
import { firebase, auth } from "../services/firebase"

// Tipagem de usuário
type User = {
    id: string;
    name: string;
    avatar: string;
}

// O Promise é pq toda função async devolve uma Promise
type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>; 
}

type AuthProviderProps = {
    children: ReactNode;
}

// Criando o context e colocando a tipagem para o objeto que ele pode receber
// Usamos o contexto para compartilhar as informações entre vários componentes
// Podendo ser variáveis e até mesmo função  
export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthProviderProps) {
    const [user, setUser] =  useState<User>()

    // O useEffect sempre recebe 2 parametros uma função e o segundo sempre será um array
    // Ela é usada para sempre que algo acontecer executar uma função
    // Nesse caso usamos para sempre que recarregar a aplicação ele ir no firebase verificar se já tinha um usuário logado se sim ele já coloca como logado na aplicação
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
        if (user) {
          const {displayName, photoURL, uid} = user
    
          if (!displayName || !photoURL) {
            throw new Error('Missing information from Google Account')
          }
    
          setUser({
            id: uid,
            name: displayName,
            avatar: photoURL
          })
        }
      })
  
      return () => {
        unsubscribe();
      }
    }, [])
  
    async function signInWithGoogle() {
      // Direciona para você logar com a conta do google
      const provider = new firebase.auth.GoogleAuthProvider();
  
      const result = await auth.signInWithPopup(provider)
      
      if (result.user) {
        const {displayName, photoURL, uid} = result.user
  
        if (!displayName || !photoURL) {
          throw new Error('Missing information from Google Account')
        }
  
        setUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        })
      } 
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    );
}
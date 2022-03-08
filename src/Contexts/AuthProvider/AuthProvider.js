import React, { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // const AuthProvider = (props)=>{
    //     const {children}=props;
    // }
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {/* {props.children}   */}
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;

import React, { useContext } from 'react';
import useFirebase from '../../hooks/useFirebase'

const Login = () => {
    const { handleGoogleSignIn } = useFirebase()
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Google signIn</button>
        </div>
    );
};

export default Login;
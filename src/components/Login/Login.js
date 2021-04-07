import React, { useContext } from 'react';
import GoogleButton from 'react-google-button'
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { handleGoogleSignIn } from './LoginManager';






const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    //this function will call the handleGoogleSignIn from loginManager page 
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(response => {
            setLoggedInUser(response);
            //rendering to the initial page where it was intended 
            history.replace(from);
        });
    }

    return (
        <div>
            <h1>Login Page</h1>
            <GoogleButton
                onClick={googleSignIn}
            />
        </div>
    );
};

export default Login;
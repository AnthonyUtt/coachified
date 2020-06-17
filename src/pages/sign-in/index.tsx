import React from 'react';
import styles from './sign-in.module.scss';

// Components
import SignInComponent from '../../components/sign-in';

const SignInPage = () => {
    return (
        <div className="SignInPage">
            <div className={styles.background}>
                <SignInComponent />
            </div>
        </div>
    );
};

export default SignInPage;
import React, { useState, useContext, FormEvent } from 'react';
import styles from './main.module.scss';

// Services
import { FirebaseContext } from '../../services/firebase';

type Error = {
    message: string;
};

const SignIn = () => {
    const firebase = useContext(FirebaseContext);

    const [ email, setEmail ] = useState<string>('');
    const [ pass, setPass ] = useState<string>('');
    const [ error, setError ] = useState<Error>();

    const onSubmit = (e: FormEvent) => {
        if (email && pass) {
            firebase?.doSignInWithEmailAndPassword(email, pass)
                .then((user) => {
                    //TODO: Add auth user to Redux store
                    console.log(user);
                })
                .catch((err) => setError(err));
        }

        e.preventDefault();
    };

    return (
        <div className={styles.panel}>
            <h1 className={styles.header}>Sign In</h1>
            <form className={styles.form} onSubmit={onSubmit}>
                <input
                    className={styles.field}
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email Address"
                />
                <input
                    className={styles.field}
                    type="password"
                    name="password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                    placeholder="Password"
                />
                <button className={styles.btn} type="submit">Sign In</button>
                <p className={styles.error}>{error && error.message}</p>
            </form>
        </div>
    );
};

export default SignIn;
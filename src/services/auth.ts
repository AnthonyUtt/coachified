import Axios from 'axios';

import store from '../redux';
import { AuthStateChangedAction, AUTH_STATE_CHANGED } from '../redux/actions';

function UpdateAuthState(authUser: any) {
    let action: AuthStateChangedAction = {
        type: AUTH_STATE_CHANGED,
        authUser,
    };
    store.dispatch(action);
}

export async function SignUpWithEmailAndPassword(fName: string, lName: string, pName: string, email: string, password: string) {
    try {
        let formData = new FormData();
        formData.set('fName', fName);
        formData.set('lName', lName);
        formData.set('pName', pName);
        formData.set('email', email);
        formData.set('pass', password);
        
        const res = await Axios({
            url: 'https://api.getcoachified.com/signup',
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData,
        });

        if (res.status === 201)
            UpdateAuthState(res.data);
        
        return res;
    } catch (error) {
        let code = error.response.status;

        if (code === 400)
            throw Error('Bad Request');
        if (code === 500)
            throw Error('Oops! Looks like an issue on our end. Please try again later.')
        else
            throw Error('Unknown Error!');
    }
}

export async function LogInWithEmailAndPassword(email: string, password: string) {
    let formData = new FormData();
    formData.set('email', email);
    formData.set('pass', password);

    try {
        const res = await Axios({
            url: 'https://api.getcoachified.com/signin',
            method: 'POST',
            headers: { 'Content-Type': 'multipart/form-data' },
            data: formData,
        });

        UpdateAuthState(res.data);

        return res;
    } catch (error) {
        let code = error.response.status;

        if (code === 400)
            throw Error('Bad Request');
        else if (code === 404)
            throw Error('Email address not found');
        else
            throw Error('Unknown error!');
    }
}
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { BaseForm as Form, Button, TextInput } from '../BaseForm';

import { LogInWithEmailAndPassword } from '../../services/auth';

const SignInForm = () => {
    const [ error, setError ] = useState<any>();
    return (
        <>
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setError(null);
                LogInWithEmailAndPassword(values.email, values.password)
                    .then((valid) => {
                        
                    })
                    .catch(err => setError(err));
                setSubmitting(false);
            }}
        >
            <Form title="Sign In">
                <div className="form-error">
                    {
                        error
                        ? error.message
                        : ''
                    }
                </div>
                <TextInput label="Email Address" name="email" type="email" />
                <TextInput label="Password" name="password" type="password" />
                <Button type="submit" label="Submit" variant="secondary" />
            </Form>
        </Formik>
        </>
    );
};

export default SignInForm;
import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { StepForm as Form, TextInput } from '../BaseForm';

import { SignUpWithEmailAndPassword } from '../../services/auth';

const SignInForm = () => {
    const [ error, setError ] = useState<any>();
    return (
        <>
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                preferredName: '',
                email: '',
                password: '',
                confirmPassword: '',
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .max(30, 'Must be 30 characters or less')
                    .required('Required'),
                lastName: Yup.string()
                    .max(30, 'Must be 30 characters or less')
                    .required('Required'),
                preferredName: Yup.string()
                    .max(30, 'Must be 30 characters or less'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .required('Required'),
                confirmPassword: Yup.mixed()
                    .required('Required')
                    .test('match', 'Passwords do not match', function(value) {
                        return value === this.parent.password;
                    }),
            })}
            onSubmit={(values, { setSubmitting }) => {
                setError(null);
                SignUpWithEmailAndPassword(values.firstName, values.lastName, values.preferredName, values.email, values.password)
                    .catch(err => setError(err));
                setSubmitting(false);
            }}
        >
            <Form titles={['Personal Info', 'Credentials']}>
                <div>
                    <div className="form-error">
                        {
                            error
                            ? error.message
                            : ''
                        }
                    </div>
                    <TextInput label="First Name" name="firstName" />
                    <TextInput label="Last Name" name="lastName" />
                    <TextInput label="Preferred Name" name="preferredName" />
                </div>
                <div>
                    <div className="form-error">
                        {
                            error
                            ? error.message
                            : ''
                        }
                    </div>
                    <TextInput label="Email Address" name="email" type="email" />
                    <TextInput label="Password" name="password" type="password" autoComplete="new-password" />
                    <TextInput label="Confirm Password" name="confirmPassword" type="password" />
                </div>
            </Form>
        </Formik>
        </>
    );
};

export default SignInForm;
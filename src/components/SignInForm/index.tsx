import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { Button, TextInput } from '../BaseForm';

import { SignUpWithEmailAndPassword } from '../../services/auth';

const SignInForm = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
            }}
            validationSchema={Yup.object({
                firstName: Yup.string()
                    .required('Required'),
                lastName: Yup.string()
                    .required('Required'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Required'),
                password: Yup.string()
                    .required('Required'),
            })}
            onSubmit={(values, { setSubmitting }) => {
                SignUpWithEmailAndPassword(values.email, values.password);
                setSubmitting(false);
            }}
        >
            <Form>
                <TextInput label="First Name" name="firstName" />
                <TextInput label="Last Name" name="lastName" />
                <TextInput label="Email Address" name="email" type="email" />
                <TextInput label="Password" name="password" type="password" />
                <Button type="submit" label="Submit" variant="secondary" />
            </Form>
        </Formik>
    );
};

export default SignInForm;
import React from 'react';
import { Form, FormikFormProps } from 'formik';
import './styles.scss';

type FormProps = {
    title?: string;
} & FormikFormProps;

const BaseForm = ({title, ...props}: FormProps) => {
    return (
        <Form className="base-form" {...props}>
            {
                title
                ? <h3 className="form-title">{title}</h3>
                : null
            }
            {props.children}
        </Form>
    );
};

export default BaseForm;
import React from 'react';
import { useField } from 'formik';
import './styles.scss';

type InputProps = {
    label: string,
    id?: string,
    name: string,
    type?: string,
}

const TextInput = ({ label, ...props }: InputProps) => {
    const [ field, meta ] = useField(props.name);

    return (
        <div className="text-input">
            <label className="label" htmlFor={props.id || props.name}>{label}</label>
            <input className={`input${meta.touched && meta.error ? ' err-outline' : ''}`} type={props.type || "text"} {...field} {...props} />
            <div className="error">
                {
                    meta.touched && meta.error
                    ? meta.error
                    : ''
                }
            </div>
        </div>
    );
};

export default TextInput;
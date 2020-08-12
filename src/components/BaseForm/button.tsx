import React, { useEffect, useState, FormEvent} from 'react';

type ButtonProps = {
    label: string;
    id?: string;
    type?: "button" | "submit" | "reset";
    onClick?: (e: FormEvent) => void;
    variant?: "primary" | "secondary" | "dark" | "light";

}

const Button = ({label, ...props}: ButtonProps) => {
    const [ style, setStyle ] = useState('');

    useEffect(() => {
        if (props.variant) {
            if (props.variant === "primary") {
                setStyle("btn btn-primary");
            } else if (props.variant === "secondary") {
                setStyle("btn btn-secondary");
            } else if (props.variant === "dark") {
                setStyle("btn btn-dark");
            } else if (props.variant === "light") {
                setStyle("btn btn-light");
            }
        } else {
            setStyle("btn btn-primary");
        }
    }, [ props.variant ]);

    return (
        <button className={style} {...props}>
            {label}
        </button>
    );
};

export default Button;
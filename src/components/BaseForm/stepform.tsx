import React, { useState } from 'react';
import { Form, FormikFormProps } from 'formik';
import { Stepper, Step, StepLabel } from '@material-ui/core';
import './styles.scss';

import Button from './button';

type StepFormProps = {
    titles?: string[];
} & FormikFormProps;

const StepForm = ({ titles, ...props}: StepFormProps) => {
    const steps = React.Children.toArray(props.children);
    const [ step, setStep ] = useState(0);
    const currentStep = steps[step];

    const back = <Button label="Back" type="button" onClick={(e) => setStep(step => step - 1)} />
    const next = <Button label="Next" type="button" onClick={(e) => setStep(step => step + 1)} />
    const submit = <Button label="Submit" type="submit" />

    const navButtons = (
        <div className="btn-group">
            {
                (step === 0 && next)
                || (step === steps.length - 1 && <>{back}{submit}</>)
                || <>{back}{next}</>
            }
        </div>
    );

    return (
        <>
        <Stepper activeStep={step}>
            {steps.map((_val, idx) => {
                const stepProps: { completed?: boolean } = {};
                return (
                    <Step key={idx} {...stepProps}>
                        <StepLabel>
                            {
                                titles
                                ? titles[idx]
                                : ''
                            }
                        </StepLabel>
                    </Step>
                );
            })}
        </Stepper>
        <Form className="base-form" {...props}>
            {currentStep}
            {navButtons}
        </Form>
        </>
    );
};

export default StepForm;
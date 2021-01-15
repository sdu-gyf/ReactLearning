import React from 'react';
import Hello from '@/components/Hello';
import FormDemo from '@/components/FormDemo';

const FormLearning =()=> {
    return (
        <div>
            <Hello hello='受控表单' />
            <FormDemo />
        </div>
    );
}

export default FormLearning;
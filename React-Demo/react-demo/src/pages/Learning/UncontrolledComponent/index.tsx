import React from 'react';
import Hello from '@/components/Hello';
import UncontrolledComponent from '@/components/UncontrolledComponent';

const UncontrolledComponentLearning = () =>{
    return (
        <div>
            <Hello hello='UncontrolledComponent' />
            <UncontrolledComponent />
        </div>
    );
}

export default UncontrolledComponentLearning;
import React from 'react';
import Hello from '@/components/Hello';
import Parent from '@/components/LiftingStateUp/parent';

const LiftingStateUpLearning =()=> {
    return (
        <div>
            <Hello hello="Lifting state up" />
            <Parent />
        </div>
    );
}

export default LiftingStateUpLearning;
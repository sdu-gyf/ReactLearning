import React from 'react';
import Hello from '@/components/Hello';
import Compose from '@/components/Compose';

const ComposeLearing =()=>{
    return (
        <div>
            <Hello hello='组件组合' />
            <Compose>
                {/* 我没有使用自闭和 */}
            </Compose>
        </div>
    );
}

export default ComposeLearing;
import useRenderCheck from '@/hooks/renderCheck';
import React from 'react'

function TestMemo(props: any) {

    useRenderCheck('TestMemo')

    return (
        <h1>TestMemo</h1>
    )
}

export default React.memo(TestMemo)
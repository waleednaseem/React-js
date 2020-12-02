import React, { memo } from 'react'


const memoComponent = (p) => {
    console.warn('inner Component',p.data)
    return (
        <div>
           <h1>Data: {p.data}</h1> 
        </div>
    )
}

export default memo(memoComponent)

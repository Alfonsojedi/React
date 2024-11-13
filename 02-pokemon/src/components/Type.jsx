import { useState } from 'react'

export function Type({type}){
    return <div className={"col mb-1 type "+type}>{type}</div>
}

export default Type

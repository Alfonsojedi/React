import { useState } from 'react'

export function Type({type}){
    return <div className={"col type "+type}>{type}</div>
}

export default Type

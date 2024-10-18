import { useState } from 'react'
import ProgressBar from './ProgressBar'

export function Stater({stats}){
  return(
    <div className='p-1'>
        <ProgressBar amount={stats[0]["base_stat"]} stat={"Hp"}></ProgressBar>
        <ProgressBar amount={stats[1]["base_stat"]} stat={"Atk"}></ProgressBar>
        <ProgressBar amount={stats[2]["base_stat"]} stat={"Dfs"}></ProgressBar>
        <ProgressBar amount={stats[3]["base_stat"]} stat={"SAtk"}></ProgressBar>
        <ProgressBar amount={stats[4]["base_stat"]} stat={"SDfs"}></ProgressBar>
        <ProgressBar amount={stats[5]["base_stat"]} stat={"Spd"}></ProgressBar>
    </div>
  )
}
export default Stater
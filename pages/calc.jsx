import React, { useEffect, useState } from 'react'

export const calc = () => {
    const [totalSalary, setTotalSalary] = useState(0)
    const [totalHours, setTotalHours] = useState(0)

    const rateHour = 11

    const sumar = () => {
        setTotalSalary(prev => prev + rateHour)
        setTimeout(() => {
        window.localStorage.setItem('total', totalSalary)
        }, 50);
    }
    const restar = () => {
        setTotalSalary(prev => prev - rateHour)
        setTimeout(() => {
        window.localStorage.setItem('total', totalSalary)
        }, 50);
    }

    useEffect(() => {
        const total = window.localStorage.getItem('total')
      if(total){
        setTotalSalary(total)
      } else {
        setTotalSalary(0)
        window.localStorage.setItem('total', 0)
      }
    }, [])
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <span> {totalSalary}</span>
        <div className='mt-5 flex flex-row space-x-6'>
            <span>{totalHours}</span>
            Añadir total de horas <input onChange={()=> setTotalHours(parseInt(e.target.value))} type='text' placeholder="horas"></input>
            <button onClick={()=> restar()}>-1</button>
            <button onClick={()=> sumar()}>+1</button>

        </div>
    </div>
  )
}

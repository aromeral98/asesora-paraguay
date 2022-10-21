import React, { useEffect, useState } from 'react'

export default function Calc()  {
    const [totalSalary, setTotalSalary] = useState(0)
    const [totalHours, setTotalHours] = useState(0)

    const rateHour = '11.71'

    const sumar = () => {
        setTotalSalary(prev => parseFloat(prev) + parseFloat(rateHour))
        setTotalHours(prev => prev + 1)
        setTimeout(() => {
        window.localStorage.setItem('total', totalSalary)
        }, 50);
    }
    const restar = () => {
        setTotalSalary(prev => parseFloat(prev) - parseFloat(rateHour))
        setTotalHours(prev => min(prev - 1, 0))
        setTimeout(() => {
        window.localStorage.setItem('total', totalSalary)
        }, 50);
    }

    useEffect(() => {
        const total = parseFloat(window.localStorage.getItem('total'))
      if(total){
        setTotalSalary(total)
        setTotalHours(total / parseFloat(rateHour))
      } else {
        setTotalSalary(0)
        window.localStorage.setItem('total', 0)
      }
    }, [])
    useEffect(() => {
      setTotalSalary(totalHours * parseFloat('11.71'))
  }, [totalHours])
    
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
        <span> {totalSalary}</span>
        <div className='mt-5 flex flex-row space-x-6'>
            <button className='py-2 px-4 mx-2 bg-gray-400' onClick={()=> restar()}>-1</button>
            <button className='py-2 px-4 mx-2 bg-gray-400' onClick={()=> sumar()}>+1</button>
        </div>
            Añadir total de horas <input onChange={(e)=> setTotalHours(parseInt(e.target.value))} type='text' placeholder="horas"></input>
            <span>{totalHours} horas</span>
     </div>
  )
}

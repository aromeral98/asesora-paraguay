import React, { useEffect, useState } from 'react'

export default function Calc() {
  const [totalSalary, setTotalSalary] = useState(0)
  const [totalHours, setTotalHours] = useState(0)
  const [autocalculatedSalary, setAutocalculatedSalary] = useState(0)
  const [rateHour, setRateHour] = useState(0)

  const day = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()

  const hourWorkedSalary = '11.714'
  const salary = 1875

  function daysInMonth(iMonth, iYear) {

    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  const sumar = () => {
    setTotalSalary(prev => parseFloat(prev) + parseFloat(hourWorkedSalary))
    setTotalHours(prev => prev + 1)
    setTimeout(() => {
    }, 1000);
  }
  const restar = () => {
    setTotalSalary(prev => Math.max(parseFloat(prev) - parseFloat(hourWorkedSalary), 0))
    setTotalHours(prev => Math.max(prev - 1, 0))
    setTimeout(() => {
    }, 1000);
  }
  useEffect(() => {
    const daysOfMonth = daysInMonth(month, year)
    const hourSalary = salary / (daysOfMonth * 24)
    const firstOfMonth = new Date(year, month, 0, 0, 0, 0, 0).getTime()
    const currentWorkedTimeMiliseconds = new Date().getTime() - firstOfMonth
    const currentWorkedTimeHours = currentWorkedTimeMiliseconds / 3600000
    setRateHour(hourSalary)
    setTimeout(() => {
      setAutocalculatedSalary(currentWorkedTimeHours * hourSalary)
    }, 1000);
  }, [autocalculatedSalary])

  useEffect(() => {
    const total = parseFloat(window.localStorage.getItem('total'))
    if (total) {
      setTotalSalary(total)
      setTotalHours(total / parseFloat(hourWorkedSalary))
    } else {
      setTotalSalary(0)
      window.localStorage.setItem('total', 0)
    }
  }, [])
  useEffect(() => {
    if (totalHours && totalHours !== '') {
      setTotalSalary(totalHours * parseFloat('11.714'))
    }
    else {
      setTotalSalary(0)
    }
    window.localStorage.setItem('total', totalSalary)
  }, [totalHours])

  return (
    <div className='absolute h-full w-full' style={{ backgroundImage: "url('https://cdn.andro4all.com/andro4all/2022/04/maxim-berg-lnvpji4fC3c-unsplash.jpg?height=600')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='flex flex-col justify-center items-center mt-10 px-10 py-10' style={{ background: 'rgba(255,255,255,0.7)' }}>
        <span className='text-green-500 font-bold text-2xl '> {parseFloat(totalSalary).toFixed(2)} € </span>
        <div className='flex flex-row space-x-6 my-5'>
          <button className='py-2 px-4 bg-gray-400 rounded-lg hover:bg-gray-600 transition-all duration-500' onClick={() => restar()}>-1</button>
          <button className='py-2 px-4 bg-gray-400 rounded-lg hover:bg-gray-600 transition-all duration-500' onClick={() => sumar()}>+1</button>
        </div>

        Añadir total de horas <input className='border-2 border-gray-400 my-2 flex rounded-lg' value={Math.round(totalHours)} onChange={(e) => { if (e.target.value !== '') { setTotalHours(parseInt(e.target.value)) } else { setTotalHours(0) } }} type='text' placeholder="Introduce horas"></input>
        <span>{Math.round(totalHours)} horas</span>
        <div className='flex flex-row space-x-2 items-center my-2'><span>Worked hour rate: </span><span className='text-green-500 font-bold text-2xl ml-2'> {parseFloat(hourWorkedSalary).toFixed(2)} € </span></div>
        <div className='flex flex-row space-x-2 items-center my-2'><span>Hour rate: </span><span className='text-green-500 font-bold text-2xl ml-2'> {parseFloat(rateHour).toFixed(2)} € </span></div>
        <div className='flex flex-row space-x-2 items-center my-2'><span>Autocalculated salary: </span><span className='text-green-500 font-bold text-2xl ml-2'> {parseFloat(autocalculatedSalary).toFixed(4)} € </span></div>
      </div>
    </div>
  )
}

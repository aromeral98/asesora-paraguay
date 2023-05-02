import React, { useEffect, useState } from 'react'

export default function Calc() {
  const [PYGExchangeRate, setPYGExchangeRate] = useState(0)
  const [totalSalary, setTotalSalary] = useState(0)
  const [totalGrossCurrentSalary, setTotalGrossCurrentSalary] = useState(0)
  const [totalHours, setTotalHours] = useState(0)
  const [autocalculatedSalary, setAutocalculatedSalary] = useState(0)
  const [autocalculatedSalaryPYG, setAutocalculatedSalaryPYG] = useState(0)
  const [autocalculatedGrossSalary, setAutocalculatedGrossSalary] = useState(0)
  const [rateHour, setRateHour] = useState(0)
  const [rateGrossHour, setRateGrossHour] = useState(0)

  const day = new Date().getDate()
  const month = new Date().getMonth()
  const year = new Date().getFullYear()

  const hourWorkedSalary = '22'
  const hourGrossWorkedSalary = '22'
  const salary = 3520
  const grossSalary = 3520

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const cookies = document.cookie.split(';');
    const myCookie = cookies.find(cookie => cookie.trim().startsWith('currency='));
    const myCookieValue = myCookie ? myCookie.split('=')[1] : null;
    if (myCookieValue) {
      setPYGExchangeRate(myCookieValue)
    } else {
      try {
        const response = await fetch('https://api.currencyapi.com/v3/latest?base_currency=EUR&currencies=PYG', {
          headers: {
            'apikey': 'cJv7nX9WCG0ajF75fOzLVhQOplPGgmq0tEL3Ahg7',
          }
        });
        const data = await response.json();
        setPYGExchangeRate(data.data.PYG.value)
        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (12 * 60 * 60 * 1000)); // 12 horas en milisegundos
        document.cookie = `currency=${data.data.PYG.value}; expires=${expirationDate.toUTCString()}; path=/`;
      } catch (error) {
        console.log(error);
      }
    }
  };

  function daysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  function isWeekday(year, month, day) {
    var day = new Date(year, month, day).getDay();
    return day != 0 && day != 6;
  }

  function getWeekdaysInMonth(month, year) {
    var weekdays = 0;
    for (var i = 0; i < day; i++) {
      if (isWeekday(year, month, i + 1)) weekdays++;
    }
    return weekdays;
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
    const hourGrossSalary = grossSalary / (daysOfMonth * 24)
    const firstOfMonth = new Date(year, month, 0, 0, 0, 0, 0).getTime()
    const currentWorkedTimeMiliseconds = new Date().getTime() - firstOfMonth
    const currentWorkedTimeHours = currentWorkedTimeMiliseconds / 3600000
    setRateHour(hourSalary)
    setRateGrossHour(hourGrossSalary)
    setTimeout(() => {
      setAutocalculatedSalary(currentWorkedTimeHours * hourSalary)
      setAutocalculatedSalaryPYG(new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 6 }).format(currentWorkedTimeHours * hourSalary * PYGExchangeRate))
      setAutocalculatedGrossSalary(currentWorkedTimeHours * hourGrossSalary)
    }, 1000);
  }, [autocalculatedSalary])

  useEffect(() => {
    const total = getWeekdaysInMonth(month, year) * hourWorkedSalary
    const totalGross = getWeekdaysInMonth(month, year) * hourGrossWorkedSalary
    setTotalSalary(total)
    setTotalGrossCurrentSalary(totalGross)
    setTotalHours(getWeekdaysInMonth(month, year) * 8)
  }, [])

  useEffect(() => {
    setTotalSalary(totalHours * parseFloat(hourWorkedSalary))
    setTotalGrossCurrentSalary(totalHours * parseFloat(hourGrossWorkedSalary))
  }, [totalHours])

  return (
    <div className='absolute h-auto w-full' style={{ backgroundImage: "url('https://cdn.andro4all.com/andro4all/2022/04/maxim-berg-lnvpji4fC3c-unsplash.jpg?height=600')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='flex flex-col justify-center items-center m-10 py-10' style={{ background: 'rgba(255,255,255,0.7)' }}>
        <h2 className='font-bold text-xl my-5'>CURRENTLY WON SALARY</h2>
        <div className='flex flex-col items-center justify-center text-center'><span className='font-bold text-base lg:text-2xl'>Net salary:  <br /><span className='text-green-500'>{parseFloat(totalSalary).toFixed(2)} € </span></span></div>
        <div className='flex flex-col items-center justify-center text-center'><span className='font-bold text-base lg:text-2xl'>Net salary:  <br /><span className='text-green-500'>{new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 3 }).format((parseFloat(totalSalary) * parseFloat(PYGExchangeRate)))} PYG </span></span></div>
        <div className='flex flex-row space-x-6 mt-5'>
          <button className='py-2 px-4 bg-gray-400 rounded-lg hover:bg-gray-600 transition-all duration-500' onClick={() => restar()}>-1</button>
          <button className='py-2 px-4 bg-gray-400 rounded-lg hover:bg-gray-600 transition-all duration-500' onClick={() => sumar()}>+1</button>
        </div>
        Add hours <input className='border-2 border-gray-400 my-2 flex rounded-lg' value={Math.round(totalHours)} onChange={(e) => { if (e.target.value !== '') { setTotalHours(parseInt(e.target.value)) } else { setTotalHours(0) } }} type='text' placeholder="Add hours"></input>
        <span>{Math.round(totalHours)} horas</span>
        <h2 className='font-bold text-xl mt-5'>AUTOCALCULATED SALARY</h2>
        {/* <h5 className='font-bold text-lg mt-3'>GROSS SALARY</h5>
        <div className='flex flex-col space-x-2 items-center my-2'><span>Gross worked hour rate: </span><span className='text-red-500 font-bold text-base lg:text-2xl ml-2'> {parseFloat(hourGrossWorkedSalary).toFixed(2)} € </span></div>
        <div className='flex flex-col space-x-2 items-center my-2'><span>Gross hour rate: </span><span className='text-red-500 font-bold text-base lg:text-2xl ml-2'> {parseFloat(rateGrossHour).toFixed(2)} € </span></div>
        <div className='flex flex-col space-x-2 items-center my-2'><span>Autocalculated gross salary: </span><span className='text-red-500 font-bold text-base lg:text-2xl ml-2'> {parseFloat(autocalculatedGrossSalary).toFixed(4)} € </span></div> */}
        <h5 className='font-bold text-lg mt-3'>NET SALARY</h5>
        <div className='flex flex-col space-x-2 items-center my-2'><span>Net worked hour rate: </span><span className='text-green-500 font-bold text-base lg:text-2xl ml-2'> {parseFloat(hourWorkedSalary).toFixed(2)} € </span></div>
        <div className='flex flex-col space-x-2 items-center my-2'><span>Net worked hour rate: </span><span className='text-green-500 font-bold text-base lg:text-2xl ml-2'> {new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 3 }).format(parseFloat(hourWorkedSalary) * PYGExchangeRate)} PYG </span></div>

        <div className='flex flex-col space-x-2 items-center my-2'><span>Net hour rate: </span><span className='text-green-500 font-bold text-base lg:text-2xl ml-2'> {parseFloat(rateHour).toFixed(2)} € </span></div>
        <div className='flex flex-col space-x-2 items-center my-2'><span>Net hour rate: </span><span className='text-green-500 font-bold text-base lg:text-2xl ml-2'> {new Intl.NumberFormat('de-DE', { maximumSignificantDigits: 3 }).format(rateHour * PYGExchangeRate)} PYG </span></div>
        
        <div className='flex flex-col space-x-2 items-center my-2'><span>Autocalculated net salary: </span><span className='text-green-500 font-bold text-base lg:text-2xl ml-2'> {parseFloat(autocalculatedSalary).toFixed(4)} € </span></div>
        <div className='flex flex-col space-x-2 items-center my-2'><span>Autocalculated net salary: </span><span className='text-green-500 font-bold text-base lg:text-2xl ml-2'> {autocalculatedSalaryPYG} PYG </span></div>
      </div>
    </div>
  )
}

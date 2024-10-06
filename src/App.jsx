import { useState } from 'react'
import {InputBox} from './Components/index.js'
import useCurrencyInfo from './Hooks/useCurrencyInfo.js'

function App() {
const [convertedAmount, setconvertedAmount] = useState(0)
const [from, setFrom] = useState('usd')
const [to, setTo] = useState('inr')
const [amount, setAmount] = useState(0)

const currencyOptions = useCurrencyInfo(from)
const options = Object.keys(currencyOptions)

const swap = () => {
  setTo(from)
  setFrom(to)
  setconvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert = () => {
  setconvertedAmount((amount * currencyOptions[to]).toFixed(3));
}


  return (
    <>
    <div className='w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center' 
    style={{backgroundImage: `url(https://images.pexels.com/photos/14891570/pexels-photo-14891570.jpeg?auto=compress&cs=tinysrgb&w=800)`}}
    >
      
      <form onSubmit={(e) => e.preventDefault()}>

        <div className='bg-black/60 backdrop-blur-sm rounded-lg border-black border-2 p-5 flex flex-col items-center justify-center'>
          
          <InputBox
          label='From'
          amount={amount}
          placeholder={'Amount'}
          currencyOptions={options}
          selectedCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
          />

          <button className='absolute text-sm font-semibold bg-black text-yellow-500 pt-1 px-3 pb-2 rounded-lg border-2 cursor-pointer  border-yellow-500 -translate-y-6'
          onClick={swap}
          type='button'
          >
            swap
          </button>

          <InputBox 
          classes='mt-2'
          label='To'
          amountDisabled 
          placeholder={'Converted Amount'}
          amount={convertedAmount}
          currencyOptions={options}
          selectedCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
          />

          <button className='w-full bg-black text-yellow-500 text-sm font-semibold p-2 mt-2 rounded-lg border-2 cursor-pointer border-yellow-500'
          onClick={convert}
          type='submit'
          >
            {`Convert from ${from.toUpperCase()} to ${to.toUpperCase()}`}
          </button>

        </div>

      </form>

    </div>
    </>
  )
}

export default App

import React from 'react'

function InputBox({
    label,
    amount,
    placeholder,
    onAmountChange,
    onCurrencyChange,
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyOptions = [],
    classes = "",
}) {
return (
    <div className={`bg-yellow-500 flex rounded-lg p-2 text-sm  ${classes}`}>

        <div className='w-3/2 flex flex-col'>
            <label className='px-1 font-medium'
            >{label}</label>

            <input type="number"
            className='py-1 px-2 rounded-lg outline-none w-full bg-white'
            placeholder={placeholder}
            disabled={amountDisabled}
            value={amount === 0 ? '' : amount}
            onChange={(e) => {
                const value = e.target.value;
                onAmountChange && onAmountChange(value === '' ? '' : Number(value))}}
            />
        </div>

        <div className='w-1/2 flex items-end flex-col ml-20'>

            <p className='px-1 font-medium'
            >Choose Currency</p>

            <select 
            className='py-1 px-2 rounded-lg outline-none w-1/2'
            value={selectedCurrency}
            onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
            >
                {currencyOptions.map((currency) => (
                    <option value={currency}>{currency.toUpperCase()}</option>
                ))}
            </select>

        </div>

    </div>
)
}

export default InputBox
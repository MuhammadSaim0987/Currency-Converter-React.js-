import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

// currency metadata (code + full name)
import currencies from "./data/currencies.json";

function App() {
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");

  // rates based on `from`
  const currencyRates = useCurrencyInfo(from);

  /**
   * Build dropdown options:
   * [
   *   { value: "usd", code: "USD", name: "United States Dollar" }
   * ]
   */
  const currencyOptions = Object.keys(currencyRates || {})
    .filter((key) => currencies[key])
    .map((key) => ({
      value: key,
      code: currencies[key].code,
      name: currencies[key].name,
    }));

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyRates[to]) return;
    setConvertedAmount((amount * currencyRates[to]).toFixed(3));
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/14891570/pexels-photo-14891570.jpeg?auto=compress&cs=tinysrgb&w=800)",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <div className="bg-black/60 backdrop-blur-sm rounded-lg border-black border-2 p-5 flex flex-col items-center justify-center relative">
          {/* FROM */}
          <InputBox
            label="From"
            amount={amount}
            placeholder="Amount"
            currencyOptions={currencyOptions}
            selectedCurrency={from}
            onCurrencyChange={setFrom}
            onAmountChange={setAmount}
          />

          {/* SWAP */}
          <button
            type="button"
            onClick={swap}
            className="absolute text-sm font-semibold bg-black text-yellow-500 px-3 py-1 rounded-lg border-2 border-yellow-500 -translate-y-6"
          >
            swap
          </button>

          {/* TO */}
          <InputBox
            classes="mt-2"
            label="To"
            amountDisabled
            placeholder="Converted Amount"
            amount={convertedAmount}
            currencyOptions={currencyOptions}
            selectedCurrency={to}
            onCurrencyChange={setTo}
          />

          {/* CONVERT */}
          <button
            type="submit"
            className="w-full bg-black text-yellow-500 text-sm font-semibold p-2 mt-3 rounded-lg border-2 border-yellow-500"
          >
            Convert from {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;

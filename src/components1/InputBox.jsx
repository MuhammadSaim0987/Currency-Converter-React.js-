import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components1/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components1/ui/popover";

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
  const [open, setOpen] = React.useState(false);

  const selected = currencyOptions.find(
    (c) => c.value === selectedCurrency
  );

  return (
    <div className={`bg-yellow-500 flex gap-4 rounded-lg p-3 text-sm ${classes}`}>
      {/* Amount */}
      <div className="flex flex-col flex-1">
        <label className="px-1 font-medium text-black">{label}</label>

        <input
          type="number"
          className="mt-1 py-1.5 px-2 rounded-md outline-none w-full bg-white text-black border border-gray-300"
          placeholder={placeholder}
          disabled={amountDisabled}
          value={amount === 0 ? "" : amount}
          onChange={(e) => {
            const value = e.target.value;
            onAmountChange &&
              onAmountChange(value === "" ? "" : Number(value));
          }}
        />
      </div>

      {/* Currency dropdown */}
      <div className="flex flex-col items-end">
        <p className="px-1 font-medium text-black">Choose Currency</p>

        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              className="mt-1 w-40 justify-between bg-white text-black border border-gray-300"
            >
              {selected ? selected.code : selectedCurrency.toUpperCase()}
              <ChevronsUpDown className="ml-2 h-4 w-4 opacity-60" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-64 p-0 bg-white border border-gray-300 shadow-lg">
            <Command className="bg-white text-black">
              <CommandInput
                placeholder="Search currency..."
                className="h-9 border-b border-gray-200"
              />

              <CommandEmpty>No currency found.</CommandEmpty>

              {/* ✅ SCROLL ENABLED HERE */}
              <CommandGroup className="max-h-60 overflow-y-auto">
                {currencyOptions.map((currency) => (
                  <CommandItem
                    key={currency.value}
                    value={`${currency.code} ${currency.name}`}
                    onSelect={() => {
                      onCurrencyChange(currency.value);
                      setOpen(false);
                    }}
                    className="cursor-pointer"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedCurrency === currency.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />

                    <div className="flex flex-col">
                      <span className="font-medium">
                        {currency.code}
                      </span>
                      <span className="text-xs text-gray-500">
                        {currency.name}
                      </span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default InputBox;

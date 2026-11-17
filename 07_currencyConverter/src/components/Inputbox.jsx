import { useId } from "react";

function Inputbox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currenyOption = [],
    selectOption = "inr",
    amountDisabled = false,
    currencyDisabled = false,
    className = ""
}){
    const amountInputId = useId()

    return(
        <>
            <div className={`flex gap-4 p-4 ${className}`}>
            <label htmlFor={amountInputId}>{label}</label>
            <input
                type="number"
                id={amountInputId}
                placeholder="Amount"
                className="border border-gray-300 rounded-md px-3 py-2"
                value={amount}
                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
                disabled = {amountDisabled}
            />
            <div className="border border-gray-300 rounded-md px-3 py-2">
                <select value={selectOption} onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)} disabled={currencyDisabled}>
                    {
                        currenyOption.map((currency)=>(<option key={currency} value={currency}>{currency}</option>))
                    }
                </select>
            </div>
            </div>
        </>
    )
}

export default Inputbox
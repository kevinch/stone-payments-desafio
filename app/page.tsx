'use client'

import { ChangeEvent, useState } from "react"

const buyingWithCash = (ValorEmDolar: number, impostoDoEstado: number, valorDoDolar: number, IOFdaCompraDeDolar: number): number => {
  const a = ValorEmDolar + impostoDoEstado
  const b = valorDoDolar + IOFdaCompraDeDolar
  return a * b
}
const buyingWithCard = (ValorEmDolar: number, impostoDoEstado: number, IOFdeTransaçõesInternacionais: number, valorDoDolar: number): number => {
  const a = ValorEmDolar + impostoDoEstado + IOFdeTransaçõesInternacionais
  return a * valorDoDolar
}

export default function Home() {
  const [result, setResult] = useState(0)
  const [buyingOption, setBuyingOption] = useState('cash')

  const [dolarValue, setDolarValue] = useState(1)
  const [inputTax, setInputTax] = useState(1)

  return (
    <main>
      <header>
        <div>stone currency</div>
      </header>

      <div>
        <div>
          <label htmlFor="inputDolar">Dolar</label>
          <input type="number" id="inputDolar" name="inputDolar" required value={dolarValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setDolarValue(e.target.valueAsNumber)} />
        </div>

        <div>
          <label htmlFor="inputTax">Taxa do estado</label>
          <input type="number" id="inputTax" name="inputTax" required value={inputTax} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputTax(e.target.valueAsNumber)} />
        </div>

        <fieldset>
          <legend>Tipo de compra</legend>

          <div>
            <input type="radio" id="cash" name="drone" value="cash" onClick={() => setBuyingOption('cash')} defaultChecked />
            <label htmlFor="cash">Dinhero</label>
          </div>
          <div>
            <input type="radio" id="card" name="drone" value="card" onClick={() => setBuyingOption('card')} />
            <label htmlFor="card">Cartao</label>
          </div>
        </fieldset>

        <button onClick={() => setResult(buyingOption == 'cash' ? buyingWithCash(dolarValue, inputTax, 5, 1) : buyingWithCard(dolarValue, inputTax, 5.3, 5))}>Converter</button>

        {/* <div>buying option: {buyingOption}</div> */}
        <div>O resultado do calculo e: R$ {result}</div>
      </div>
    </main>
  );
}

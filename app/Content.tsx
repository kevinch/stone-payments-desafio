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

function Content(data: any) {
    const [calculated, setCalculated] = useState(false)
    const [result, setResult] = useState(0)
    const [buyingOption, setBuyingOption] = useState('cash')
    const [dolarValue, setDolarValue] = useState(1)
    const [inputTax, setInputTax] = useState(1)

    const valorDoDolar = data.data.USDBRL.high

    return (
        <div>
            {!calculated ? (
                <div>
                    <div>
                        <label htmlFor="inputDolar">Dolar</label><br />
                        <input type="number" id="inputDolar" name="inputDolar" required value={dolarValue} onChange={(e: ChangeEvent<HTMLInputElement>) => setDolarValue(e.target.valueAsNumber)} />
                    </div>

                    <div>
                        <label htmlFor="inputTax">Taxa do estado</label><br />
                        <input type="number" id="inputTax" name="inputTax" required value={inputTax} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputTax(e.target.valueAsNumber)} />
                    </div>

                    <fieldset style={{ margin: "50px 0" }}>
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

                    <button onClick={() => {
                        setResult(buyingOption == 'cash'
                            ? buyingWithCash(dolarValue, inputTax, valorDoDolar, 1.1)
                            : buyingWithCard(dolarValue, inputTax, 6.4, valorDoDolar))
                        setCalculated(true)
                    }
                    }>Converter</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => setCalculated(false)}>Voltar</button>
                    <footer style={{ marginTop: "50px" }}>
                        <div>O resultado do calculo e: R$ {Math.round(result * 100) / 100}</div>
                        <div>
                            <p>Compra no dinehiro e taxa de {inputTax}%</p>
                            <p>Cotacao do dolar: ${dolarValue} = R$ {Math.round(valorDoDolar * 100) / 100}</p>
                        </div>
                    </footer>
                </div>
            )}
        </div>
    )
}

export default Content
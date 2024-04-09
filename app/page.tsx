// import Image from "next/image";

export default function Home() {
  const now = new Date()

  return (
    <main>
      <header>
        <div>stone currency</div>
        <div>{JSON.stringify(now, null, 2)}</div>
      </header>

      <div>
        <div>
          <label htmlFor="inputDolar">Dolar</label>
          <input type="number" id="inputDolar" name="inputDolar" required />
        </div>

        <div>
          <label htmlFor="inputTax">Taxa do estado</label>
          <input type="number" id="inputTax" name="inputTax" required />
        </div>

        <fieldset>
          <legend>Tipo de compra</legend>

          <div>
            <input type="radio" id="cash" name="drone" value="cash" defaultChecked />
            <label htmlFor="cash">Dinhero</label>
          </div>
          <div>
            <input type="radio" id="card" name="drone" value="card" />
            <label htmlFor="card">Cartao</label>
          </div>
        </fieldset>

        <button disabled>Converter</button>

      </div>

    </main>
  );
}

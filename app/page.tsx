import Content from "./Content"

async function getData() {
  const res = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const data = await getData()

  return (
    <main>
      <header>
        <h1>Stone currency</h1>
      </header>

      <Content data={data} />
    </main>
  );
}

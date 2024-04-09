import Content from "./Content"
import Header from "./Header"
import './globals.css'

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
      <Header />
      <Content data={data} />
    </main>
  );
}

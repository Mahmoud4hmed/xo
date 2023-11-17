'use client';
import Image from 'next/image'
import { useState } from 'react'
import Cell from './components/cell'

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")

  console.log(cells)
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center align-middle">
      <h1 className='text-6xl hover:text-7xl hover:cursor-wait duration-300'>XO</h1>
      <div className="flex flex-wrap flex-row mb-5 border-4 border-solid rounded-lg hover:rounded-3xl duration-300 w-72 h-72 mt-10">
        {cells.map((cell, index) => (
          <Cell
          id={index} 
          go={go}
          setGo={setGo}
          key={index}
          cells={cells}
          setCells={setCells}
          cell={cell}
          />
        ))}
      </div>
      <div>{`It's ${go}'s turn!`}</div>
    </main>
  )
}

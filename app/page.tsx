'use client';
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Cell from './components/cell'

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState("")

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle")
      const crossWins = combo.every((cell) => cells[cell] === "cross")

      if (circleWins) {
        setWinningMessage("Circle wins!")
      } else if (crossWins) {
        setWinningMessage("Cross wins!")
      }
    })
  })

  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      setWinningMessage("It's a draw!")
    }
  }, [cells, winningMessage])
  
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
          winningMessage={winningMessage}
          />
        ))}
      </div>
      <div>{winningMessage}</div>
      <div>{!winningMessage && `It's ${go}'s turn!`}</div>
    </main>
  )
}

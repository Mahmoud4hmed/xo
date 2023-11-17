
type CellProps = {
    id: number
    go: string
    setGo: React.Dispatch<React.SetStateAction<string>>
    cells: string[]
    setCells: React.Dispatch<React.SetStateAction<string[]>>
    cell: string
    winningMessage: string
}

const Cell = ({go, setGo, id, cells, setCells, cell, winningMessage}: CellProps) => {
    const handleClick = (e) => {
        if (winningMessage){
            return;
        }
        const notTaken = !cells[id]
        if(notTaken){    
            if(go === "circle") {
                handleChange("circle")
                setGo("cross")
            } else if(go === "cross") {
                handleChange("cross")
                setGo("circle")
            }
        }
    }

    const handleChange = (cellToChange: string) => {
        let copyCells = [...cells]
        copyCells[id] = cellToChange
        setCells(copyCells)
    }

    return <div onClick={handleClick} className="flex justify-center items-center w-1/3 h-1/3 border-2 border-solid box-border rounded-md hover:rounded-2xl hover:border-blue-500">
        { cell === "circle" ? <div className="text-teal-500 text-5xl" >{cell ? (cell === "circle" ? "O" : "X") : ""}</div> 
        : <div className="text-red-500 text-5xl" >{cell ? (cell === "circle" ? "O" : "X") : ""}</div>}
    </div>
}
export default Cell
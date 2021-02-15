function Cell({ alive, onClick }) {
  return <div onClick={onClick} style={{
    border: '1px solid grey',
    background: alive ? 'black' : 'white',
    width: '15px',
    height: '15px'
  }} />
}

function Grid({ generation, handleEdit }) {
  return generation.map((row, rowIndex) => (
    <div key={rowIndex} style={{ display: 'flex', direction: 'column' }}>
      {row.map((cellState, columnIndex) => (
        <Cell
          key={`${rowIndex}-${columnIndex}`}
          alive={cellState}
          onClick={() => handleEdit(rowIndex, columnIndex, !cellState)}
        />
      ))}
    </div>
  ))
}

export default Grid

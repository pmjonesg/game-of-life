function Cell({ alive }) {
  return <div style={{
    border: '1px solid grey',
    background: alive ? 'black' : 'white',
    width: '15px',
    height: '15px'
  }} />
}

function Grid({ generation }) {
  return generation.map(row => (
    <div style={{ display: 'flex', direction: 'column' }}>
      {row.map(cellState => <Cell alive={cellState} />)}
    </div>
  ))
}

export default Grid

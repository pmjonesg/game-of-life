function InfoBox({ paused }) {
  return (
    <div style={{
      padding: '10px',
      background: 'white',
      border: '1px solid black',
      boxShadow: '5px 5px 8px black'
    }}>
      {paused ? 'Paused' : 'Running'}
    </div>
  )
}

export default InfoBox

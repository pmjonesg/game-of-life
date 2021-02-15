function InfoBox({ paused, generationCount }) {
  return (
    <div style={{
      padding: '10px',
      background: 'white',
      border: '1px solid black',
      boxShadow: '5px 5px 8px black',
      textAlign: 'center'
    }}>
      <h4>{paused ? 'Paused' : 'Running'}</h4>
      <h4>Generation: {generationCount}</h4>
    </div>
  )
}

export default InfoBox

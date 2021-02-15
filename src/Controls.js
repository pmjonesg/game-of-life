import MaterialIcon from 'material-icons-react'

function Controls({ handlePlay, handlePause }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      padding: '10px',
      background: 'white'
    }}>
      <MaterialIcon icon="skip_previous" size="medium" />
      <MaterialIcon icon="play_arrow" size="medium" onClick={handlePlay} />
      <MaterialIcon icon="pause" size="medium" onClick={handlePause} />
      <MaterialIcon icon="skip_next" size="medium" />
    </div>
  )
}

export default Controls

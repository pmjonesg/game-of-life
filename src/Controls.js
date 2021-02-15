import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import SkipNextIcon from '@material-ui/icons/SkipNext'

function Controls({ paused, handlePlay, handlePause, handlePrevious, handleNext, hasPrevious }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      padding: '10px',
      background: 'white'
    }}>
      <SkipPreviousIcon
        disabled={!hasPrevious}
        onClick={handlePrevious}
        fontSize="large"
        color={hasPrevious ? 'action' : 'disabled'}
      />
      <PlayArrowIcon
        onClick={handlePlay}
        color={!paused ? 'primary' : 'action'}
        fontSize="large"
      />
      <PauseIcon
        onClick={handlePause}
        color={paused ? 'primary' : 'action'}
        fontSize="large"
      />
      <SkipNextIcon
        onClick={paused ? handleNext : () => null}
        fontSize="large"
        color={paused ? 'action' : 'disabled'}
      />
    </div>
  )
}

export default Controls

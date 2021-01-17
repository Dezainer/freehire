import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

const Skill = ({
  name,
  proficiency='INTERESSADO',
  onRemove
}) => (
  <div className='p-4 mt-4 border-2 border-black rounded-md flex justify-between'>
    <div className='flex flex-col'>
      <h2 className='text-2xl font-bold'>{name}</h2>
      <p className='text-base'>{proficiency}</p>
    </div>
    {onRemove && <IconButton onClick={onRemove}>
      <CloseIcon />
    </IconButton>}
  </div>
)

export default Skill

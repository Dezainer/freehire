import { withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const CustomButton = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    backgroundColor: theme.palette.secondary.main,
    height: '3rem'
  }
}))(Button)

const MainButton = ({ children, ...props }) => (
  <CustomButton
    variant='contained'
    disableElevation
    fullWidth
    {...props}
  >
    {children}
  </CustomButton>
)

export default MainButton

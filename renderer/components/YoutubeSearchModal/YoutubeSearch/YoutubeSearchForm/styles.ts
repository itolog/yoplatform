import { createStyles, makeStyles } from '@material-ui/core/styles';
import constants from '../../../../shared/theme/constants';

const useStyles = makeStyles(() =>
  createStyles({
    form: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '5%',
    },
    textInput: {
      width: '80%',
    },
    submitButton: {
      width: '50px',
      height: constants.SEARCH_BAR_HEIGHT,
    },
  }),
);

export default useStyles;

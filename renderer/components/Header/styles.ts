import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import constants from '../../shared/theme/constants';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: constants.APP_BAR_HEIGHT,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export default useStyles;

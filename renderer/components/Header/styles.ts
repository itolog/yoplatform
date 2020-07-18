import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import constants from '../../shared/theme/constants';
import colors from '../../shared/theme/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: constants.APP_BAR_HEIGHT,
      background: colors.appBar,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }),
);

export default useStyles;

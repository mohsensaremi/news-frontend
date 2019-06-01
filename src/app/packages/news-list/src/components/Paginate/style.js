import withStyles from '@material-ui/core/styles/withStyles';
import merge from 'lodash/merge';

export default (extra) => withStyles(theme => merge({}, typeof extra === 'function' ? extra(theme) : {}), {flip: false});

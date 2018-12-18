import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 50
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  }
});

class SimpleSelect extends React.Component {
  state = {
    filter: 'All'
  };

  handleChange = event => {
    this.setState({ [event.target.filter]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filter-helper">Event Type</InputLabel>
          <Select
            value={this.state.filter}
            onChange={this.handleChange}
            input={<Input name="filter" id="filter-helper" />}
          >
            <MenuItem value="All">
              <em>All</em>
            </MenuItem>
            <MenuItem value={"Sports"}>Sports</MenuItem>
            <MenuItem value={"Concerts"}>Concerts</MenuItem>
            <MenuItem value={"Theater"}>Theater</MenuItem>
          </Select>
          <FormHelperText>Filter events</FormHelperText>
        </FormControl>
        <Divider />
      </form>
      
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
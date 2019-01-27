import React from "react";

let museums = [1, 2, 3, 4, 5];
let listItems = museums.map((museum, index) => <li key={index}>{museum}</li>);

class MuseumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "All" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {

    alert("You're viewing: " + this.state.value);
   if (this.state.value === "4bf58dd8d48988d18f941735") {
      // display only art museums
      listItems = museums.filter(
        museum =>
          this.state.markers.categories[0].id === "4bf58dd8d48988d18f941735"
      );
    } else if (this.state.value === "4bf58dd8d48988d190941735") {
      // display only art history
      listItems = museums.filter(
        museum =>
          this.state.markers.categories[0].id === "4bf58dd8d48988d190941735"
      );
    } else if (this.state.value === "4bf58dd8d48988d191941735") {
      // display only art science
      listItems = museums.filter(
        museum =>
          this.state.markers.categories[0].id === "4bf58dd8d48988d191941735"
      );
    }
    else {
      // display all museums
    }
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick a Type of Museum:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="All">All</option>
              <option value="4bf58dd8d48988d18f941735">Art Museum</option>
              <option value="4bf58dd8d48988d190941735">History Museum</option>
              <option value="4bf58dd8d48988d191941735">Science Museums</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default MuseumForm;

// import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import Divider from '@material-ui/core/Divider';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     marginLeft: 50
//   },
//   formControl: {
//     margin: theme.spacing.unit,
//     minWidth: 120,
//   }
// });

// class SimpleSelect extends React.Component {
//   state = {
//     filter: 'All'
//   };

//   handleChange = event => {
//     this.setState({ [event.target.filter]: event.target.value });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <form className={classes.root} autoComplete="off">

//         <FormControl className={classes.formControl}>
//           <InputLabel htmlFor="filter-helper">Event Type</InputLabel>
//           <Select
//             value={this.state.filter}
//             onChange={this.handleChange}
//             input={<Input name="filter" id="filter-helper" />}
//           >
//             <MenuItem value="All">
//               <em>All</em>
//             </MenuItem>
//             <MenuItem value={"Sports"}>Sports</MenuItem>
//             <MenuItem value={"Concerts"}>Concerts</MenuItem>
//             <MenuItem value={"Theater"}>Theater</MenuItem>
//           </Select>
//           <FormHelperText>Filter events</FormHelperText>
//         </FormControl>
//         <Divider />
//       </form>

//     );
//   }
// }

// SimpleSelect.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleSelect);

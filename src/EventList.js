// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Divider from '@material-ui/core/Divider';
// import InboxIcon from '@material-ui/icons/Inbox';
// // import DraftsIcon from '@material-ui/icons/Drafts';

// const styles = theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// });

// class EventList extends React.Component {
//   state = {
//     //selectedIndex: 1,
//     locations: [
//         {
//           title: "Park Ave Penthouse",
//           location: { lat: 40.7713024, lng: -73.9632393 }
//         },
//         {
//           title: "Chelsea Loft",
//           location: { lat: 40.7444883, lng: -73.9949465 }
//         },
//         {
//           title: "Union Square Open Floor Plan",
//           location: { lat: 40.7347062, lng: -73.9895759 }
//         },
//         {
//           title: "East Village Hip Studio",
//           location: { lat: 40.7281777, lng: -73.984377 }
//         },
//         {
//           title: "TriBeCa Artsy Bachelor Pad",
//           location: { lat: 40.7195264, lng: -74.0089934 }
//         },
//         {
//           title: "Chinatown Homey Space",
//           location: { lat: 40.7180628, lng: -73.9961237 }
//         }
//       ]
//   };

//   handleListItemClick = (event, index) => {
//     //this.setState({ selectedIndex: index });
//   };

//   render() {
//     const { classes } = this.props;
//     const { locations } = this.state;

//     return (
//       <div className={classes.root}>
//       <Divider />
//         <List component="nav" dense={true}>
//         {
//                     // if there are any books, map over them and add book details
//                     locations && locations.map((point, index) => {
//                         return (
//                             <div key={index}>
//                             <ListItem
//                                 button
//                                 //selected={this.state.selectedIndex === 0}
//                                 onClick={event => this.handleListItemClick(event, 0)}
//                             >
//                                 <ListItemIcon>
//                                 <InboxIcon />
//                                 </ListItemIcon>
//                                 <ListItemText primary={point.title} />
//                             </ListItem>
//                             <Divider />
//                             </div>
//                         )
//                     })
//                     }
//         </List>
//       </div>
//     );
//   }
// }

// EventList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(EventList);
// https://www.tutorialspoint.com/reactjs/reactjs_props_overview.htm

import React from "react";
import PropTypes from "prop-types";
import ListItem from "./ListItem";

const List = ({ venues, handleListItemClick }) => {
  return (
    <ol className="list" role="list">
      {/* if there are venues display each venue and with the props from app.js */}
      {venues &&
        venues.map((venue, index) => (
          <ListItem
            key={index}
            {...venue} // all venue info
            handleListItemClick={handleListItemClick}
          />
        ))}
    </ol>
  );
};

List.propTypes = {
  venues: PropTypes.array.isRequired,
  handleListItemClick: PropTypes.func.isRequired
};

export default List;

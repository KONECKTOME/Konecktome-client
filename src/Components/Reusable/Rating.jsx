import React from "react";
import EmptystarIcon from "../SvgIcons/EmptystarIcon";
import FullstarIcon from "../SvgIcons/FullstarIcon";
import HalfstarIcon from "../SvgIcons/HalfstarIcon";
import "../../css/Rating/Rating.css"
const Rating = ({ rating = "4.5", color = "#FEB62E",size="22" }) => {
  Number(rating);

  return (
    <div className="rating-box-wrapper">
      {rating >= 1 ? (
        <FullstarIcon color={color} size={size} />
      ) : rating >= 0.5 ? (
        <HalfstarIcon color={color} size={size}/>
      ) : (
        <EmptystarIcon color={color} size={size} />
      )}
      {rating >= 2 ? (
        <FullstarIcon color={color} size={size} />
      ) : rating >= 1.5 ? (
        <HalfstarIcon color={color} size={size}/>
      ) : (
        <EmptystarIcon color={color} size={size} />
      )}
      {rating >= 3 ? (
        <FullstarIcon color={color} size={size} />
      ) : rating >= 2.5 ? (
        <HalfstarIcon color={color} size={size}/>
      ) : (
        <EmptystarIcon color={color} size={size} />
      )}
      {rating >= 4 ? (
        <FullstarIcon color={color} size={size} />
      ) : rating >= 3.5 ? (
        <HalfstarIcon color={color} size={size}/>
      ) : (
        <EmptystarIcon color={color} size={size} />
      )}
      {rating >= 5 ? (
        <FullstarIcon color={color} size={size} />
      ) : rating >= 4.5 ? (
        <HalfstarIcon color={color} size={size}/>
      ) : (
        <EmptystarIcon color={color} size={size} />
      )}
      <span className="rating-text">{rating}</span>
    </div>
  );
};

export default Rating;


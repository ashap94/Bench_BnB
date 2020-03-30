import React from "react";
import { connect } from "react-redux";

const Review = ({ review, author }) => {
  const { rating, body } = review;
  return (
    <div>
      <ul>
        <li>Rating: {rating}</li>
        <li>
          {body} - by {author.username}
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ entities: { users } }, { review }) => {
  console.log("WHAT ARE USERS HERE IN REVIEW LIST CONTAINER:   ", users);
  console.log("WHAT IS REVIEW HERE IN REVIEW LIST CONTAINER:   ", review);
  //   console.log(
  //     "WHAT IS AUTHOR HERE IN REVIEW LIST CONTAINER:   ",
  //     users[review.author_id]
  //   );

  return {
    author: users[review.author_id]
  };
};

export default connect(mapStateToProps)(Review);

import React from "react";
import PropTypes from "prop-types";
import '../Assets/Style/Recipe.scss'

const RecipeMenu = ({ menuItem }) => {
  RecipeMenu.propTypes = {
    menuItem: PropTypes.number.isRequired,
  };
  return (
    <div className="item">
      {menuItem.map((item) => (
        <div className="item-con" key={item.id}>
          <div className="item-container">
            <img src={item.image} alt="" />
            <h2 className="StoryTitle">{item.title}</h2>
            <p className="storyDate">{item.date}</p>
            <p className="storyDescription">{item.description}</p>
            <button className="btn-ReadMore">Recipe</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecipeMenu;

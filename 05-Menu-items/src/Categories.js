import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};


// this is a less dynamic way to do it:

// const Categories = ({ filteredItems }) => {
//   return (
//     <div className="btn-container">
//       <button className="filter-btn" onClick={() => filteredItems("all")}>
//         All
//       </button>
//       <button className="filter-btn" onClick={() => filteredItems("breakfast")}>
//         Breakfast
//       </button>
//       <button className="filter-btn" onClick={() => filteredItems("lunch")}>
//         Lunch
//       </button>
//       <button className="filter-btn" onClick={() => filteredItems("shakes")}>
//         Shakes
//       </button>
//     </div>
//   );
// };

export default Categories;

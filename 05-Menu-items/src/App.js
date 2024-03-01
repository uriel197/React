import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;

/************* COMMENTS *************

***1: the purpose of the spread operator in this line is to convert the Set of unique categories back into an array for further manipulation or use. Without the spread operator, allCategories would be a Set object instead of an array, which might not be compatible with other parts of your code that expect an array. Also, you could've used a forEach() instead of map(), they both do the same thing.

in the line: return <Menu key={item.id} {...item} />

By spreading ...item, all key-value pairs of the item object are passed as individual props to the Menu component. This is useful when you have a dynamic set of properties and you want to pass them all without explicitly specifying each one.
Instead of manually specifying each property like <Menu id={item.id} title={item.title} category={item.category} ... />, the spread operator allows you to pass all properties in one go, which is more concise and maintainable, especially if the item object may have a large number of properties.

***2: In our filteredItems function, adding a return statement at the end is necessary to prevent execution of the subsequent code after the condition is met.

When you use return within a function, it immediately exits the function and returns the specified value. In our case, if the condition category === "all" is true, you want to set the menu state back to the original items array and then exit the function. Without the return statement, the function would continue executing the subsequent lines of code, potentially leading to unexpected behavior.

*/

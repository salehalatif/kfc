import React from 'react';

function App() {
  // Sample array of items with itemId, itemName, and itemCategory
  const items = [
    { itemId: 101, itemName: 'Option 1', itemCategory: 'Category A' },
    { itemId: 102, itemName: 'Option 2', itemCategory: 'Category B' },
    { itemId: 103, itemName: 'Option 3', itemCategory: 'Category A' },
    { itemId: 104, itemName: 'Option 4', itemCategory: 'Category C' },
    { itemId: 105, itemName: 'Option 5', itemCategory: 'Category B' },
  ];

  // Define a function to create the option elements for each property
  const createOption = (item, property) => {
    const key = item.itemId; // Use itemId as the key (assuming it's unique)
    const value = item[property];
    return <option key={key} value={value}>{value}</option>;
  };

  // Use the map function to create separate option lists for each property
  const itemidOptionList = items.map((item) => createOption(item, 'itemId'));
  const itemnameOptionList = items.map((item) => createOption(item, 'itemName'));
  const itemcategoryOptionList = items.map((item) => createOption(item, 'itemCategory'));

  return (
    <div>
      <h1>Item ID Options List:</h1>
      <select>
        {itemidOptionList}
      </select>

      <h1>Item Name Options List:</h1>
      <select>
        {itemnameOptionList}
      </select>

      <h1>Item Category Options List:</h1>
      <select>
        {itemcategoryOptionList}
      </select>
    </div>
  );
}

export default App;

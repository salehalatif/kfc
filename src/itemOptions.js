import React from 'react';

function App() {
  // Sample array of items with itemid & itemname
  const items = [
    { itemId: 101, itemName: 'Option 1' },
    { itemId: 102, itemName: 'Option 2' },
    { itemId: 103, itemName: 'Option 3' },
    { itemId: 104, itemName: 'Option 4' },
    { itemId: 105, itemName: 'Option 5' },
  ];

  // Define a function to create the option elements for item IDs and item names
  const createOption = (item, isItemId) => {
    const key = isItemId ? item.itemId : item.itemName;
    const value = isItemId ? item.itemId : item.itemName;
    return <option key={key} value={value}>{value}</option>;
  };

  // Use the map function to create separate option lists for item IDs and item names
  const itemidOptionList = items.map((item) => createOption(item, true));
  const itemnameOptionList = items.map((item) => createOption(item, false));

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
    </div>
  );
}

export default App;

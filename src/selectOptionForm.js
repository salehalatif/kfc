import React from 'react';

//import itemDetailsJson from './jsondata/itemDetails.json';

const itemDetailsJson = [
  { "id": 1, "name": "Item 1" },
  { "id": 2, "name": "Item 2" },
  { "id": 3, "name": "Item 3" },
  // More data...
];

const SelectOptionForm = () => {
  const ids = itemDetailsJson.map(item => item.id);

  return (
    <div>
      <label htmlFor="selectItem">Select an item:</label>
      <select className="form-select" id="selectItem">
        {ids.map(id => (
          <option key={id} value={id}>Item {id}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptionForm;

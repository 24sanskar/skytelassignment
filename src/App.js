import React, { useState } from "react";
import MultiSelect from "./MultiSelect";
import "./styles.css";

const myData = [
  { text: "Australia", value: 1 },
  { text: "Brazil", value: 2 },
  { text: "Canada", value: 3 },
  { text: "Denmark", value: 4 },
  { text: "Egypt", value: 5 },
  { text: "France", value: 6 },
  { text: "Germany", value: 7 },
  { text: "Honduras", value: 8 },
  { text: "India", value: 9 },
  { text: "Japan", value: 10 },
  { text: "Kenya", value: 11 },
  { text: "Lebanon", value: 12 },
  { text: "Mexico", value: 13 },
  { text: "Russia", value: 14 },
  { text: "Oman", value: 15 }
];
const App = () => {
  const preSelectedValues = [1, 2];
  const isReadOnly = false;
  const [selectedValues, setSelectedValues] = useState(preSelectedValues);

  const handleValueChange = (newValues) => {
    setSelectedValues(newValues);
  };

  return (
    <div>
      <div className="center">
        <MultiSelect
          data={myData}
          value={selectedValues}
          readonly={isReadOnly}
          onValueChange={handleValueChange}
        />
      </div>
    </div>
  );
};

export default App;

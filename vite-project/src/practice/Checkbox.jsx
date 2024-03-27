import { useState } from "react";
import { Form } from "react-bootstrap";

// const CheckboxSelectAll = () => {
//   const [items, setItems] = useState([
//     { id: 1, name: "Item 1", selected: false },
//     { id: 2, name: "Item 2", selected: false },
//     { id: 3, name: "Item 3", selected: false },
//     // Add more items as needed
//   ]);

//   const handleCheckboxChange = (itemId) => {
//     setItems((prevItems) =>
//       prevItems.map((item) =>
//         item.id === itemId ? { ...item, selected: !item.selected } : item
//       )
//     );
//   };

//   const handleSelectAllChange = () => {
//     setItems((prevItems) =>
//       prevItems.map((item) => ({ ...item, selected: !allSelected }))
//     );
//   };

//   const allSelected = items.every((item) => item.selected);

//   return (
//     <div>
//       <label>
//         <input
//           type="checkbox"
//           checked={allSelected}
//           onChange={handleSelectAllChange}
//         />
//         Select All
//       </label>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             <label>
//               <input
//                 type="checkbox"
//                 checked={item.selected}
//                 onChange={() => handleCheckboxChange(item.id)}
//               />
//               {item.name}
//             </label>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CheckboxSelectAll;

export const Checkbox = () => {
  const [checks, setChecks] = useState({
    selectAll: false,
    cow: false,
    dog: false,
  });
  return (
    <div className="container">
      <div className="row">
        <div className="mb-3">
          <Form>
            <Form.Check
              inline
              label="Select All"
              type="checkbox"
              checked={checks.selectAll}
              onChange={() => {
                setChecks((prev) => {
                  return {
                    ...prev,
                    selectAll: !checks.selectAll,
                    cow: !checks.selectAll,
                    dog: !checks.selectAll,
                  };
                });
              }}
            />
            <Form.Check
              inline
              label="Cow"
              type="checkbox"
              checked={checks.cow}
              onChange={() => {
                setChecks((prev) => {
                  return {
                    ...prev,
                    cow: !checks.cow,
                  };
                });
              }}
            />
            <Form.Check
              inline
              label="Dog"
              type="checkbox"
              checked={checks.dog}
              onChange={() => {
                setChecks((prev) => {
                  return {
                    ...prev,
                    dog: !checks.dog,
                  };
                });
              }}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

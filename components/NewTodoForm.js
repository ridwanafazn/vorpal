import { useState } from "react";
import { addTodo } from "../lib/crud";

const NewTodoForm = ({ setAllTodos }) => {
  const [newTodo, setNewTodo] = useState({
    name: "",
    category: "",
    description: "",
    date: "",
    eligibility: "",
    cost: "",
    registrationForm: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleAddTodo = () => {
    addTodo(newTodo, setNewTodo, setAllTodos);
    
  };

  return (
    <div className="mt-4">
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Upcoming EVent
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
        type="text"
        placeholder="Event Name"
        name="name"
        value={newTodo.name}
        onChange={handleInputChange}
        required
      />
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Category
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
        type="text"
        placeholder="Category"
        name="category"
        value={newTodo.category}
        onChange={handleInputChange}
        required
      />
      {/* Lanjutkan dengan input lainnya */}
      {/* ... */}
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Description
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
        type="text"
        placeholder="Description"
        name="description"
        value={newTodo.description}
        onChange={handleInputChange}
      />
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Date
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
        type="date"
        name="Date"
        value={newTodo.date}
        onChange={handleInputChange}
      />
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Location City
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
        name="location"
        value={newTodo.location}
        onChange={handleInputChange}
      >
        <option value="">Select City</option>
        <option value="Jakarta">Jakarta</option>
        <option value="Bandung">Bandung</option>
        <option value="Bogor">Bogor</option>
        <option value="Depok">Depok</option>
        <option value="Tangerang">Tangerang</option>
        <option value="Bekasi">Bekasi</option>
        <option value="Subang">Subang</option>
        <option value="Sumedang">Sumedang</option>
      </select>
      <label className="block text-grey-darker text-sm font-bold mb-2">
        Cost
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
        type="text"
        name="cost"
        value={newTodo.cost}
        onChange={handleInputChange}
      />

      <label className="block text-grey-darker text-sm font-bold mb-2">
        Form
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-grey-darker"
        type="text"
        name="registrationForm"
        value={newTodo.registrationForm}
        onChange={handleInputChange}
      />

      <button
        className="flex-no-shrink p-2 border-2 rounded text-green-500 border-green-500 hover:text-white hover:bg-green-500"
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default NewTodoForm;

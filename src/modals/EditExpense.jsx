import Modal from "react-modal";
import "./AddExpense.css";
import { useContext, useState } from "react";
import { AllContext } from "../contextApi/Contexts";

// eslint-disable-next-line react/prop-types
const EditExpense = ({ index, open, close }) => {
  const { balance, setBalance, setExpense, Expense, entries, handleEdit } =
    useContext(AllContext);
  const [price, setPrice] = useState();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState();
  const [date, setDate] = useState();
  const handleSave = () => {
    if (price > 0) {
      if (price > balance) {
        alert("insufficient balance");
      } else {
        setExpense(Expense + price);
        setBalance(balance - price);
        const upentry = {
          ptitle: title,
          date: date,
          category: category,
          price: price,
        };
        handleEdit(index, upentry);
      }

      setPrice("");
      setCategory("");
      setDate("");
      setTitle("");
      console.log(entries);
    } else {
      alert("enter valid amount");
    }

    close();
  };
  return (
    <Modal isOpen={open} onRequestClose={close} className="modal">
      <div className="main2">
        <h1>Edit Expenses</h1>
        <div className="expensemain">
          <div className="tipr">
            <div>
              <input
                type="text"
                required
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                placeholder="Price"
              />
            </div>
          </div>
          <div className="sedate">
            <div>
              <select
                name="category"
                value={category}
                required
                onChange={(e) => setCategory(e.target.value)}
              >
                <option>Select Category</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Food">Food</option>
                <option value="Travel">Travel</option>
              </select>
            </div>
            <div>
              <input
                type="date"
                className="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{ width: "180px" }}
              />
            </div>
          </div>
          <div className="butto">
            <div>
              <button className="Addeb" onClick={handleSave}>
                Update Expense
              </button>
            </div>
            <div>
              <button className="cancB" onClick={close}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default EditExpense;

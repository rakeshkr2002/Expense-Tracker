import { useContext, useState } from "react";
import { AllContext } from "../contextApi/Contexts";
import AddExpense from "../modals/AddExpense";

const Expense = () => {
  const expe = useContext(AllContext);
  const { Expense } = expe;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="Expense">
      <h2>
        Expense: <span>₹{Expense}</span>
      </h2>
      <button onClick={openModal}>+ Add Expense</button>
      
      <AddExpense open={isModalOpen} close ={closeModal}></AddExpense>

    </div>
  );
};

export default Expense;

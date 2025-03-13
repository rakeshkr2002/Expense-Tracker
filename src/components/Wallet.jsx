import { useContext, useState } from "react"
import { AllContext } from "../contextApi/Contexts"
import AddBalance from "../modals/AddBalance"

const Wallet = () => {
    const wall = useContext(AllContext)
    const{balance}=wall
    const [isModalOpen,setIsModalOpen]=useState(false);

    const openModal =()=>{
      setIsModalOpen(true);
    }
    const closeModal=()=>{
      setIsModalOpen(false);
    }
  return (
    <div className='wallet'>
       <h2>Wallet Balance : <span>₹{balance}</span> </h2>
      <button onClick={openModal}>
        + Add Income
      </button>
      <AddBalance open={isModalOpen} close={closeModal}></AddBalance>
    </div>
  )
}

export default Wallet

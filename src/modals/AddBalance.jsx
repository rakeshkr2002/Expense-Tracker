import Modal from "react-modal"
import "./AddBalance.css"
import { useContext, useState } from "react"
import { AllContext } from "../contextApi/Contexts"

// eslint-disable-next-line react/prop-types
const AddBalance = ({open ,close}) => {

    const {balance,setBalance}= useContext(AllContext)

    const [addbalance,setAddbalance]=useState("");
    const handleBalance=()=>{
        if(addbalance > 0){
            setBalance(balance + addbalance)
        }else{
            alert("please enter valid amount")
           
        }
        setAddbalance("")
        close();

    }
  return (
   <Modal isOpen={open} onRequestClose={close} className="moda">
    <div className="main3">
    <h1> Add Balance</h1>
    <div className="balance">
        <div>
            <input type="text" placeholder="Income Amount"  value={addbalance} onChange={(e)=>setAddbalance(Number(e.target.value))} />
        </div>
        <div>
            <button className="addbal" onClick={handleBalance}>Add Balance</button>
        </div>
        <div>
            <button className="cancel"onClick={close}>cancel</button>
        </div>
    </div>
    </div>

   </Modal>
  )
}

export default AddBalance

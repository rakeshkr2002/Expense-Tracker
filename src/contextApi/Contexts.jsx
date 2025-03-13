import { createContext, useState } from "react"

export const AllContext = createContext();
// eslint-disable-next-line react/prop-types
const Contexts = ({children}) => {

    let ai = "ok";
    let am =()=>{
        alert("hi welcome")
    }
    
    const [Expense,setExpense]=useState(0);
    const [balance,setBalance]=useState(5000);
  
    const [entries, setEntries] = useState([]);

    const handledelete=(index)=>{
        setEntries((prevEntries)=>{
          const deletedEntry = prevEntries[index];
          const fillterentries = prevEntries.filter((_,i)=> i!=index);

              if(deletedEntry){
                setExpense((Expense)=>Expense-deletedEntry.price);
                setBalance((balance)=>balance+deletedEntry.price);
              }

              return fillterentries;
        })
    }

    const handleEdit=(index,updatedentry)=>{
        setEntries((prevEntries)=>{
          return prevEntries.map((entry,i)=>{
            if(i=== index){
              return {...entry,...updatedentry}
            }
            return entry;
          })
        })
    }
 
    const addEntry = (ptitle, date, category, price) => {
      setEntries((prevEntries) => {
          const updatedEntries = [
              ...prevEntries,
              { ptitle, date, category, price },
          ];
          return updatedEntries;
      });
  };
  

  return (
    <div>
      <AllContext.Provider value={{ name: ai, am,balance ,Expense,setBalance,setExpense,addEntry,entries,handledelete,handleEdit}}>
        {children}
      </AllContext.Provider>
    </div>
  )
}

export default Contexts

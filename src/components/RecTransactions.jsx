import { useContext, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { AllContext } from "../contextApi/Contexts";
import { IoGiftOutline } from "react-icons/io5";
import { TiDeleteOutline } from "react-icons/ti";
import { MdOutlineModeEdit } from "react-icons/md";
import EditExpense from "../modals/EditExpense";

const RecTransactions = () => {
  const { entries ,handledelete} = useContext(AllContext);

   const [isModalOpen, setIsModalOpen] = useState(false);
  const [currPage,setCurrPage]= useState(1)

   const openModal = () => {
     setIsModalOpen(true);
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
   };
 const itemsPerPage =3;
 const totalPages =Math.ceil(entries.length/itemsPerPage);

 const paginatedEntries=entries.slice(
  (currPage-1)*itemsPerPage,
  currPage*itemsPerPage
 )

 const handlePrevPage=()=>{
  if(currPage>1){
    setCurrPage(currPage-1);
  }
 }
 const handleNextPage=()=>{
  if(currPage<totalPages)
    setCurrPage(currPage+1)
  }



  return (
    <div className="RecTransactions">
      <div className="Rect1up">
        {
          // ptitle, date, category, price
          paginatedEntries.length > 0 ? (
            paginatedEntries.map((item, index) => {
              return (
                <>
                
                <div key={index} className="rectcontene">
                  <div className="outcate" >
                    <div className="cate">
                      {item.category === "Entertainment" && (
                        <span>
                          <IoGiftOutline></IoGiftOutline>
                        </span>
                      )}
                      {item.category === "Food" && <span>🍔</span>}
                      {item.category === "Travel" && <span>✈️</span>}
                    </div>
                  </div>
                  <div className="ptda">
                    <p>{item.ptitle}</p>
                    <p>{item.date}</p>
                  </div>
                  <div className="picon">
                    <div>
                      <p> ₹{item.price}</p>
                    </div>
                    <div className="tidelete"  >
                      <TiDeleteOutline onClick={()=>handledelete(index)}></TiDeleteOutline>
                    </div>

                    <div className="mdoutlne">
                      <MdOutlineModeEdit onClick={openModal}></MdOutlineModeEdit>
                        <EditExpense index ={index} open={isModalOpen} close={closeModal}></EditExpense>
                    </div>
                  </div>
                </div>
                <div className="lineowner">
                <h1 className="line"></h1>

                </div>
                </>
              );
            })
          ) : (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No transactions availabe
            </p>
          )
        }
      </div>
      <div className="Rect2">
        <div className="use">
          <div className="arrow">
            <BsArrowLeft onClick={handlePrevPage}></BsArrowLeft>
          </div>
          <div className="number"> {currPage}</div>
          <div className="arrow">
            <BsArrowRight onClick={handleNextPage}></BsArrowRight>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecTransactions;

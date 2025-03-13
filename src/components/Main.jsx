import { useContext } from "react"
import  { AllContext } from "../contextApi/Contexts"
import Dashboard from "./Dashboard"

const Main = () => {
   let values= useContext(AllContext)
  return (
    <>
      <div className="main">
            <div className="circles">
                <div className="circle circle-left"></div>
                <div className="circle circle-mid" ></div>
                <div className="circle circle-right"></div>
            </div>
            <Dashboard></Dashboard>
      </div>
    </>
  )
}

export default Main

import ChartTop from "./ChartTop"
import Expense from "./Expense"
import Wallet from "./Wallet"

const TopDashboard = () => {
  return (
    <div className='TopDashboard'>
      <div className="TopDash1">
        <Wallet></Wallet>
      </div>
      <div className="TopDash2">
      <Expense></Expense>
      </div>
      <div className="TopDash3">
        <ChartTop></ChartTop>
      </div>
    </div>
  )
}

export default TopDashboard

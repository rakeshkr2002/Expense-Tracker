import RecTransactions from "./RecTransactions"
import TopExpenses from "./TopExpenses"

const BottomDashboard = () => {
  return (
    <div className="BottomDashboard">
        <div className="BDM1">
            <div>Recent Transactions</div>
            <div className="BDM12">Top Expenses</div>
            <div></div>
        </div>
        <div className="BDM2">
            <div className="recT">
                <RecTransactions></RecTransactions>
            </div>
            <div className="TopExp">
                <TopExpenses></TopExpenses>
            </div>
        </div>
      
    </div>
  )
}

export default BottomDashboard

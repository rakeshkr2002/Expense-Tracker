import { useContext } from "react";
import { AllContext } from "../contextApi/Contexts";
import { Pie, PieChart, ResponsiveContainer, Cell } from "recharts";

const ChartTop = () => {
  const { entries } = useContext(AllContext);

  const catagoryData = entries.reduce((acc, entry) => {
    const category = entry.category;
    const price = entry.price;

    const existingCategory = acc.find((item) => item.category === category);
    if (existingCategory) {
      existingCategory.expense += price;
    } else {
      acc.push({ category, expense: price }); 
    }
    return acc; 
  }, []);

  const COLORS = {
    Food: "#FF9304",
    Entertainment: "#A000FF",
    Travel: "#FDE006",
  };

  return (
    <div className="piecharttop">
      <ResponsiveContainer >
        <PieChart>
          <Pie
            data={catagoryData}
            dataKey="expense"
            nameKey="category"
            cx="50%"
            cy="50%"
            outerRadius={70}
            label
          >
            {catagoryData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[entry.category] } 
              />
            ))}
          </Pie>
        </PieChart>
        <div className="chartinfo">
            <div className="chown c1">
              <div className="entercolr"></div>
              <div>Entertainment</div>
            </div>
            <div className="chown c2">
            <div className="foodcolr"></div>
            <div>Food</div>
            </div>
            <div className="chown c2">
            <div className="travcolr"></div>
            <div>Travel</div>
            </div>
          </div>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartTop;

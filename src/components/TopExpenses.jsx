import  { useContext } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { AllContext } from "../contextApi/Contexts";

const TopExpenses = () => {
  const { entries } = useContext(AllContext);

  const categoryData = entries.reduce((acc, entry) => {
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

  return (
    <div style={{ width: "100%", height: "290px" }} className="Topexp ">
      
      <ResponsiveContainer>
        <BarChart
          data={categoryData}
          layout="vertical" // Set layout to vertical
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 15,
          }}
        >
          <YAxis type="category" dataKey="category" width={150} />
          <XAxis type="number" tick={false} /> {/* X-axis becomes numerical (expenses) */}
          <Tooltip />
          <Bar dataKey="expense" fill="#8784D2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TopExpenses;

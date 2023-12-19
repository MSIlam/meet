import { useState, useEffect, Fragment } from "react";
import { PieChart, Pie, ResponsiveContainer, Cell } from "recharts";

const EventGenresChart = ({ events }) => {
  const colors = ["Crimson", "MidnightBlue", "Sienna", "Teal", "PaleVioletRed"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <Fragment>
        <text
          x={x}
          y={y}
          fill="Honeydew"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {`${(percent * 100).toFixed(0)}%`}
        </text>
        <text
          x={x > cx ? x + 60 : x - 60} // Adjust the horizontal position of the genre name
          y={y}
          fill="Honeydew"
          textAnchor={x > cx ? "start" : "end"}
          dominantBaseline="central"
        >
          {data[index].name}
        </text>
      </Fragment>
    );
  };

  const [data, setData] = useState([]);
  const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      );
      return {
        name: genre,
        value: filteredEvents.length,
      };
    });
    return data;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;

// <line x1={x} y1={y} x2={x + (x > cx ? 10 : 10)} y2={y} stroke="#666" />
// fill="#8884d8"

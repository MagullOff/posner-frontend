import { SideView } from "../../components/sideView";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { StatsResponse } from "../../types/statsResponse";
import { BACKEND_URL } from "../../BackendUrl";
import {
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type Data = {
  index?: any;
  blue?: any;
  redLine?: any;
};

export const Stats = () => {
  const [stats, setStats] = useState<StatsResponse>();
  useEffect(() => {
    fetch(BACKEND_URL + "stats")
      .then((res) => res.json())
      .then((res) => {
        return { ...res } as StatsResponse;
      })
      .then((data) => {
        console.log(data);
        setStats(data);
      });
  }, []);

  const data: Data[] = [
    { index: 25, redLine: stats?.linearA! + stats?.linearB! * 25 },
    { index: 75, redLine: stats?.linearA! + stats?.linearB! * 75 },
    ...(stats?.gameResults.map(
      (g) => ({ index: g.clueInformationLevel, blue: g.averageSpeed }) as Data,
    ) ?? []),
  ];

  return (
    <SideView>
      <motion.h1>Stats view</motion.h1>
      <motion.p>{`Pearson correlation: ${stats?.pearsonCorrelation}`}</motion.p>
      <motion.div>
        <ComposedChart
          width={900}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 80,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <Tooltip />
          <Legend />

          <XAxis
            dataKey="index"
            type="number"
            label={{ value: "Index", position: "insideBottomRight", offset: 0 }}
            domain={[25, 75]}
          />
          <YAxis
            unit="ms"
            type="number"
            label={{ value: "Time", angle: -90, position: "insideLeft" }}
            domain={[100, 600]}
          />
          <Scatter name="Attempts" dataKey="blue" fill="blue" />
          <Line
            name="Regression"
            dataKey="redLine"
            stroke="red"
            dot={false}
            activeDot={false}
            isAnimationActive={false}
          />
        </ComposedChart>
      </motion.div>
    </SideView>
  );
};

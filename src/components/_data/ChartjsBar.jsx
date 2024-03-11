import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Bar } from "react-chartjs-2";

Chart.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const barWidth = 0.95;

const data = {
  labels: [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "Cost",
      data: [75, 73, 76, 63, 74, 76, 64, 84, 72, 91, 74, 65],
      // you can set indiviual colors for each bar
      backgroundColor: ["#8ED0B1"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "Distribution loses",
      data: [2, 1, 2, 2, 3, 3, 2, 2, 2, 2, 4, 2],
      // you can set indiviual colors for each bar
      backgroundColor: ["#C7E8D8"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "Transmission loses",
      data: [12, 5, 4, 8, 5, 6, 2, 4, 7, 9, 4, 6],
      // you can set indiviual colors for each bar
      backgroundColor: ["#8ECCD0"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "DUoS Cost",
      data: [2, 3, 6, 3, 4, 6, 4, 4, 2, 7, 4, 5],
      // you can set indiviual colors for each bar
      backgroundColor: ["#BBE1E3"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "TUoS Cost",
      data: [2, 2, 4, 5, 5, 6, 2, 4, 4, 3, 4, 4],
      // you can set indiviual colors for each bar
      backgroundColor: ["#A4A7E7"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "Renewable Obligation",
      data: [20, 32, 23, 23, 24, 26, 24, 24, 22, 27, 24, 25],
      // you can set indiviual colors for each bar
      backgroundColor: ["#BBC1E3"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "Feed in Tariff",
      data: [2, 2, 4, 5, 5, 6, 2, 4, 4, 3, 4, 4],
      // you can set indiviual colors for each bar
      backgroundColor: ["#E2DFF2"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "BSuOS Cost",
      data: [2, 2, 4, 5, 5, 6, 2, 4, 4, 3, 4, 4],
      // you can set indiviual colors for each bar
      backgroundColor: ["#92B0DC"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "BSuOS Cost",
      data: [2, 2, 4, 5, 5, 6, 2, 4, 4, 3, 4, 4],
      // you can set indiviual colors for each bar
      backgroundColor: ["#B5CEF4"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "BSuOS Cost",
      data: [2, 2, 4, 5, 5, 6, 2, 4, 4, 3, 4, 4],
      // you can set indiviual colors for each bar
      backgroundColor: ["#8FBCFF"],
      borderWidth: 0,
    },
    {
      categoryPercentage: barWidth,
      barPercentage: barWidth,
      label: "BSuOS Cost",
      data: [2, 2, 4, 5, 5, 6, 2, 4, 4, 3, 4, 4],
      // you can set indiviual colors for each bar
      backgroundColor: ["#D8E8FF"],
      borderWidth: 0,
    },
  ],
};

let DISPLAY = false;

const options = {
  tooltips: {
    mode: "dataset",
  },
  scales: {
    x: {
      stacked: true,
      gridLines: {
        display: false,
      },
      grid: {
        display: DISPLAY,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: true,
        color: "#efefef",
      },
    },
  },
  layout: {
    padding: {
      // bottom: 50,
    },
  },

  plugins: {
    legend: {
      onHover: (event) => {
        event.native.target.style.cursor = "pointer";
      },
      display: true,
      labels: {
        color: "#555",
        usePointStyle: true,
        pointStyleWidth: 17,
        boxWidth: 6,
        borderWidth: 0,
        padding: 32,
      },
      position: "bottom",
      // title: { display: true }, // or whatever number
    },
  },
};

export default function ChartjsBar(props) {
  let { children } = props;
  let classes = props.classes ? ` ${props.classes}` : "";
  return <Bar data={data} options={options} />;
}

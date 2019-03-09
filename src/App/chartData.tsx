const defaultData = {
  fill: false,
  backgroundColor: "#00ff00",
  borderColor: "#00ff00"
};
const c = 2;
const orderN = (n: (n: number) => number) => Array(10).fill(0).map((e, i) => n(i));

const O1 = orderN((i) => i - i);
const Ologn = orderN(Math.log);
const On = orderN((i) => i);
const Onlogn = orderN((i) => i * Math.log(i));
const Onc = orderN((i) => i ** c);
const Ocn = orderN((i) => c ** i);

export const chartData = {
  labels: On,
  datasets: [
    {
      label: "O(1) constant",
      data: O1,
      ...defaultData
    },
    {
      ...defaultData,
      label: "O(log n) logarithmic",
      backgroundColor: "#33aa00",
      borderColor: "#33aa00",
      data: Ologn
    },
    {
      ...defaultData,
      label: "O(n) linear",
      backgroundColor: "#96A32B",
      borderColor: "#96A32B",
      data: On
    },
    {
      ...defaultData,
      label: "O(n log n) loglinear",
      backgroundColor: "#923B7A",
      borderColor: "#923B7A",
      data: Onlogn
    },
    {
      ...defaultData,
      label: "O(n^c) polynomial",
      backgroundColor: "#42045C",
      borderColor: "#42045C",
      data: Onc
    },
    {
      ...defaultData,
      label: "O(c^n) exponential",
      backgroundColor: "#DE2F51",
      borderColor: "#DE2F51",
      data: Ocn
    }
  ]
};
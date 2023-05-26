import barchart from "@nebula.js/sn-bar-chart";
import table from "@nebula.js/sn-table";
import linechart from "@nebula.js/sn-line-chart";
import pie from "@nebula.js/sn-pie-chart";
import map from "@nebula.js/sn-map";
import kpi from "@nebula.js/sn-kpi";

//class of nebula object

const types = [
  {
    name: "barchart",
    load: () => Promise.resolve(barchart),
  },
  {
    name: "table",
    load: () => Promise.resolve(table),
  },
  {
    name: "linechart",
    load: () => Promise.resolve(linechart),
  },
  {
    name: "map",
    load: () => Promise.resolve(map),
  },
  {
    name: "kpi",
    load: () => Promise.resolve(kpi),
  },
  {
    name: "piechart",
    load: () => Promise.resolve(pie),
  },
];

export default types;

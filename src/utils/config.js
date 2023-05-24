import { embed } from "@nebula.js/stardust";
import barchart from "@nebula.js/sn-bar-chart";
import table from "@nebula.js/sn-table";
import linechart from "@nebula.js/sn-line-chart";
import map from "@nebula.js/sn-map";


const n = embed.createConfiguration({
  context: {
    theme: "light",
    language: "fr-FR",
  },
  types: [
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

  ],
});
export default n;

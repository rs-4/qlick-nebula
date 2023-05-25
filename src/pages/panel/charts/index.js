import React from "react";
import NebulaObjectKpi from "../../../components/qlickComponents/kpi";
import QlikObject from "../../../components/qlickApi";

const Index = () => {
  return <div>
       
   <NebulaObjectKpi
  objectType="barchart"
  appId="de21a6e5-4b72-4026-8560-e0eb89333e96"
  properties={{
    qHyperCubeDef: {
      qDimensions: [
        {
          qDef: {
            qFieldDefs: ["last_name"],
          },
        },
      ],

      qMeasures: [
        {
          qDef: {
            qDef: "Count(last_name)",
            qLabel: "Nombre de noms",
          },
        },
      ],
      qInitialDataFetch: [{ qWidth: 2, qHeight: 50 }],
    },
  }}
/>
</div>;
};

export default Index;

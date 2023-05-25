import React, { useEffect, useRef } from "react";
import { embed } from "@nebula.js/stardust";
import connect from "../../../utils/connect";

const NebulaObjectKpi = ({ appId, objectType, properties }) => {
  const elementRef = useRef();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;

      let nebbie;
      console.log("properties", properties);

      const init = async () => {
        const app = await connect({
          appId,
          url: "https://2w32pfh3l2b94yd.eu.qlikcloud.com",
          webIntegrationId: "pJZiFzzGAFrWk0EtZ9qmvHZSP_ltp7SJ",
        });
        nebbie = embed(app);

        if (elementRef.current) {
          // Ensure the element reference is empty before render
          while (elementRef.current.firstChild) {
            elementRef.current.removeChild(elementRef.current.firstChild);
          }

          nebbie.render({
            element: elementRef.current,
            type: objectType,
            properties: properties,
          });
        }
      };

      init();
    }
  }, [appId, objectType, properties]);

  return (
    <div
      ref={elementRef}
      style={{
        width: "500px",
        height: "100px",
        border: "1px solid black",
        margin: "10px",
      }}
    />
  );
};

export default NebulaObjectKpi;

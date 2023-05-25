import React, { useEffect, useRef, useState } from "react";
import { embed } from "@nebula.js/stardust";
import connect from "../../../utils/connect";
import { styled } from "styled-components";

const Container = styled.div`
  width: 300px;
  height: 100px;
  border: 1px solid black;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fdfdfd;
`;

const NebulaObjectKpi = ({ appId, objectType, properties }) => {
  const elementRef = useRef();
  const isMounted = useRef(false);
  const [isLoading, setIsLoading] = useState(false); // Added state for loading

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
          while (elementRef.current.firstChild) {
            elementRef.current.removeChild(elementRef.current.firstChild);
          }

          await nebbie.render({
            element: elementRef.current,
            type: objectType,
            properties: properties,
          });

          setIsLoading(false);
        }
      };

      init();
    }
  }, [appId, objectType, properties]);

  return <Container ref={elementRef} />;
};

export default NebulaObjectKpi;

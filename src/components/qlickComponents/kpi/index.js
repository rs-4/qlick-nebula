import React, { useEffect, useRef, useState  , useContext} from "react";
import { embed } from "@nebula.js/stardust";
import AppContext from "../../../context/appContext";
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

  const app = useContext(AppContext);


  useEffect(() => {
    if (!isMounted.current && app) {
      isMounted.current = true;

      let nebbie = embed(app);

      console.log("properties", properties);

      const init = async () => {
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
  }, [appId, objectType, properties, app]);


  return <Container ref={elementRef} />;
};

export default NebulaObjectKpi;

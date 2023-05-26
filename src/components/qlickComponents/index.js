import React, { useEffect, useRef, useContext } from "react";
import { embed } from "@nebula.js/stardust";
import AppContext from "../../context/appContext";
import styled, { css } from "styled-components";
import types from "../../utils/config";

const Container = styled.div`
  border: 1px solid black;
  margin: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: #fdfdfd;

  ${(props) =>
    props.objectType === "kpi" &&
    css`
      width: 300px;
      height: 100px;
      min-width: 100px;
    `}

  ${(props) =>
    props.objectType === "piechart" &&
    css`
      width: 600px;
      height: 500px;
      min-width: 300px;
    `}

  ${(props) =>
    props.objectType === "barchart" &&
    props.size === "normal" &&
    css`
      width: 800px;
      height: 500px;
      min-width: 300px;
    `}
  ${(props) =>
    props.objectType === "barchart" &&
    props.size === "xl" &&
    css`
      height: 85vh;
      border: none;
    `} 
  ${(props) =>
    props.objectType === "linechart" &&
    props.size === "xl" &&
    css`
      height: 85vh;
      border: none;
    `}
  ${(props) =>
    props.objectType === "table" &&
    props.size === "xl" &&
    css`
      border: none;
      height: 85vh;
      min-width: 300px;
    `}
`;

const NebulaObject = ({ appId, objectType, properties, size }) => {
  const elementRef = useRef();
  const isMounted = useRef(false);

  const app = useContext(AppContext);

  useEffect(() => {
    if (!isMounted.current && app) {
      isMounted.current = true;

      let nebbie = embed(app, { types });

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
        }
      };

      init();
    }
  }, [appId, objectType, properties, app]);

  return <Container objectType={objectType} size={size} ref={elementRef} />;
};

export default NebulaObject;

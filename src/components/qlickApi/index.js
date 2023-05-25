import React, { useEffect, useRef } from "react";
import embed from "../../utils/config";
import connect from "../../utils/connect";

const QlikObject = ({ type, id, appId }) => {
  const elementRef = useRef();
  const isMounted = useRef(false);

  useEffect(() => {
    let session;

    const init = async () => {
      session = await connect({
        url: "https://2w32pfh3l2b94yd.eu.qlikcloud.com",
        webIntegrationId: "pJZiFzzGAFrWk0EtZ9qmvHZSP_ltp7SJ",
        appId: appId,
      });

      if (session && elementRef.current && isMounted.current) {
        const nebbie = embed(session);

        while (elementRef.current.firstChild) {
          elementRef.current.removeChild(elementRef.current.firstChild);
        }

        nebbie.render({
          element: elementRef.current,
          type: type,
          id: id,
        });
      }
    };
    isMounted.current = true;
    init();

    return () => {
      isMounted.current = false;

      if (elementRef.current) {
        while (elementRef.current.firstChild) {
          elementRef.current.removeChild(elementRef.current.firstChild);
        }
      }
    };
  }, [type, id, appId]);

  return <div ref={elementRef} style={{ height: "600px" }} />;
};

export default QlikObject;

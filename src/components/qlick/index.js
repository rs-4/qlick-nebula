import React, { useEffect, useRef } from 'react';
import embed from '../../utils/config';
import connect from '../../utils/connect';

const QlikObject = ({ type, id }) => {
  const elementRef = useRef();

  useEffect(() => {
    let session;

    const init = async () => {
      session = await connect({
        url: "https://2w32pfh3l2b94yd.eu.qlikcloud.com",
        webIntegrationId: "pJZiFzzGAFrWk0EtZ9qmvHZSP_ltp7SJ",
        appId: "d711350f-0729-4b03-bb10-8de83c8cc4a7",
      });

      if (session && elementRef.current) {
        const nebbie = embed(session);

        // Nettoyage de l'élément de rendu
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

    init();

    // Cleanup function
    return () => {
      if (elementRef.current) {
        while (elementRef.current.firstChild) {
          elementRef.current.removeChild(elementRef.current.firstChild);
        }
      }
      if (session) {
        session.close();
      }
    };
  }, [type, id]);

  return <div ref={elementRef} style={{ height: '600px' }} />;
};

export default QlikObject;

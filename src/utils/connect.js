import enigma from "enigma.js";
import schema from "enigma.js/schemas/12.170.2.json";

async function getQCSHeaders({ webIntegrationId, url }) {
  const response = await fetch(`${url}/api/v1/csrf-token`, {
    headers: {
      "qlik-web-integration-id": webIntegrationId,
    },
    credentials: "include",
  });
  if (response.status === 401) {
    const loginUrl = new URL(`${url}/login`);
    loginUrl.searchParams.append("returnto", window.location.href);
    loginUrl.searchParams.append("qlik-web-integration-id", webIntegrationId);
    
    return undefined;
  }
  const crfsToken = response.headers.get("qlik-csrf-token");
  return {
    "qlik-web-integration-id": webIntegrationId,
    "qlik-csrf-token": crfsToken,
  };
}

async function getEnigmamApp({ host, appId, headers }) {
  const params = Object.keys(headers)

    .map((key) => `${key}=${encodeURIComponent(headers[key])}`)
    .join("&");

  const enigmaGlobal = await enigma

    .create({
      schema,
      url: `wss://${host}/app/${appId}?${params}`,
      createSocket: (url) => new WebSocket(url),
    })
    .open();

  return enigmaGlobal.openDoc(appId);
}

async function connect({ url, webIntegrationId, appId }) {
  const host = url.replace(/https?:\/\//, "").replace(/\/$/, "");
  const headers = await getQCSHeaders({ webIntegrationId, url });
  return getEnigmamApp({ host, appId, headers });
}

export default connect;

import packageInfo from '../package.json';
const dev_url = 'https://dev-federated-graphql-api.omnivoltaic.com/graphql';
const prod_url = 'https://production-omnivoltaic-graphql-api.omnivoltaic.com/graphql';

const DEFAULT_API_ENDPOINT =
  window.location.hostname === "erm.omnivoltaic.com" ? prod_url : dev_url;
export const FEDERATION_API =
  process.env.REACT_FEDERATION_API || DEFAULT_API_ENDPOINT;
export const IS_STANDALONE = process.env.REACT_APP_IS_STANDALONE || false;
export const CLIENT_SERVICE_ENDPOINT = DEFAULT_API_ENDPOINT;
export const REACT_FEDERATION_API =
  process.env.REACT_FEDERATION_API || DEFAULT_API_ENDPOINT;
export const ECOMMERCE_SERVICE_ENDPOINT =
  process.env.REACT_APP_ECOMMERCE_SERVICE_ENPOINT ||
  "https://ecommerce-api.omnivoltaic.com/graphql";
export const AUTH_SERVICE_ENDPOINT =
  process.env.REACT_APP_AUTH_SERVICE_ENDPOINT || DEFAULT_API_ENDPOINT;
export const THING_SERVICE_ENDPOINT =
  process.env.REACT_FEDERATION_API || DEFAULT_API_ENDPOINT;
export const ECOMMERCE_API_ENDPOINT =
  process.env.REACT_APP_ECOMMERCE_API_ENDPOINT || DEFAULT_API_ENDPOINT;
export const ANGAZA_PROVISION_ENDPOINT =
  "https://payg.angazadesign.com/nexus/v1/provision_unit";
export const ANGAZA_PROVISION_CREDENTIALS = {
  username: "paulkamita",
  password: "PhdgRcs9e2Fp",
};

export const ERM_API_ENDPOINT='http://localhost:33390/'
export const PROXY_URL = "https://proxy-server.omnivoltaic.com/";
export const OVS_PRODUCTS_ENDPOINT =
  process.env.REACT_APP_OVS_PRODUCTS_ENDPOINT ||
  PROXY_URL + "http://18.139.28.209:3001/";
export const WS_OVS_PRODUCTS_ENDPOINT = PROXY_URL + "ws://18.139.28.209:3001/";
// process.env.REACT_APP_WS_OVS_PRODUCTS_ENDPOINT || 'ws://18.139.28.209:3001/';
export const CLOUDINARY_IMAGE_ENDPOINT =
  "https://res.cloudinary.com/oves/image/list/image.json";
export const APP_VERSION = packageInfo.version;
export const GRAFANA_API = PROXY_URL + "https://client-grafana.omnivoltaic.com";
export const GRAFANA_API_KEY = process.env.REACT_APP_GRAFANA_API_KEY || "eyJrIjoieURLQ1hjaDd0bndGUGR0dTZvWmcwYWVTZ3oxaE1IbkwiLCJuIjoiVGVzdCIsImlkIjoxfQ==";

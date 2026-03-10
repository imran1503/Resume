import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
};

export const trackPage = (path) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });
};

import xior from "xior";

const xiorClient = xior.create({
  withCredentials: true,
  cache: "no-store",
});

export default xiorClient;

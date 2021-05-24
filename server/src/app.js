import * as Fastify from "fastify";

const createApp = (options) => {
  const fastify = Fastify.fastify(options);

  fastify.get("/", (req, res) => {
    res.send("OK");
  });

  return fastify;
};

export default createApp;

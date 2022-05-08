import { createServer, Model } from "miragejs";

import { mockData } from "./constants";

export default function ({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      properties: Model,
    },
    seeds(server) {
      server.create("property", {
        state: "Maine",
        city: "Portland",
        type: "Apartment",
        price: 0,
      });
    },
    routes() {
      this.get("/api/properties", (schema, request) => ({ data: mockData() }));
    },
  });
  return server;
}

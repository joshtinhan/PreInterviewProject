import { createServer, Model } from "miragejs";

import { mockData } from "./constants";

export default function ({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    routes() {
      this.get("/api/properties", (schema, request) => ({ data: mockData() }));
    },
  });
  return server;
}

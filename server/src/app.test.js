import createApp from "./app";

describe("App `/` path", () => {
  let app;

  beforeEach(async () => {
    app = createApp({ logger: false });
    await app.ready();
  });

  afterEach(async () => {
    await app.close();
  });

  test("Responds with status code 200 on GET request", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/",
    });
    expect(response.statusCode).toBe(200);
  });

  test("Responds with body `OK` on GET request", async () => {
    const response = await app.inject({
      method: "GET",
      url: "/",
    });
    expect(response.body).toBe("OK");
  });
});

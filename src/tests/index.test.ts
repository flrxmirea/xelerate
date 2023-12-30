import request from "supertest";
import server from "../index";

describe("GET /", () => {
  it("responds with 200", async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
  });
});

afterAll((done) => {
  server.close(done);
});

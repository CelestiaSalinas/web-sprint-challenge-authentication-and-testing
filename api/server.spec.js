const supertest = require("supertest");
const server = require('./server')

describe("get request to /", () => {
  it("should be unauthorized", () => {

    return supertest(server)
    .get('/')
    .then( res => {
      expect(res.status).toBe(404)
    })
  })
})

it("should return JSON", () => {
    return supertest(server)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/text/i);
      });
  });

  describe("post to /register", () => {
    it("should return code 404", async () => {
      const creds = { username: "name", password: "pass" }

      await supertest(server)
      .post("/register")
      .send(creds)
      .then( res => {
        expect(res.status).toBe(404)
      })
    })
  })

  it("should return JSON", () => {
    return supertest(server)
      .get("/")
      .then(res => {
        expect(res.type).toMatch(/text/i);
      });
  });

  describe("post to /login", () => {
    it("should return code 404", () => {
      const creds = "name"

      return supertest(server)
      .post("/login")
      .send(creds)
      .then( res => {
        expect(res.status).toBe(404)
      })
    })
  })

  it("should return JSON", () => {
    return supertest(server)
      .get("/login")
      .then(res => {
        expect(res.type).toMatch(/text/i);
      });
  });
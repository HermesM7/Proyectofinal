const request = require("supertest");
const app = require("./app");

test("se espera un saludo", (done) => {
  request(app)
    .get("/")
    .expect(200)
    .expect(
      "!Saludos, mi nombre es Hermes y este es mi proyecto final."
    )
    .end((err) => {
      if (err) return done(err);
      done();
    });
});

afterAll((done) => {
  app.close(() => {
    done();
  });
});

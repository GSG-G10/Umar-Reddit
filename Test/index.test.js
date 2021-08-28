const request = require('supertest');

const app = require('../Server/app');

test('test 200 status /', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});

test('test  /404 route', (done) => {
  request(app)
    .get('/error')
    .expect(404)
    .expect('Content-Type', /html/)
    .end((err) => {
      if (err) { return done(err); }
      return done();
    });
});

const app = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('GET / enpdoint', () => {
  it('returns status 200', async (done) => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toContain('Hello World');
    done();
  });
});

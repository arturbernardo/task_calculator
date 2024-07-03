import request from 'supertest';
import app from '../src/index';

describe('GET /dashboard', () => {
  it('should return 200 and render the view', async () => {
    const response = await request(app.callback()).get('/dashboard');
    expect(response.status).toBe(200);
    expect(response.text).toContain('<body>');
    expect(response.text).toContain('Operation');
  });
});

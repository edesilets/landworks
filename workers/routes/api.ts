import { Hono } from "hono";

const apiRoutes = new Hono();

// Add more routes here
apiRoutes.get('/weather/:id', (c) => {
  c.header('Content-Type', 'application/json')
  const id = c.req.param('id');
  const data = {
    message: `The Weather at: ${id}`,
	temperature: 62,
  };
  // Return the JSON response using c.json()
  return c.json(data);
});

export default apiRoutes;
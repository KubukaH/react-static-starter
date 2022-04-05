import { createProxyMiddleware } from 'http-proxy-middleware';

export default function(app) {
  app.use(
    '/server',
    createProxyMiddleware({
      target: 'https://basilwizi-server.herokuapp.com',
      changeOrigin: true,
    })
  );
};
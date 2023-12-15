app.get('/test', function(req, res) {
  throw new Error('Test error for Sentry');
});

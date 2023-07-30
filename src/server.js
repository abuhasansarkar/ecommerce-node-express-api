import app from './app.js';
const port = process.env.PORT || 9090;

// app listen
app.listen(port, (req, res) => {
  console.log(`Express Server is Running on the ${port}`.bgGreen.black);
});

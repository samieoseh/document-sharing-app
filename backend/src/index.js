const app = require("./app");
const PORT = 8080;

const normalizePort = (val) => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};
const port = normalizePort(process.env.PORT || PORT);
app.set("port", port);

// Start the server and listen on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

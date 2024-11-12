const express = require('express');  
const app = express();             


app.get('/', (req, res) => {
  res.send('Hello, World!');         
});

const PORT = 8080
// Start the server and listen on port 3000
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});

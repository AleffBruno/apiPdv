import http from "http";
import app from './App';

const { PORT = 3000 } = process.env;
const server = http.createServer(app);

app.get('/check',(req, res) => {
  res.json({ok:"ok"})
})

server.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}...`)
);
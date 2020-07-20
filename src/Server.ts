import http from "http";
import app from './App';

const { PORT = 3000 } = process.env;
const server = http.createServer(app);

server.listen(PORT, () =>
  console.log(`Aplicação na porta:${PORT}...`)
);
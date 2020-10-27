import server from './app';

server.listen({ port: 3000 }).then((res) => console.log(`Server is running at ${res.url}`));

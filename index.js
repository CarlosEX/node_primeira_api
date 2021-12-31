const express = require('express');
const server = express();

server.get('/api/user',(req, res) => {
 return res.json({usuario:'Pedro'})
});

server.listen(3000, () => {
 console.log('Servidor em execução...')
});

const express = require('express')
const app = express()
const port = 8888
app.get('/', (req, res) => res.send('<div>gxxg123Hello World!<br/>https://blog.myctw.cc</div>'))
app.listen(port, () => console.log('Server ready on aaaa %i', port))
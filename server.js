let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('Hello docker!');
})

app.listen(8080, () => {console.log('app listening on docker container port 8080')});

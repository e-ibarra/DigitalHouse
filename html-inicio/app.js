const express = require ('express');
const path = require ('path');

const app = express();

const PublicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );

app.listen(3000, () => {
    console.log ("Servidor en puerto 3000")
});

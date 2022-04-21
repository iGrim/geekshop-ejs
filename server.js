const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('assets'))

const port = 4000;

app.get('/', (req, res, next) => {
    res.render('index', {
        title: 'test'
    });
});

app.get('/favorite', (req, res, next) => {
    res.render('favorite', {
        title: 'test'
    });
});

app.get('/login', (req, res, next) => {
    res.render('login', {
        title: 'test'
    });
});

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
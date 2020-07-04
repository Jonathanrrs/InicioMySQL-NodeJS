const dbConnection = require('../../config/dbConnections');

module.exports = app => {
    const connection = dbConnection();
    app.get('/', (req, res) => {
        connection.query('SELECT * FROM news', (err,result) => {
            res.render('news/news', {
                news: result
            });
    
        });
    });

    app.post('/news', (req,res) => {
        const {title, news} = req.body;
        connection.query('INSERT INTO news SET?', {
            title,
            news
        }, (err, result) => {
            res.redirect('/');
        });
    });

    app.delete('/delete/:id', (req, res) => {
        let id = req.params.id;
        connection.query(' DELETE FROM news WHERE id_news ='+id)
        res.redirect('/');
    });

    app.get('/edit/:id', (req, res) => {
       /*  console.log(req.params.id); */
        let id = req.params.id;
        connection.query('SELECT * FROM news WHERE id_news =' +id, (err, data) => {
           /*  console.log(data);  */
            res.render('edit', {
                data
            });
        });
    });

    app.put('/edit/:id', (req, res) => {
        let id = req.params.id;
        const {title, news} = req.body;
        console.log(title, news);
        connection.query(`UPDATE news SET title = "${title}", news = "${news} "WHERE id_news = ${id}`);
        res.redirect('/');
    });


    
}     
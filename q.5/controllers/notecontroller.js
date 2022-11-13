const pool = require('../db/connetpool.js')

const getNote = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        // console.log('connected as id ' + connection.threadId)
        connection.query('SELECT * from crud', (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                // res.send(rows)
                res.render('home', { 'rows': rows });
            } else {
                console.log(err)
            }

            if (err) throw err
            // console.log('The data from beer table are: \n', rows)
        })
    })
}

const getNoteById = (req, res) => {
    // console.log('aksh', req.params.id)
    pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query('SELECT * FROM crud WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                // res.send(rows)
                res.render("detail", { "rows": rows });
            } else {
                console.log('err', err);
            }

            console.log('The data from beer table are: \n', rows)
        })
    })
}

const deleteNote = (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('DELETE FROM crud WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                // res.send(`Beer with the record ID ${[req.params.id]} has been removed.`)
                res.redirect("/");
            } else {
                console.log(err)
            }

            // console.log('The data from beer table are: \n', rows)
        })
    })
}

const addNote = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err

        const params = req.body;
        console.log('params', params);
        connection.query('INSERT INTO crud SET ?', params, (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                res.redirect("/");
            } else {
                console.log('err', err)
            }

            // console.log('The data from beer table are:11 \n', rows)

        })
    })
}

const updateNote = (req, res) => {

    pool.getConnection((err, connection) => {
        if (err) throw err
        console.log(`connected as id ${connection.threadId}`)
        console.log('req.params aksh', req.params.id, req.params.title, req.params.des);
        const { id, title, des } = req.body
        console.log('req.body', req.body);
        connection.query('UPDATE crud SET title = ?, des = ? WHERE id = ?', [title, des, req.params.id], (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                // res.send(`Beer with the title: ${title} has been added.`)
                res.redirect("/")
            } else {
                console.log(err)
            }

        })

        // console.log(req.body)
    })
};

module.exports = { getNote, getNoteById, deleteNote, addNote, updateNote }; 
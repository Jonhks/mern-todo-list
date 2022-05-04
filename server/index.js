const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require('path')

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5500; 

app.use(cors())

const todoItemRoute = require('./routes/todoitems')


mongoose.connect(process.env.DB_CONNECT)
.then(() => console.log('Base de datos conectada'))
.catch(err => console.log(err))

app.use('/', todoItemRoute)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/todo-list/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'todo-list', 'build', 'index.html'));
    })
}

app.listen(PORT, () => console.log('Servidor conectado'));
const mysql = require('mysql');
const { promisify } = require('util');

const { database } = require('./keys');

const db = mysql.createPool(database);

db.getConnection((err, connection) => {
    if(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('La conexión con la DB se ha perdido');
        }

        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('La DB tiene muchas conexiones.');
        }

        if(err.code === 'ECONNREFUSED'){
            console.error('La conexión con la DB fue rechazada');
        }
    }

    if (connection) connection.release();
    console.log('Se ha conectado con la DB');

    return;
});

//Promisify Pool Querys
db.query = promisify(db.query);

module.exports = db;

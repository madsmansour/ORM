const Sequelize = require('sequelize');
const Connection = require('./settings-example.js').mysql_connection;

const sequelize = new Sequelize(Connection.database, Connection.user, Connection.password, {
    host: Connection.host,
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        //sequelize.close();
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const User = sequelize.define('user', {
    // attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        // allowNull defaults to true
    }
}, {
    // options
});

// Note: using `force: true` will drop the table if it already exists
User.sync().then(() => {
    // Now the `users` table in the database corresponds to the model definition
    return User.create({
        firstName: 'Bubber',
        lastName: 'Hansen'
    });
});

User.findAll({
    attributes: ['Bubber', 'Hansen']
  }).then((result) => {console.log(result) });


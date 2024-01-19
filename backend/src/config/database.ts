import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'esteban',
  password: 'password',
  database: 'blaze',
  define: {
    timestamps: true,
  },
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to the PostgreSQL database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the PostgreSQL database:', error);
  }
}

export {sequelize, testConnection};

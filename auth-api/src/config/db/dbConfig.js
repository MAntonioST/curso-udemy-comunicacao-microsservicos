import Sequelize from 'sequelize';

const dbName=auth-db;
const dbUser=postgres;
const dbPassword=123456;
const dbHost=localhost;

const sequelize = new Sequelize(dbName,dbUser,dbPassword, {
    host: dbHost,
    dialect: dbUser,
    quoteIdentifiers: false,
    define: {
        syncOnAssociation: true,
        timestamps: false,
        undescored: true,
        undescoredAll: true,
        freezeTableName: true,
    }
    
  });

  sequelize
  .authenticate()
  .then(() => {
      console.info("Connection has been stablished!");
  })
  .catch(() => {
      console.error("Unable to connect to the database");
      console.error(err.message);
  });

  export default Sequelize;
const Sequelize = require('sequelize');


const sql = new Sequelize('blog', 'root', 'root',{
  host: 'localhost',
  dialect: 'mysql'
});

const Message = sql.define('Message', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  message: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


const Comment = sql.define('Comment', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  comment: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Message.hasMany(Comment)
Comment.belongsTo(Message)

module.exports = {
  Message,
  Comment
};
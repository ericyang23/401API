const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_PATH)

const Users = module.exports = sequelize.define("users", {
	id: {
        primaryKey: true,
type: DataTypes.NUMBER,
        allowNull: false, 
    },
	email: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
	name: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
	image_url: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
	token: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
}, { tableName: 'users' })


Users.sync()

module.exports.create_users = function (create_data) {
    return Users.create(create_data)
}

module.exports.update_users = function (users_id, update_data) {
    return Users.update({
        update_data,
        where: {
            id: users_id 
        }
    })
}

module.exports.get_users = function (users_id) {
    return Users.findOne({ 
        where: {
            id: users_id
        }
    })
}

module.exports.get_all_users = function () {
    return Users.findAll()
}

module.exports.delete_users = function (users_id) {
    return Users.destroy({ 
        where: {
            id: users_id 
        }
    })
}
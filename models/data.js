const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_PATH)

const Data = module.exports = sequelize.define("data", {
	id: {
        primaryKey: true,
type: DataTypes.NUMBER,
        allowNull: false, 
    },
	services: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
	contact_info: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
	users_id: {
        primaryKey: true,
type: DataTypes.NUMBER,
        allowNull: false, 
    },
}, { tableName: 'data' })


Data.sync()

module.exports.create_data = function (create_data) {
    return Data.create(create_data)
}

module.exports.update_data = function (data_id, update_data) {
    return Data.update({
        update_data,
        where: {
            id: data_id 
        }
    })
}

module.exports.get_data = function (data_id) {
    return Data.findOne({ 
        where: {
            id: data_id
        }
    })
}

module.exports.get_all_data = function () {
    return Data.findAll()
}

module.exports.delete_data = function (data_id) {
    return Data.destroy({ 
        where: {
            id: data_id 
        }
    })
}
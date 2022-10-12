const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_PATH)

const Websites_has_data = module.exports = sequelize.define("websites_has_data", {
	websites_id: {
        primaryKey: true,
type: DataTypes.NUMBER,
        allowNull: false, 
    },
}, { tableName: 'websites_has_data' })


Websites_has_data.sync()

module.exports.create_websites_has_data = function (create_data) {
    return Websites_has_data.create(create_data)
}

module.exports.update_websites_has_data = function (websites_has_data_id, update_data) {
    return Websites_has_data.update({
        update_data,
        where: {
            id: websites_has_data_id 
        }
    })
}

module.exports.get_websites_has_data = function (websites_has_data_id) {
    return Websites_has_data.findOne({ 
        where: {
            id: websites_has_data_id
        }
    })
}

module.exports.get_all_websites_has_data = function () {
    return Websites_has_data.findAll()
}

module.exports.delete_websites_has_data = function (websites_has_data_id) {
    return Websites_has_data.destroy({ 
        where: {
            id: websites_has_data_id 
        }
    })
}
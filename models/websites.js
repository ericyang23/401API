const { Sequelize, DataTypes } = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_PATH)

const Websites = module.exports = sequelize.define("websites", {
	id: {
        primaryKey: true,
type: DataTypes.NUMBER,
        allowNull: false, 
    },
	website_name: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
	website_description: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
	fullname: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
	address: {
        type: DataTypes.TEXT,
        allowNull: false, 
    },
}, { tableName: 'websites' })


Websites.sync()

module.exports.create_websites = function (create_data) {
    return Websites.create(create_data)
}

module.exports.update_websites = function (websites_id, update_data) {
    return Websites.update({
        update_data,
        where: {
            id: websites_id 
        }
    })
}

module.exports.get_websites = function (websites_id) {
    return Websites.findOne({ 
        where: {
            id: websites_id
        }
    })
}

module.exports.get_all_websites = function () {
    return Websites.findAll()
}

module.exports.delete_websites = function (websites_id) {
    return Websites.destroy({ 
        where: {
            id: websites_id 
        }
    })
}
const { create_users } = require('../../models/users')

module.exports = async (req, res) => {
    try {   
    	const users_data = req.body
		const result = await create_users(users_data)

        if (process.env.MODE === 'dev') 
            console.log('[POST] Request to users is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[POST] Request to users is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
const { update_users } = require('../../models/users')

module.exports = async (req, res) => {
    try {   
    	const users_id = req.params.id
		const users_data = req.body
		const result = await update_users(users_id, users_data)

        if (process.env.MODE === 'dev') 
            console.log('[PUT] Request to users is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[PUT] Request to users is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
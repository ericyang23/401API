const { delete_users } = require('../../models/users')

module.exports = async (req, res) => {
    try {   
    	const users_id = req.params.id
		const result = await delete_users(users_id)

        if (process.env.MODE === 'dev') 
            console.log('[DELETE] Request to users is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[DELETE] Request to users is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
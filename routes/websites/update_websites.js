const { update_websites } = require('../../models/websites')

module.exports = async (req, res) => {
    try {   
    	const websites_id = req.params.id
		const websites_data = req.body
		const result = await update_websites(websites_id, websites_data)

        if (process.env.MODE === 'dev') 
            console.log('[PUT] Request to websites is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[PUT] Request to websites is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
const { update_websites_has_data } = require('../../models/websites_has_data')

module.exports = async (req, res) => {
    try {   
    	const websites_has_data_id = req.params.id
		const websites_has_data_data = req.body
		const result = await update_websites_has_data(websites_has_data_id, websites_has_data_data)

        if (process.env.MODE === 'dev') 
            console.log('[PUT] Request to websites_has_data is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[PUT] Request to websites_has_data is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
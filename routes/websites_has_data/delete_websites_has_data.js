const { delete_websites_has_data } = require('../../models/websites_has_data')

module.exports = async (req, res) => {
    try {   
    	const websites_has_data_id = req.params.id
		const result = await delete_websites_has_data(websites_has_data_id)

        if (process.env.MODE === 'dev') 
            console.log('[DELETE] Request to websites_has_data is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[DELETE] Request to websites_has_data is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
const { get_all_websites_has_data } = require('../../models/websites_has_data')

module.exports = async (req, res) => {
    try {   
    	const result = await get_all_websites_has_data()

        if (process.env.MODE === 'dev') 
            console.log('[GET-ALL] Request to websites_has_data is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[GET-ALL] Request to websites_has_data is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
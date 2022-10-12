const { get_all_data } = require('../../models/data')

module.exports = async (req, res) => {
    try {   
    	const result = await get_all_data()

        if (process.env.MODE === 'dev') 
            console.log('[GET-ALL] Request to data is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[GET-ALL] Request to data is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
const { delete_data } = require('../../models/data')

module.exports = async (req, res) => {
    try {   
    	const data_id = req.params.id
		const result = await delete_data(data_id)

        if (process.env.MODE === 'dev') 
            console.log('[DELETE] Request to data is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[DELETE] Request to data is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
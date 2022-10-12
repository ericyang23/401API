const { create_data } = require('../../models/data')

module.exports = async (req, res) => {
    try {   
    	const data_data = req.body
		const result = await create_data(data_data)

        if (process.env.MODE === 'dev') 
            console.log('[POST] Request to data is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[POST] Request to data is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
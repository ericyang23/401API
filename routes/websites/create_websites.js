const { create_websites } = require('../../models/websites')

module.exports = async (req, res) => {
    try {   
    	const websites_data = req.body
		const result = await create_websites(websites_data)

        if (process.env.MODE === 'dev') 
            console.log('[POST] Request to websites is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[POST] Request to websites is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
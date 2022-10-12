const { get_all_websites } = require('../../models/websites')

module.exports = async (req, res) => {
    try {   
    	const result = await get_all_websites()

        if (process.env.MODE === 'dev') 
            console.log('[GET-ALL] Request to websites is successfully processed')

        return res.status(201).send({
            success: true, 
            data: result
        })
    } catch (error) {
        if (process.env.MODE === 'dev') 
            console.log('[GET-ALL] Request to websites is failed')

        return res.status(400).send({
            success: false,
            error
        })
    }
}
    
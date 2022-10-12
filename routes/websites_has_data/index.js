
const create_websites_has_data = require('./create_websites_has_data')
const update_by_id_websites_has_data = require('./update_websites_has_data')
const select_all_from_websites_has_data = require('./get_all_websites_has_data')
const select_by_id_websites_has_data = require('./get_websites_has_data')
const delete_by_id_websites_has_data = require('./delete_websites_has_data')

const express = require('express')
const router = express.Router()

router.post('/',  create_websites_has_data)
router.put('/:id',  update_by_id_websites_has_data)
router.get('/all',  select_all_from_websites_has_data)
router.get('/:id',  select_by_id_websites_has_data)
router.delete('/:id',  delete_by_id_websites_has_data)

module.exports = router
    
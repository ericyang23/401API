
const create_data = require('./create_data')
const update_by_id_data = require('./update_data')
const select_all_from_data = require('./get_all_data')
const select_by_id_data = require('./get_data')
const delete_by_id_data = require('./delete_data')

const express = require('express')
const router = express.Router()

router.post('/',  create_data)
router.put('/:id',  update_by_id_data)
router.get('/all',  select_all_from_data)
router.get('/:id',  select_by_id_data)
router.delete('/:id',  delete_by_id_data)

module.exports = router
    
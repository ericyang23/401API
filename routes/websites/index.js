
const create_websites = require('./create_websites')
const update_by_id_websites = require('./update_websites')
const select_all_from_websites = require('./get_all_websites')
const select_by_id_websites = require('./get_websites')
const delete_by_id_websites = require('./delete_websites')

const express = require('express')
const router = express.Router()

router.post('/',  create_websites)
router.put('/:id',  update_by_id_websites)
router.get('/all',  select_all_from_websites)
router.get('/:id',  select_by_id_websites)
router.delete('/:id',  delete_by_id_websites)

module.exports = router
    
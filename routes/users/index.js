
const create_users = require('./create_users')
const update_by_id_users = require('./update_users')
const select_all_from_users = require('./get_all_users')
const select_by_id_users = require('./get_users')
const delete_by_id_users = require('./delete_users')

const express = require('express')
const router = express.Router()

router.post('/',  create_users)
router.put('/:id',  update_by_id_users)
router.get('/all',  select_all_from_users)
router.get('/:id',  select_by_id_users)
router.delete('/:id',  delete_by_id_users)

module.exports = router
    
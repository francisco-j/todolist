const {Router} = require('express')
const {Task}  = require('../models')
const { Op } = require("sequelize")

const router = Router()

//Alta de tarea
router.post( '/', async (req, res) => {
    try {
        const created = await Task.create(req.body)
        res.status(201).send(created)
    } catch (error) {
        console.log('error', error);
        res.status(500).send({message: 'error while creating the new Task'})
    }
})

// listado de tareas
    // Las tareas pueden ser filtradas por cualquiera de los atributos del modelo, incluyendo usuario 
router.get( '/', async ({query}, res) => {
    let where = {}
    if (query) {
        if(query.id) where.id = query.id
        if(query.name) where.name = {[Op.iLike]: `%${query.name}%`} 
        if(query.description) where.description = {[Op.iLike]: `%${query.description}%`}
        if(query.user) where.asignedUser = query.user
        if(query.dueDate) where.dueDate = query.dueDate
    }

    try {
        const found = await Task.findAll({
            attributes: ['id', 'name', 'description', 'dueDate', 'completed', 'asignedUser'],
            order: [['createdAt','ASC']],
            where,
        })
        res.status(200).send(found)
    } catch (error) {
        console.log(error);
        res.status(500).send({message: 'error while finding all Tasks'})
    }
})

// Eliminar una tarea
router.delete( '/:id', async (req, res) => {
    try {
        const destroyed = await Task.destroy({
            where: {id: req.params.id}
        })
        if(!destroyed) return res.status(500).send({message: 'specfied Tasks not found'})
        res.sendStatus(200)
    } catch (error) {
        res.status(500).send({message: 'error while deleting Task'})
    }
})

// Actualizar una tarea
router.put( '/:id', async (req, res) => {
    if(!req.body) return res.status(400).send({message: 'Data must be provided to update a task'})
    let {id, createdAt, updatedAt, ...newData} = req.body

    try {
        let foundTask = await Task.findOne({where: {id: req.params.id}})
        if(!foundTask) return res.status(400).send({message: 'specified Tasks not found'})

        updatedTAsk = await foundTask.update(newData)
        res.status(200).send(updatedTAsk)
    } catch (error) {
        res.status(500).send({message: 'error while updating Task'})
    }
})


// Asignar una tarea a un usuario
router.patch( '/:id', async (req, res) => {
    if(!req.body.user) return res.status(400).send({message: 'user to be asigned must be provided'})
    let {user} = req.body

    try {
        let foundTask = await Task.findOne({where: {id: req.params.id}})
        if(!foundTask) return res.status(400).send({message: 'specified Tasks not found'})

        updatedTAsk = await foundTask.update({asignedUser: user})
        res.status(200).send(updatedTAsk)
    } catch (error) {
        res.status(500).send({message: 'error while updating Task'})
    }
})

module.exports = router

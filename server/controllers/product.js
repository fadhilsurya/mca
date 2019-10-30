const Model = require('../models/index')
const product = Model.Product

class ProductController {
    static getAll(req, res, next) {
        product.findAll()
            .then(data => {
                res.status(200).json({
                    code: 200,
                    data
                })
            })
            .catch(err => {
                res.status(400).json({
                    code: 400,
                    message: err.message
                })
            })
    }

    static getOne(req, res, next) {
        product.findAll({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.status(200).json({
                    code: 200,
                    data
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    message: err.message
                })
            })


    }

    static create(req, res, next) {
        product.create({
                name: req.body.name,
                price: req.body.price,
                stock: req.body.stock,
                description: req.body.description
            })
            .then(data => {
                res.status(201).json({
                    code: 201,
                    data
                })
            })
            .catch(err => {
                res.status(401).json({
                    code: 401,
                    message: err.message
                })
            })
    }


    static update(req, res, next) {
        let updateFile = {
            name: req.body.name,
            price: req.body.price,
            stock: req.body.stock,
            description: req.body.description
        }

        product.update(updateFile, {
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                res.status(200).json({
                    code: 200,
                    data
                })
            })
            .catch(err => {
                res.status(401).json({
                    code: 401,
                    message: err.message
                })
            })


    }

    static delete(req, res, next) {
        product.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(data => {
                console.log('berhasil')
                res.status(200).json({
                    code: 200,
                    data
                })
            })
            .then(err => {
                res.status(400).json({
                    status: 400,
                    message: err.message
                })

            })
    }


}


module.exports = ProductController
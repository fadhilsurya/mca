const Model = require('../models/index')
const product = Model.Product

class ProductController {
    static getAll(req, res, next) {
        product.findAll()
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                console.log(`Errornya tuh disini ${err}`)
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
                    data
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    message: 'mohon maaf tidak ditemukan'
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
                    data
                })
            })
            .catch(err => {
                console.log(`Errornya tuh disini ${err}`)
            })
    }


}


module.exports = ProductController
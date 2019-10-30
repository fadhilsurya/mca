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
                res.status(404).json({
                    code: 404,
                    message: err.message
                })
            })
    }

    static getOne(req, res, next) {
        product.findByPk(req.params.id)
            .then(data => {
                res.status(200).json({
                    code: 200,
                    data
                })
            })
            .catch(err => {
                res.status(404).json({
                    status: 404,
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
                res.status(400).json({
                    code: 400,
                    message: err.message
                })
            })
    }


    static update(req, res, next) {
        console.log(req.body.description, '<<<<')
        if ((req.body.description == '') || (req.body.stock == '') || (req.body.price == '') || (req.body.name == '')) {
            throw new Error(res.status(404).json({
                code: 404,
                message: 'fields cannot be empty'
            }))
        } else {
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
                    res.status(404).json({
                        code: 404,
                        message: err.message
                    })
                })


        }

    }

    static delete(req, res, next) {
        product.findByPk(req.params.id)
            .then(data => {
                if (data == null) {
                    throw new Error(res.status(404).json({
                        code: 404,
                        message: 'data does not exist'
                    }))
                } else {
                    return product.destroy({
                        where: {
                            id: req.params.id
                        }
                    })

                }
            })
            .then(data1 => {
                console.log('berhasil')
                res.status(200).json({
                    code: 200,
                    data1
                })
            })
            .catch(err => {
                res.status(404).json({
                    status: 404,
                    message: err.message
                })

            })
    }


}


module.exports = ProductController
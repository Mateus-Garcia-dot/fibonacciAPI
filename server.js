const express = require('express')
const app = express()

app.listen('3000')

app.route('/sequence').get( (req,res) => {
    const quantity = req.query.quantity
    if ( !Number.isInteger(quantity) ){
        res.send({
            "message": "You need to provide a quantity",
            "example": "/sequence?quantity=20"
        })
        return;
    }
    if ( quantity < 0){
        res.send({"message": "quantity cant be less than zero"})
        return
    }

    res.send( fibSequence(quantity) )

})

app.route('/number').get( (req,res) => {
    const position = req.query.position
    if ( !Number.isInteger(position) ){
        res.send({
            "message": "You need to provide a position",
            "example": "/sequence?position=20"
        })
        return;
    }
    if ( position < 0){
        res.send({"message": "position cant be less than zero"})
        return
    }
    res.send( fib(position) )
})
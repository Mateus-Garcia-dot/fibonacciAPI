"use strict";
const { fib, fibSequence } = require("./fibFunctions");
const express = require('express');
const app = express();
app.listen('3000');
app.route('/sequence').get((req, res) => {
    const quantity = Number.parseInt(req.query.quantity);
    if (isNaN(quantity)) {
        res.send({
            "message": "You need to provide a quantity",
            "example": "/sequence?quantity=20"
        });
        return;
    }
    if (quantity < 0) {
        res.send({ "message": "quantity cant be less than zero" });
        return;
    }
    res.send(fibSequence(quantity));
});
app.route('/number').get((req, res) => {
    const position = Number.parseInt(req.query.position);
    if (isNaN(position)) {
        res.send({
            "message": "You need to provide a position",
            "example": "/sequence?position=20"
        });
        return;
    }
    if (position < 0) {
        res.send({ "message": "position cant be less than zero" });
        return;
    }
    res.send(fib(position).toString());
});

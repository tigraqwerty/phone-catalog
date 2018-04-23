const express = require('express');
const router = express.Router();

const phones = [
    {name: "Apple iPhone7",
        url: "https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone7/black/iphone7-black-select-2016?wid=470&hei=556&fmt=png-alpha&.v=1472430037379",
        type: "smartphone", color: "black", description: "Phone description", price: "1000", id: 1},
    {name: "Samsung Galaxy S7",
        url: "https://s7d2.scene7.com/is/image/SamsungUS/SMG935_edge_102116?$product-details-jpg$",
        type: "smartphone", color: "grey", description: "Phone description", price: "1000", id:2},
    {name: "HTC M10",
        url: "http://www.mega.pk/items_images/15349MEGA1.jpg",
        type: "smartphone", color: "silver", description: "Phone description", price: "900", id:3},
    {name: "Motorola C100",
        url: "http://www.mobiset.ru/photos/2010/january/29/history_january09/moto1.jpg",
        type: "smartphone", color: "silver", description: "Phone description", price: "400", id: 4},
    {name: "Nokia 3505",
        url: "data:image/jpeg;base64,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",
        type: "smartphone", color: "blue", description: "Phone description", price: "500", id: 5},
    {name: "Apple iPhone8",
        url: "https://store.storeimages.cdn-apple.com/4662/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/gold/iphone8-gold-select-2018?wid=470&hei=556&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1522347725383",
        type: "smartphone", color: "gold", description: "Phone description", price: "600", id: 6}
];

// Handle incoming GET request to /phones
router.get('/', (req, res, next) => {
    res.status(200).json({
        phones: phones
    });
});

// Handle incoming POST request to /phones
router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Phone request POST'
    });
});

// Handle incoming GET request to /phones/:idPhone
router.get('/:phoneId', (req, res, next) => {
    const id  = req.params.phoneId;
    let find = false;
    let result = {};
    phones.map(function (value) {
        if(value.id === id){
            find = true;
            result = value;
        }
    });
    if(find){
        res.status(200).json({
            phone: result,
        })
    }else{
        res.status(500).json({
            message: 'Not Found'
        });
    }
});

module.exports = router;
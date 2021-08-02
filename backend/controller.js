const imageList = require('./imageList.json');

exports.postImage = (req, res, next) => {
    res.send({ message: 'post image'});
};

exports.getImages = (req, res, next) => {
    console.log(imageList[5]);
    res.send({ 
        message: 'get image',
        imagelist: imageList
    });
};

exports.deleteImage = (req, res, next) => {
    res.send({ message: 'delete image' });
};
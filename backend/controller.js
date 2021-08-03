const fs = require('fs');

exports.postImage = (req, res, next) => {
    const imageData = req.body;
    
    if( imageData.url == null || imageData.label == null ){
        return res.status(401).send({ error: true, message: 'Image data missing' });
    }
    
    const imageList = getImageData();
    imageData.id = (imageData.url + '_' + Date.now());
    imageList.push(imageData);

    saveImageData(imageList);

    res.send({ success: true, imageList: imageList });
};

exports.getImages = (req, res, next) => {
    const imageList = getImageData();
    res.send({ imageList: imageList });
};

exports.deleteImage = (req, res, next) => {
    const imageID = req.body.imageID;
    const imageList = getImageData();

    const filterImage = imageList.filter( image => image.id !== imageID);

    if( filterImage.length === imageList.length ){
        return res.status(409).send({ error: 'Image does not exist' });
    }

    saveImageData(filterImage);

    res.status(200).send({ success: true, message: 'Image removed successfully' });
};

const getImageData = () => {
    const jsonData = fs.readFileSync('images.json');
    return JSON.parse(jsonData);
}

const saveImageData = (data) => {
    const stringifyData = JSON.stringify(data);
    fs.writeFileSync('images.json', stringifyData);
}
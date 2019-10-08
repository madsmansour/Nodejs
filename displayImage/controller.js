exports.index = function(req, res){

    var imgID = req.params.id;

    res.send(`<img src="/memes/${imgID}.png"></img>`);
}//C:/Users/Mads/Desktop/Web development/Node/displayImage/memes
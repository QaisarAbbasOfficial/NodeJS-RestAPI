const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title : {
        require : true,
        type : String
    },
    body : {
        require : true,
        type :  String
    }
});



module.exports = mongoose.model('blog', PostSchema);
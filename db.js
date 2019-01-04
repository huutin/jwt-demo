var mongoose = require('mongoose');
// mongoose.connect('mongodb://huutin:abcd1234@ds149404.mlab.com:49404/user')
mongoose.connect('mongodb://localhost:27017/user', { useNewUrlParser: true })
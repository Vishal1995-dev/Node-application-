const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
	Name:{
		type:String
	},
	Fees:{
		type:String
	},
	Duration:{
		type:String
	}
});

module.exports = mongoose.model("Post",postSchema);



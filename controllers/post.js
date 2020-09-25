const Post = require("../models/post");

exports.getPosts=(req,res)=>{
	//const posts = Post.find({ Name : 1, Fees : 1, Duration : 1 })
	//.then(posts=>{
	//	res.json({posts});
	//})
	//.catch(err => console.log(err));
	Post.find({}, { _id : 0, Name : 1, Fees : 1, Duration : 1 }, function (err, data) {
		if(err) { return handleError(res, err); }
		return res.json(200, data);
	  });
};

exports.createPosts=async(req,res)=>{
	const post = new Post(req.body);
	post.save((err,result)=>{
		if(err){
			return res.status(400);
		}
		res.status(200).json({
			post:result
		});
	});
};
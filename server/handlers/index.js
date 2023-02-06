module.exports.notFound=(req,res,next) => {
    const err=new Error('Not found')
    err.status=404

    next(err)

}



module.exports.error = (err, req, res, next) => {
	return res.status(err.status || 500).json({
		error: {
			message: err.message || 'Oops! Something went wrong.'
		}
	});
};
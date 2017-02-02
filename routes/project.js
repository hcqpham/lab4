exports.viewProject = function(req, res)
{
	//controller code will go here
	var name = req.params.name;
	console.log("The project name is: " + name);
 	res.render('project', {
    'projectName': name
	});
	

};
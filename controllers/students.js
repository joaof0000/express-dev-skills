// Require the Model
// a model by convention singular and upperCase
const StudentsModel = require('../models/students')

module.exports = {
	index, // shortcut for below
	// index: index 
	show,
	// show: show,
	new: newStudents,
	create
	// optionally
	// index
}

function create(req, res){

	// we need to get the information from the form
	console.log(req.body, " < _ contents of our form");
	// Then we need to tell the model, take the information
	// from the form and add it to the database
	StudentsModel.create(req.body)

	// create always redirects to either the show route
	// or the index route, its your choice
	res.redirect('/students'); // tells the client 
	// make a get request to /students
}



function newStudents(req, res){
 res.render('students/new') 
}

function show(req, res){
	console.log(req.params, " <- req.params.id")

	res.render('students/show', {students: StudentsModel.getOne(req.params.id) })
}



// then render the students/index.ejs, and inject a students variable,
// that contains all the students in the model file

function index(req, res, next) {
	
	res.render('students/index.ejs', {students: StudentsModel.getAll() })
}


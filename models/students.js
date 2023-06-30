// THIS IS SIMULATING A MODEL (WHICH represents getting your data)
// SIMULATING/NOT REALLY A MODEL
const students = [
	{id: 125223, students: 'Kim Suu'},
	{id: 127904, students: 'Tom Jones'},
	{id: 139608, students: 'Joe Smith'}
  ];
  
  module.exports = {
	getAll,
	getOne,
	create,
	deleteOne,
	update
  };


  function update(id, studentsUpdate){
    const idx = students.findIndex(students => students.id === parseInt(id));
	let students = students[idx];
	students = {
		...students, 
		
	}

  }


  function deleteOne(id) {
	// Find the index based on the id of the students object
	const idx = students.findIndex(students => students.id === parseInt(id));
	students.splice(idx, 1);
  }

  function create(students) {
	// Add the id
	students.id = Date.now() % 1000000;
	// New students wouldn't be done :)
	students.done = false;
	students.push(students);
  }
  
  function getAll() {
	return students;
  }

  function getOne(id) {
	// Use the Array.prototype.find iterator method
	return students.find(students => students.id === parseInt(id));
  }



 
var skills = [
    {id: 125223, skill: 'Picking Oranges', done: true},
    {id: 127904, skill: 'Peeling Oranges', done: false},
    {id: 139608, skill: 'Eating Oranges', done: false}
  ];
	
  module.exports = {
    getAll,
    getOne
  };
	

  function getOne(id) { 
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }


  function getAll() {
    return skills;
  }
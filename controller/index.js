const person = [
  {
    id: 1,
    name: 'John Doe',
    age: 32,
    gender: 'male',
  },
];

const getAllPerson = (req, res) => {
  res.json(person);
};

const addAPerson = (req, res) => {
  const data = req.body;
  const newId = person.length + 1;
  data.id = newId;

  person.push(data);
  res.json(data);
};

const deleteAPerson = (req, res) => {
  const id = req.params.id; // http://localhost:5000/person/5
  const index = person.findIndex((p) => p.id === parseInt(id)); // [1, 2, 3, 4, 5]
  if (index !== -1) {
    person.splice(index, 1); // [1, 2, 3, 4]
    res.json({ message: 'Successfully deleted' });
  } else {
    res.status(404).json({ message: 'Person not found' });
  }
};

const getByGender = (req, res) => {
  //   console.log(req.params);
  const gender = req.params.gender;
  const filterByGender = person.filter((item) => item.gender === gender);
  res.json(filterByGender);
};

module.exports = {
  getAllPerson,
  addAPerson,
  deleteAPerson,
  getByGender,
};

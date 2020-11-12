const {
  restart
} = require('nodemon');
const Birthday = require('../db/models/birthday');

const getAllBirthdays = (req, res) => {
  Birthday.find()
    .then((birthday) => res.status(200).json(birthday))
    .catch((err) => res.status(500).json('Error: ' + err));
};

const createNewBirthday = (req, res) => {
  console.log(req.body);
  const birthday = new Birthday(req.body);
  birthday
    .save()
    .then((resp) => {
      res.status(201).json(resp);
    })
    .catch((err) => {
      res.status(500).json('Error: ' + err);
    });
};

const getBirthdayId = (req, res) => {
  res.send(`FIX ME: GET /birthday/:id/${req.params.birthdayId}`);
};
const editBirthdayId = (req, res) => {
  console.log(req.body);
  const birthday = new Birthday(req.body);
  birthday
    .save()
    .then((resp) => {
      res.status(201).json(resp);
    });
};
const deleteBirthdayId = (req, res) => {
  Birthday.findByIdDelete(req.params.birthdayId)
    .then((birthday) => {
      console.log(birthday);
      if (!birthday) {
        return res.status(404).json('Error: Task Not Found!');
      }
      res.status(204).json(birthday);
    })
    .catch((err) => {
      res.status(500).json('Error' + err);
    });
};
module.exports = {
  getAllBirthdays,
  createNewBirthday,
  editBirthdayId,
  deleteBirthdayId,
  getBirthdayId
};
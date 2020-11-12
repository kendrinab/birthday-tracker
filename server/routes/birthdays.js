const router = require('express').Router(),
  {
    getAllBirthdays,
    getBirthdayById,
    createNewBirthday,
    editBirthdayById,
    deleteBirthdayById,
  } = require('../controllers/birthdayController');

router.get('/', getAllBirthdays);
router.get('/', getBirthdayById);
router.post('/', createNewBirthday);
router.put('/', editBirthdayById);
router.delete('/', deleteBirthdayById);

module.exports = router;
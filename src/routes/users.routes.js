const { Router } = require('express');
const router = Router();


const {
    renderSignUpForm,
    renderSignInForm,
    singup,
    singin,
    logout
} = require('../controllers/users.controller');

router.get('/users/signup', renderSignUpForm);

router.post('/users/signup', singup);

router.get('/users/signin', renderSignInForm);

router.post('/users/signin', singin);

router.get('/users/logout', logout);

module.exports = router;
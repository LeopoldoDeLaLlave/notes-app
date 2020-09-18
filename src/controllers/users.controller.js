const usersCtrl = {};

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.singup = (req, res) => {
    res.send('sign up');
};

usersCtrl.renderSignInForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.singin = (req, res) => {
    res.send('sign in');
};

usersCtrl.logout = (req, res) => {
    res.send('log out');
};

module.exports = usersCtrl;
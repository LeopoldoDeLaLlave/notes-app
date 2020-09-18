const usersCtrl = {};
const User = require('../models/User');

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.singup = async(req, res) => {
    const errors = [];
    const { name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
        errors.push({ text: 'Passwords do not match' });
    }
    if (password.length < 4) {
        errors.push({ text: 'Passwords must be at least 4 characters' });
    }

    if (errors.length > 0) {
        res.render("users/signup", {
            errors,
            name,
            email
        });
    } else {
        // Busca si ya existe el correo
        const emailUser = await User.findOne({ email: email });
        if (emailUser) {
            req.flash("error_msg", "The Email is already in use.");
            res.redirect("/users/signup");
        } else {
            // Guarda el nuevo usuario
            const newUser = new User({ name, email, password });
            newUser.password = await newUser.encryptPassword(password);
            await newUser.save();
            req.flash("success_msg", "You are registered.");
            res.redirect("/users/signin");
        }
    }

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
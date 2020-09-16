const indexCtlr = {};



indexCtlr.renderIndex = (req, res)=>{
    res.render('index');
};

indexCtlr.renderAbout = (req, res)=>{
    res.render('about');
};

module.exports = indexCtlr;
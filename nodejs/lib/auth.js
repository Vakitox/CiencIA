module.exports = {
    estaLogeado(req, res, next) {
        if(req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/sesion');
    },

    noestaLogeado(req, res, next) {
        if (!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/matrices');
    }
}
const formController = require('../controller/forms.controller');

module.exports = (Router)=>{

    //Router.post('/',formController.createForm);
    Router.post('/create',formController.create);

    return Router;
}
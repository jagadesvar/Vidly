const config = require('config');

module.exports = function(){

    if(!config.get('jwtPrivateKey')){
        console.log('JWT KEY:', config.get('jwtPrivateKey'));
        throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
    }
}
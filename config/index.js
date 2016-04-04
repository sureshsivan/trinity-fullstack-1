var config = require('./config');

module.exports = {
    getDbConnStr: function(){
        // if((! process.env.mongouname) || (! process.env.mongopwd)){
        //     throw new Error('mongouname, mongopwd environmet variables not set');
        // }
        return 'mongodb://'
            + (process.env.mongouname || 'trinity-fullstack-1')
            + ':'
            + (process.env.mongopwd || 'trinity-fullstack-1')
            + '@ds028679.mlab.com:28679/trinity-fullstack-1';
    }
}
/**
 * Created by steve on 12/13/14.
 */
function Globals() {
    this.users = {};
}

Globals.prototype.setConfig = function(config) {
    this.config = config;
};

Globals.prototype.getUsers = function(id) {
    if(id===undefined) {
        return this.users;
    }else{
        if(this.users[id]!== undefined) {
            return this.users[id];
        }else{
            return false;
        }
    }
};


Globals.prototype.addUser = function(user) {
    this.users[user.id] = user;
};





module.exports = new Globals();
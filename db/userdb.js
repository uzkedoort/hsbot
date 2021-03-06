/**
 * hsBot: Supply template and your bot is ready.
 * 
 * Hardik Shah <hrdk.108@gmail.com>
 * 
 * MIT License
 */

'use strict';

function UserDB(){
  this.mem = [];
}

UserDB.prototype._findUser = function(userId){
  let user;
  this.mem.some(function(userObj){
    if(userObj.userId === userId)
      return user = userObj;
    else
      return false;
  });
  return user;
};

UserDB.prototype._insertUser = function(userId, userName, pattern, preQ, topicName){
  let infoDict = {
    userName: userName,
    userId: userId,
    loggedIn: new Date().getTime(),
    activities: [{
      pattern: pattern,
      preQ: preQ,
      ut: new Date().getTime(),
      topic: topicName
    }]
  };
  this.mem.push(infoDict);
  return this.mem;
};

UserDB.prototype._updateUser = function(userId, userName, pattern, preQ, topicName){
  this.mem.some(function(userObj){
    if(userObj.userId === userId){
      var activityDict = {
        pattern: pattern,
        preQ: preQ,
        ut: new Date().getTime(),
        topic: topicName
      };
      userObj.activities.push(activityDict);
      userObj.userName = userObj.userName ? userObj.userName : userName;
      return true;
    } else {
      return false;
    }
  });
  return;
};

module.exports = UserDB;
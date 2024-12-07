

function validateUser(user) {
    if (user.isActive && user.isAdmin) {
      return true;
    } else {
      return false;
    }
  }
  function user (isActive, isAdmin, avatar) {
    this.isActive = isActive;
    this.isActive = isAdmin;
    this.isActive = avatar;
  }
  var user1 = { isActive: true, isAdmin: true, username: "User1" };
 console.log(validateUser(user1)); 
 
  
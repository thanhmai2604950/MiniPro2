function validateUser(isActive, isAdmin, avatar) {
  let user ={
    isActive: isActive,
    isAdmin: isAdmin,
    avatar: avatar,
  }
    if (user.isActive && user.isAdmin) {
      return true;
    } else {
      return false;
    }
  }
 console.log(validateUser(true, false, 'user1'));

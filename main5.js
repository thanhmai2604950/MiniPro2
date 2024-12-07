function complexExpression(x) {
    let output = ++x * 3 - x-- * 2 + --x;
    return output;
  }
  
  let x = 5;
  console.log(complexExpression(x));  
/*
Ban đầu x= 5
++x=6 
x--=6 (vì là postfix nên giữ nguyên 6)
--x=4 (do x-- phía trước nên lúc này x=x-1=5 nhưng phép tính hiện tại là prefix nên --x=4 )
=> 6*3 -6*2 +4= 10
*/
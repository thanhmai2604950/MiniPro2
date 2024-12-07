function evaluateConditions (condition1, condition2, condition3,condition4) {
var condition1=true;
var condition2=false;
var condition3=false;
var condition4=true;
    if (condition1 && condition2) {
    console.log ('Cả hai điều kiện đều đúng!');
} else if (condition3 || condition4) {
    console.log ('Một trong các điều kiện thứ ba hoặc thứ tư đúng!'); 
} else {
    console.log ('Không điều kiện nào đúng!')
}
}
evaluateConditions();

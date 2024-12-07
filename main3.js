
const students = [
    { name: "H", grade: "A", score: 95 },
    { name: "M", grade: "B", score: 85 },
    { name: "N", grade: "A", score: 90 },
    { name: "Q", grade: "C", score: 75 }
  ];
  
  function print(students) {
    students.forEach(function({ name, grade, score }){
      console.log(`Name: ${name}, Grade: ${grade}, Score: ${score}`);
    });
  }
  print(students);
  
let students = JSON.parse(localStorage.getItem("students")) || [];
displayStudents();

// students.filter([])
document.getElementById("studentForm").addEventListener("submit", function (e) {
  e.preventDefault(); //prevent refreh
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;
  let newStudent = { name, age, course };
  students.push(newStudent); // add object in array
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents(); //
  this.reset();
});

function displayStudents() {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";
  students.forEach((student, index) => {
    table.innerHTML += `
            <tr>
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.course}</td>
            <td>
                <button class = "btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateModal" onclick="updateStudent(${index})">Update</button>
                <button class = "btn btn-danger" onclick = "deleteStudent(${index})">Delete</button>
            </td> 
            </tr>
        `;
  });
}

// show old data
function updateStudent(index) {
  let x = students[index];
  document.getElementById("updateIndex").value = index; // 0  ,1 ,2
  document.getElementById("updateName").value = x.name;
  document.getElementById("updateAge").value = x.age;
  document.getElementById("updateCourse").value = x.course;
}

document.getElementById("updateForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let index = document.getElementById("updateIndex").value; // 0  ,1 ,2
  let updateName = document.getElementById("updateName").value;
  let updateAge = document.getElementById("updateAge").value;
  let updateCourse = document.getElementById("updateCourse").value;
  students[index] = {
    name: updateName,
    age: updateAge,
    course: updateCourse,
  };
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents(); // show all student after update
  let modal = document.getElementById("updateModal"); // modal
  let modalInstant = bootstrap.Modal.getInstance(modal); // instance
  modalInstant.hide(); // hide
});

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students)); //local storage
  displayStudents();
}

// student [ index] delete

// students.splice(0,3)
// 0,1,2

//footer , search , icons

// 0,1,2

// students[1] = "Mohamed"; //update

// let x = ["apple","banana","Peach"];
// x[0] , x[1],x[2]

// let n =10;
//  n=n+2 , n+=2;

// localStorage.clear();

// innerText = "<h1>Hello World</h1>"; //h1 text
// innerHTML = "<h1>Hello World</h1>"; //h1 size , bold

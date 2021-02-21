const campForm = [];
let studentInfo = {};
const saveData = document.querySelector("#saveData");

  saveData.addEventListener('click', function(e){
    studentInfo ={
      fullName : e.target = document.querySelector("#getFullName").value,
      nationalCode : e.target = document.querySelector("#getNationalCode").value,
      FatherNumber : e.target = document.querySelector("#getFatherNumber").value,
      userName : e.target = document.querySelector("#getUserName").value,
      campName : e.target = document.querySelector("#campName").value
    }
    let tableBody = document.querySelector("#maketr");

    campForm.push(studentInfo);
    campForm.forEach(studentInfo => {
    tableBody.innerHTML="<tr>" + "<td>" + studentInfo.fullName + "</td>" + "<td>" + studentInfo.nationalCode + "</td>" + "<td>" + studentInfo.FatherNumber + "</td>"+ "<td>" + studentInfo.userName + "</td>"+ "<td>" + studentInfo.campName + "</td>" + "</tr>"
});
});
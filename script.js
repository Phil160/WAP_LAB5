//Question 3
function Employee(firstname, lastname,birthdate){ //date format yyyy-mm-dd
    this.firstname = firstname; 
    this.lastname = lastname;
    this.birthdate=new Date(birthdate);
    this.getFullName = function(){
    return this.firstname + ' ' + this.lastname;
}
this.getAge=function(){
    let d=new Date();
    let age=d.getFullYear()-this.birthdate.getFullYear();
    return  age;
}
}

let employees=[new Employee("Aron","Tesfu","1995-9-24")];
employees.push(new Employee("Fili","Hagos","1991-8-14"));
employees.push(new Employee("Bob","Smith","2002-8-14"));
employees.push(new Employee("Jon","Samuel","1999-8-14"));
employees.push(new Employee("Tina","Xing","2000-8-14"));
employees.push(new Employee("Selam","Awet","1983-8-14"));
employees.push(new Employee("Zebib","zeg","2003-8-14"));
employees.push(new Employee("Helen","Tekle","2019-8-14"));

let adultEmployees=employees.filter(emp=>emp.getAge()>20).map(emp=>emp.getFullName());
console.log(adultEmployees);
let oldEmployee=employees.filter(emp=>emp.birthdate.getFullYear()>2000).map(emp=>emp.getFullName());
console.log(oldEmployee);

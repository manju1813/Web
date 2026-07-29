//Regular Object:
let student = {
stdName : "Manju",
stdAddress : "Mysore",

display(){
console.log(this.stdName)
console.log(this.stdAddress)
}
}
console.log(student)
student.display()

//Example for class & object
class Student{
stdName= "Manju";
stdAge=24;
stdAddress= "Mysore";

display() {
console.log(this.stdName)
console.log(this.stdAge)
console.log(this.stdAddress)
}
}
let s1 = new Student()
console.log(s1)
s1.display()
console.log(s1.stdName)
console.log(s1.stdAge)
console.log(s1.stdAddress)

//Constructor
class Book{
constructor() {
console.log("I am a constructor")
}
}
let b1 = new Book()
console.log(b1)

//Ex: Initializing a value
class Student1{
constructor() {
console.log("I am a constructor")
this.stdName = "Manju",
this.stdAge = 22
}
}
let s2 = new Student1()
console.log(s2.stdName)
console.log(s2.stdAge)

// Constructor with Parameters

class Car{
    constructor(brand,varient){
        console.log("I am a Constructor")
        this.brand=brand
        this.varient=varient
    }
}
let c=new Car('Polo','Petrol')
console.log(c)
console.log(c.brand)
console.log(c.varient)

class Student2{
    stdName="Manju"
    stdAge=22

    displayDetails(){
        console.log(`My name is ${this.stdName}`)
        console.log(`I am ${this.stdAge} years old`)
    }
}

let std1=new Student();
console.log(std1)
std1.displayDetails

class Employee{
    empName;
    empAge;
    empDesignation;
    constructor(empName,empAge,empDesignation){
        console.log("I am a Constructor")
        this.empName=empName
        this.empAge=empAge
        this.empDesignation=empDesignation
    }

    displayDetails(){
        console.log(this.empName)
        console.log(this.empAge)
        console.log(this.empDesignation)      
    }
    
}
let e1=new Employee("Manju",22,"Developer")
e1.displayDetails();


// Encapsulation

class BankAccount{
    #bankBalance=0;
     
    getBalance(){
        return this.#bankBalance
    }

    deposit(amount){
        this.#bankBalance=this.#bankBalance+amount
    }

    withdraw(amount){
        if(amount<=this.#bankBalance){
            this.#bankBalance=this.#bankBalance-amount
        }else{
            console.log("Insufficient Balance")
        }
    }
}
let b2=new BankAccount()
console.log(b2.getBalance())
b2.deposit(1000)
console.log(b2.getBalance())
b2.withdraw(500)
console.log(b2.getBalance())

// Abstraction
class Car1{
    #checkEngine(){
        return "Checking Engine"
    }

    start(){
        console.log(this.#checkEngine())
        console.log("Car Started")
    }
}
let c1=new Car1()
c1.start()

class User{
    login(){
        console.log("User Login")
    }
}
class Employee1 extends User{
    work(){
        console.log("Employee Started Working")
    }
}
let e2=new Employee1()
e2.work()
e2.login()

// Polymorphism

class Payment{
    pay(amount){
        console.log(`Paid ${amount}`);
        
    }
}
class UPI extends Payment{
    pay(amount){
        console.log(`Paid ${amount} Uisng Upi`)
    }
}
class CreditCard extends Payment{
    pay(amount){
        console.log(`Paid ${amount} Using Credit Card`)
    }
}
let u=new UPI()
u.pay(100000)
let cr= new CreditCard()
cr.pay(1000)

// CRUD App with OOP'S

class StudentCRUD{
    constructor(){
        this.students=[]
    }

    addStudents(id,name,age,address,course){
        let std2={
            id:id,
            name:name,
            age:age,
            address:address,
            course:course
        }

        this.students.push(std2)
        console.log("Student added successfully")
    }
    getStudents(){
        console.log(this.students)

        this.students.forEach((std2)=>{
            console.log(std2)
        })
    }
    updateStudents(id,name,age,address,course){
        let student=this.students.find((std2)=>std2.id===id)
        if(student){
            student.name=name
            student.age=age
            student.address=address
            student.course=course

            console.log("Student Updated Successfully")
        }else{
            console.log("Student Not Found")
        }    
    }

    deleteStudent(id){
        let index=this.students.findIndex((std2)=>{
            return std2.id===id
        })
        console.log(index,"INDEX VALUE")
            if(index!=-1){
                this.students.splice(index,1)
                console.log("Student Deleted Successfully")
            }else{
                console.log("Student Not Found")
            }
        }
    }


let s3=new StudentCRUD();
// Adding a student [CREATE]
s3.addStudents(1,"Manju",22,"Hunsur","Java")
s3.addStudents(2,"Harsha",24,"K R Nagar","Python")
s3.addStudents(3,"Shashank",24,"Gundlupete","Mern")

// Displaying Students [READ]
s3.getStudents()

// Updating a student
s3.updateStudents(1,"Manju",22,"Mysore","Devops")
s3.getStudents()

// Deleting a Student
s3.deleteStudent(3)
s3.getStudents()
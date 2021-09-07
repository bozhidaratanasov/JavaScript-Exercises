class Company {
  constructor() {
    this.departments = [];
  }

  addEmployee(username, salary, position, department) {
    if (salary < 0)
      throw new Error('Invalid input!');
    
    for (const arg of arguments) {
      if (!arg)
        throw new Error('Invalid input!');
    }

    if (!this.departments[department]) 
      this.departments[department] = [];
    
    let newEmployee = {
      username,
      salary: Number(salary),
      position
    }

    this.departments[department].push(newEmployee);
    return `New employee is hired. Name: ${username}. Position: ${position}`;    
  }

  bestDepartment() {
    let bestDepartmentObj;
    let departmentName;
    let maxAvg = 0;
    for (const department in this.departments) {
      let totalSalaries = 0;
      for (const employee of this.departments[department]) {
        totalSalaries += employee.salary;
      }
      let currentAvg = totalSalaries / this.departments[department].length;
      if (currentAvg > maxAvg) {
        maxAvg = currentAvg;
        departmentName = department;
        bestDepartmentObj = this.departments[department];
      }
    }
    let result = `Best Department is: ${departmentName}\nAverage salary: ${maxAvg.toFixed(2)}`;
    bestDepartmentObj
      .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
      .forEach(employee => {
        result += `\n${employee.username} ${employee.salary} ${employee.position}`;
      })
    
    return result;
  }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());


export interface EmployeeData {
  firstName: string,
  lastName: string,
  age?: number
}

export class Employees {

  firstName: string
  lastName: string

  constructor(employee: EmployeeData) {
    this.firstName = employee.firstName
    this.lastName = employee.lastName
  }

  getFirstName(): string {
    return this.firstName
  }
  getLastName(): string {
    return this.lastName
  }
}




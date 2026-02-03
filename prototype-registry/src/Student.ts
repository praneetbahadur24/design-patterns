import { Prototype } from "./Prototype";

export class Student implements Prototype<Student> {
  private id!: number;
  private firstName!: string;
  private lastName!: string;

  setId(id: number): void {
    this.id = id;
  }
  setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  setLastName(lastName: string): void {
    this.lastName = lastName;
  }

  clone(): Student {
    return new Student();
  }
}

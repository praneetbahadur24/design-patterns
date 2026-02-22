import { StudentInterface, Student } from "./Student";

class DryRunBuilder {
  private props: Partial<StudentInterface> = {};

  setFirstName(firstName: string): this {
    this.props.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): this {
    this.props.lastName = lastName;
    return this;
  }

  setAge(age: number): this {
    this.props.age = age;
    return this;
  }

  build(): Student {
    return new Student(this.props as StudentInterface);
  }
}

const studentobj = new DryRunBuilder()
  .setFirstName("Praneet")
  .setLastName("Bahadur")
  .setAge(35)
  .build();

console.log("studentobj", studentobj);

import { Student, StudentProps } from "./Student";

class StudentBuilder {
  private props: Partial<StudentProps> = {};

  setFirstName(firstName: string): this {
    this.props.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): this {
    this.props.lastName = lastName;
    return this;
  }

  build(): Student {
    // validation for required fields
    if (!this.props.firstName || !this.props.lastName) {
      throw new Error("firstName and lastName are required");
    }

    return new Student(this.props as StudentProps);
  }
}

const studentobj = new StudentBuilder()
  .setFirstName("Praneet")
  .setLastName("Bahadur")
  .build();

console.log("studentobj", studentobj);

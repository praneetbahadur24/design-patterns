import { Student, StudentProps, StudentAddressProps } from "./Student";

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

  setAge(age: number): this {
    this.props.age = age;
    return this;
  }

  setAddress(address: StudentAddressProps): this {
    this.props.address = address;
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
  .setAge(35)
  .setAddress({ add1: "kkkk", add2: "" })
  .build();

console.log("studentobj", studentobj);

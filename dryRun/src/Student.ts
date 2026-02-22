export type StudentInterface = {
  firstName: String;
  lastName: String;
  age: number;
};

export class Student {
  private firstName!: String;
  private lastName!: String;
  private age!: number;

  constructor(props: StudentInterface) {
    Object.assign(this, props);
  }
}

export class StudenValidator {
  constructor(props: StudentInterface) {
    Object.assign(this, props);
  }
}

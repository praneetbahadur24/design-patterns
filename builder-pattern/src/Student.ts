export type StudentProps = {
  firstName: string;
  lastName: string;
  age: number;
};

export class Student {
  readonly firstName!: string;
  readonly lastName!: string;
  readonly age!: string;

  constructor(props: StudentProps) {
    Object.assign(this, props);
  }
}

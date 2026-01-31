export type StudentProps = {
  firstName: string;
  lastName: string;
  age: number;
  address: StudentAddressProps;
};

export type StudentAddressProps = {
  add1: string;
  add2: string;
};

export class Student {
  readonly firstName!: string;
  readonly lastName!: string;
  readonly age!: string;
  readonly address!: StudentAddressProps;

  constructor(props: StudentProps) {
    Object.assign(this, props);
  }
}

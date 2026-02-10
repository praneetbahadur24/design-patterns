import { Button } from "./Button";

export class AndroidButton implements Button {
  showButton(): void {
    console.log("Android Button");
  }
}

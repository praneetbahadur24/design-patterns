import { BankAPI } from "./BankAPI";

export class YesBank implements BankAPI {
  sendMoney(): void {
    console.log("Yes Bank Send Money");
  }

  checkBalance(): number {
    return 1000;
  }
}

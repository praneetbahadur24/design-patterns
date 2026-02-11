import { BankAPI } from "./BankAPI";

export class IciciBank implements BankAPI {
  sendMoney(): void {
    console.log("Icici Bank Send Money");
  }

  checkBalance(): number {
    return 2000;
  }
}

import { YesBank } from "./YesBank";
import { IciciBank } from "./IciciBank";
import { Phonepay } from "./PhonePay";
export class Main {
  static async main(): Promise<void> {
    const pp = new Phonepay(new IciciBank());
    const amount = await pp.checkBalance();
    console.log("amount", amount);
    await pp.sendMoney();
  }
}

Main.main();

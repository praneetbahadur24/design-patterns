import { BankAPI } from "./BankAPI";
export class Phonepay {
  private bankAPI?: BankAPI;

  constructor(bankAPI?: BankAPI) {
    this.bankAPI = bankAPI;
  }

  async checkBalance(): Promise<number> {
    if (!this.bankAPI) {
      throw new Error("Bank API not initialized");
    }

    const currentBalance = await this.bankAPI.checkBalance();
    return currentBalance * 2;
  }

  async sendMoney(): Promise<void> {
    if (!this.bankAPI) {
      throw new Error("Bank API not initialized");
    }
    await this.bankAPI.sendMoney();
  }
}

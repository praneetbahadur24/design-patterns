import { Flutter } from "./Flutter";
enum SupportedPlatform {
  ANDROID,
  IOS,
}

class Client {
  static main(): void {
    const flutter = new Flutter();
    const uiFactory = flutter.createUIFactory(SupportedPlatform.ANDROID);
    const button = uiFactory.createButton();
    button.showButton();

    const menu = uiFactory.createMenu();
    menu.showMenu();
  }
}

Client.main();

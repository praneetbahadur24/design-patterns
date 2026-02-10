import { Button } from "./Button";
import { Menu } from "./Menu";
import { UIFactory } from "./UIFactory";
import { AndroidButton } from "./AndroidButton";
import { AndroidMenu } from "./AndroidMenu";

export class AndroidFactory implements UIFactory {
  createButton(): Button {
    return new AndroidButton();
  }
  createMenu(): Menu {
    return new AndroidMenu();
  }
}

import { Button } from "./Button";
import { Menu } from "./Menu";

export interface UIFactory {
  createButton(): Button;
  createMenu(): Menu;
}

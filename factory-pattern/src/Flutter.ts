import { UIFactory } from "./UIFactory";
import { AndroidFactory } from "./AndroidFactory";

enum SupportedPlatform {
  ANDROID,
  IOS,
}

export class Flutter {
  createUIFactory(platform: SupportedPlatform): UIFactory {
    if (platform == SupportedPlatform.ANDROID) {
      return new AndroidFactory();
    } else {
      throw console.error("Unsupported Platform");
    }
  }
}

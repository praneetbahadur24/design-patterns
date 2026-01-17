/**
 * Singleton Pattern
 *
 * In this example, we create a Singleton class that restricts the instantiation of itself and provides a static method to get the instance.
 * We demonstrate that multiple calls to getInstance() return the same instance.
 */

class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) Singleton.instance = new Singleton();
    return Singleton.instance;
  }
}

function callSingleton() {
  const s1 = Singleton.getInstance;
  const s2 = Singleton.getInstance;
  if (s1 === s2) {
    console.log("Singleton works, both variables contain the same instance.");
  } else {
    console.log("Singleton failed, variables contain different instances.");
  }
}

callSingleton();

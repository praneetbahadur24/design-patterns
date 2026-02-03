export class StudentRegistry {
  private registry = new Map<string, any>();

  register(key: string, value: any): void {
    this.registry.set(key, value);
  }

  get(key: string) {
    if (this.registry.has(key)) {
      return this.registry.get(key);
    }
  }
}

export type ObserverType = {
  update(): void;
};

export class Store<T> {
  protected state: T;
  protected observers: Map<string, ObserverType>;

  constructor(initialState: T) {
    this.state = structuredClone(initialState);

    this.observers = new Map();
  }

  public getState(): T {
    return structuredClone(this.state);
  }

  public setState(stateNext: Partial<T>): void {
    this.state = {
      ...this.state,
      ...stateNext,
    };

    this.publish();
  }

  protected publish(): void {
    for (const observer of this.observers.values()) {
      observer.update();
    }
  }

  public subscribe(id: string, subscriber: ObserverType): void {
    this.observers.set(id, subscriber);
  }

  public unsubscribe(id: string): void {
    this.observers.delete(id);
  }

  public unsubscribeAll(): void {
    this.observers = new Map();
  }
}

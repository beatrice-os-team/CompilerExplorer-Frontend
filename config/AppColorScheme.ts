import { makeAutoObservable } from "mobx";

class AppColorScheme {
  private static _Instance: AppColorScheme;
  private constructor() {
    makeAutoObservable(this);
  }
  static get Instance() {
    if (!AppColorScheme._Instance) {
      AppColorScheme._Instance = new AppColorScheme();
    }
    return AppColorScheme._Instance;
  }

  private _colorScheme: "light" | "dark" = "light";

  get colorScheme() { return this._colorScheme; }
  set colorScheme(value: "light" | "dark") { this._colorScheme = value; }
}

export default function useAppColorScheme() {
  return AppColorScheme.Instance;
}

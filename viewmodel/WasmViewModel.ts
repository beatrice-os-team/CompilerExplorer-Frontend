import { makeAutoObservable } from "mobx";
import hello from "@/wasm/hello.js";

class WasmViewModel {
  private static _Instance: WasmViewModel;
  private constructor() {
    makeAutoObservable(this);
  }
  static get Instance() {
    if (!WasmViewModel._Instance) {
      WasmViewModel._Instance = new WasmViewModel();
    }
    return WasmViewModel._Instance;
  }

  private _wasm: any = null;
  async getWasm() {
    if (this._wasm === null) {
      this._wasm = await hello();
    }
    return this._wasm;
  }
}

export default function useWasmViewModel() {
  return WasmViewModel.Instance;
}

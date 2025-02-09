import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export abstract class LocalStorageExtensionService {
  public static setValues(data: any) {
    for (let el in data) {
      localStorage.setItem(el, data[el])
    }
  }

  public static clearValueByAny(data: any) {
    for (let el in data) {
      localStorage.removeItem(data);
    }
  }

  public static contains(data: Array<string>): boolean {
    for (let el of data) {
      if (localStorage.getItem(el) === null) return false;
      if (localStorage.getItem(el) === undefined) return false;

    }

    return true;
  }
}

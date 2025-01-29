import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppThemeService {
  private static theme = 'light';
  constructor() {}

  static useTheme() {
    let themeFromLocalStorage = localStorage.getItem('app-theme');
    if (themeFromLocalStorage !== undefined && themeFromLocalStorage !== null)
      this.theme = themeFromLocalStorage;

    this.setTheme(this.theme);
  }

  static setTheme(themeName: string) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('app-theme', themeName);
  }
}

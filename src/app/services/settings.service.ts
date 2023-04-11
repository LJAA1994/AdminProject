import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
private linkTheme = document.getElementById('theme');

  constructor() {
    let theme =  localStorage.getItem('theme') || './assets/css/colors/default-dark.css';
    this.linkTheme?.setAttribute('href', theme)
  }

  changeTheme = (theme: string) => {
    const urlTheme = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', urlTheme);
    localStorage.setItem('theme', urlTheme);
    this.checkCurrentTheme();
  };

  checkCurrentTheme = () => {
    let links = document.querySelectorAll('.selector');
    links.forEach((ele:any) => {
      ele.classList.remove('working');
      const btnTheme = ele.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`
      const currentTheme = this.linkTheme?.getAttribute('href');
      if(btnThemeUrl === currentTheme) {
        ele.classList.add('working');
      }
    })
  }
}

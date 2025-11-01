import {Component, inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-switcher-language',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './switcher-language.html',
  styleUrl: './switcher-language.css',
})
export class SwitcherLanguage {

  //language currently used
  currentLang = 'en'

  //language options
  languages = ['es','en']

  //service to translate
  private translate: TranslateService;
  constructor(){
    //implement the service
    this.translate = inject(TranslateService);
    //initial value of currentLang
    this.currentLang = this.translate.getCurrentLang();
  }

  /**
   * useLanguage is a function to change value of currentLang
   * @param language it is the value change
   */
  useLanguage(language: string){
    this.translate.use(language);
    this.currentLang = language;
  }
}

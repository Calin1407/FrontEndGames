import { Component } from '@angular/core';
import {Home} from '../../views/home/home';
import {SwitcherLanguage} from '../switcher-language/switcher-language';

@Component({
  selector: 'app-layout',
  imports: [
    Home,
    SwitcherLanguage
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}

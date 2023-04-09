import * as flsFunctions from './modules/functions.js';
import './header.js';
import './hero.js';
import './our-team.js';
import './portfolio.js';
import './popup.js';
import './project-cost.js';
import './button-top.js'; 
import './jquery-3.6.1.min.js'
import './slick/slick.min.js';
import './slider.js';
import './apartment-design__slider.js';
import './modal-window__slider.js';
import './form-validation.js';
import './animated.js';


flsFunctions.testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
}); 

import * as flsFunctions from './modules/functions.js';
import './header.js';
import './hero.js';
import './our-team.js';
import './portfolio.js';



flsFunctions.testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
}); 

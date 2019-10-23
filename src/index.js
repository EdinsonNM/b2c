import customize from './customize';
import recaptchaConfig from './recaptcha';

import './assets/css/flex-layout.css';
import './assets/css/styles.css';

document.addEventListener("DOMContentLoaded", function(event) {
    customize();
    recaptchaConfig();
});


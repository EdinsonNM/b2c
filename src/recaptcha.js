function validate(event) {
    grecaptcha.execute();
    event.preventDefault();
    event.stopPropagation();
}

const onSubmit = function(token, e) {
    var response = grecaptcha.getResponse();
    console.log(response);
    document.getElementById('g-recaptcha-response-toms').value = response;
};

export default function recaptchaConfig(){
    const element = document.getElementById('continue');
    element.addEventListener('click', validate);
}
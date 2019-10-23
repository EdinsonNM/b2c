function hide(){
    document.querySelector("#preloading").style.visibility = "hidden";
}

export default function Customize() {
    document.querySelector('.intro').remove();
    document.querySelector('.attrEntry > label').remove();

    document.querySelector('.DropdownSingleSelect').classList.add("ui-input-group mt10");
    document.querySelector('.dropdown_single').classList.add("fix-ui-form-control ui-form-control");


    document.querySelector("#signInName").classList.add("ui-form-control");
    document.querySelector("#password").classList.add("ui-form-control");
    document.querySelector("#continue").classList.add("btn btn-primary w100p mt10");
    document.querySelector("#continue").style.fontWeight = "bold";
 
    document.querySelector("#signInName").setAttribute("placeholder", "Número de documento");
    document.querySelector("#password").setAttribute("placeholder", "Contraseña");
    setTimeout(hide, 1000);
}  



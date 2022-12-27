function testBox1(form){
    // obtener la informacion de lo que esta dentro del formulario
    Ctrl = form.inputbox1;
    if(Ctrl.value.length<3){
        validatePrompt(Ctrl, "El nombre debe tener al menos 3 o mas caracteres");
        return (false);
    }else{
        return (true);
    }

}

// validar que el correo no este vacio y valiar que dentro de value exista un @
function testBox2(form){
    Ctrl = form.inputbox2;
    if(Ctrl.value == "" || Ctrl.value.indexOf('@', 0)==-1){
        validatePrompt (Ctrl, "Ingresar una dirección de correo valida");
        return (false);
    }else{
        return (true);
    }
}
function textBox3(form){
    Ctrl = form.inputbox3;
    if(Ctrl.value == ""){
        validatePrompt(Ctrl, "El mensaje no puede estar vacio");
        return (false);
    }else{
        return (true);
    }
}
// hacer un submit: enviar informacion del formulario y validarlo
function runSubmit(form, button){
    
    if(!testBox1(form)) return;
    if(!testBox2(form)) return;
    if(!testBox3(form)) return;
    
    alert ("Todas las entradas Ok!");
    
    return;

}
// pasar el objeto para que se refresque y mandar el mensaje con el alert
function validatePrompt(Ctrl, PromptStr){
    alert (PromptStr)
    // cuando tiene el objeto lo refresca
    Ctrl.focus();
    return;
}
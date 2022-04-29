const formulario = document.getElementById('form');
//array con los nodos-inputs
const inputs = document.querySelectorAll('#form input');
console.log(inputs);
//REGEX
const expresiones = {
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
};
//objeto validacaion inputs
const camposInputs = {
    password2: false,
    password: false,
    correo: false,
    telefono: false
};

inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});
    
formulario.addEventListener('submit', (e)=>{
    e.preventDefault();
    const msgExito = document.getElementById('formulario__mensaje-exito');
    const mssError = document.getElementById('formulario__mensaje');
    const terminos = document.getElementById('terminos');

    if(camposInputs.correo && camposInputs.password && camposInputs.password2 && camposInputs.telefono && terminos.checked){
        formulario.reset();

        msgExito.classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            msgExito.classList.remove('formulario__mensaje-exito-activo');
        }, 3000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((i)=>{
            i.classList.remove('formulario__grupo-correcto');
        })
    }else{
        mssError.classList.add('formulario__mensaje-activo');
        setTimeout(() => {
            mssError.classList.remove('formulario__mensaje-activo');
        }, 3000);
    };
});

function validarFormulario(e){
    //Parrafo msg error
    const msgErrorCorreo = document.getElementById('msg-error-correo');
    const msgErrorTelefono = document.getElementById('msg-error-telefono');
    const msgErrorPassword = document.getElementById('msg-error-password');
    //grupo input
    const correoDiv = document.getElementById('grupo__correo');
    const telefonoDiv = document.getElementById('grupo__telefono');
    const passwordDiv = document.getElementById('grupo__password');
    
    switch (e.target.name) {
        case 'correo':
            if (expresiones.correo.test(e.target.value)) {
                correoDiv.classList.remove('formulario__grupo-incorrecto');
                correoDiv.classList.add('formulario__grupo-correcto');
                msgErrorCorreo.classList.remove('form_input-error-activo');
                camposInputs.correo = true;
            }else{
                correoDiv.classList.add('formulario__grupo-incorrecto');
                msgErrorCorreo.classList.add('form_input-error-activo');
                camposInputs.correo = false
            }
            break;
        case 'password':
            if (expresiones.password.test(e.target.value)) {
                passwordDiv.classList.remove('formulario__grupo-incorrecto');
                passwordDiv.classList.add('formulario__grupo-correcto');
                msgErrorPassword.classList.remove('form_input-error-activo');
                camposInputs.password = true;
            }else{
                passwordDiv.classList.add('formulario__grupo-incorrecto');
                msgErrorPassword.classList.add('form_input-error-activo');
                camposInputs.password = false;
            }
            validarPassword2();
            break;
        case 'password2':
            validarPassword2();
            break;
        case 'telefono':
            if (expresiones.telefono.test(e.target.value)) {
                telefonoDiv.classList.remove('formulario__grupo-incorrecto');
                telefonoDiv.classList.add('formulario__grupo-correcto');
                msgErrorTelefono.classList.remove('form_input-error-activo');
                camposInputs.telefono = true;
            }else{
                telefonoDiv.classList.add('formulario__grupo-incorrecto');
                msgErrorTelefono.classList.add('form_input-error-activo');
                camposInputs.telefono = false;
            }
            break;
        case 'terminos':
            
            break;
    };
};

function validarPassword2(){
    const passwordId = document.getElementById('password');
    const passwordId2 = document.getElementById('password2');
    const password2Div = document.getElementById('grupo__password2');
    const msgErrorPassword2 = document.getElementById('msg-error-password2');

    if (passwordId.value !== passwordId2.value) {
                password2Div.classList.add('formulario__grupo-incorrecto');
                msgErrorPassword2.classList.add('form_input-error-activo');
                camposInputs.password2 = false;
    }else{
        password2Div.classList.remove('formulario__grupo-incorrecto');
        password2Div.classList.add('formulario__grupo-correcto');
        camposInputs.password2 = true;
    };
};
    
    






                


               
               

const inputTexto = document.querySelector('.input-text');
const mensaje = document.querySelector('.input-text-area');
let matrizComparativa = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

function btnEncriptar(){
    const textoEncriptado = encriptacion(inputTexto.value);
    mensaje.value = textoEncriptado;
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptacion(inputTexto.value);
    mensaje.value = textoDesencriptado;
}

function encriptacion(stringEncriptacion){
    
    stringEncriptacion = stringEncriptacion.toLowerCase();
    for (let i = 0; i < matrizComparativa.length; i++)
    {
        if (stringEncriptacion.includes(matrizComparativa[i][0]))
        {
            stringEncriptacion = stringEncriptacion.replaceAll(matrizComparativa[i][0],matrizComparativa[i][1]);
        }
    }
    return stringEncriptacion;
}

function desencriptacion(stringDesencriptacion){
    stringDesencriptacion = stringDesencriptacion.toLowerCase();
    for (let i = 0; i < matrizComparativa.length; i++)
    {
        if (stringDesencriptacion.includes(matrizComparativa[i][1]))
        {
            stringDesencriptacion = stringDesencriptacion.replaceAll(matrizComparativa[i][1],matrizComparativa[i][0]);
        }
    }
    return stringDesencriptacion;
}

function btnCopiarPortapapeles(){
    let textoCopiado = document.getElementById('textoEncriptadoDesencriptado');
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');
}


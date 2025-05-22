const ERROR_MESSAGES = {
    MAIN_LETRAS: 'A senha deve conter pelo menos 08 caracteres',
    MIN_DIGITO: 'A senha deve conter pelo menos 02 digitos',
    UPPERCASE:'A senha deve conter pelo menos uma letra maiúscula',
    CARAC_ESPECIAL: 'A senha deve conter pelo menos um caractere especial'
};

export function validarSenha(senha){
    const errors = [];

    if (senha.length < 8) errors.push(ERROR_MESSAGES.MAIN_LETRAS);
    if ((senha.match(/\d/g) || []).length < 2 ) errors.push(ERROR_MESSAGES.MIN_DIGITO);
    if (!/[A-Z]/.test(password)) errors.push(ERROR_MESSAGES.UPPERCASE);

    return {
        isValid: errors.length === 0,
        errors: errors
    };
}
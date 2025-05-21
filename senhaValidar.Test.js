const {validarSenha} = require ('./senhaValidar');

describe ('VALIDAÇÃO DE SENHAS', () =>{
    test('DEVE RETORNAR ERRO PARA A SENHA MENOR QUE 08 CARACTERES', ()=>{
        const result = validarSenha('ape4p');
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain('A senha deve conter pelo menos 08 caracteres');
    });

    test('DEVE RETORNAR ERRO PARA A SENHA COM MENOS DE 02 DÍGITOS' ,()=>{
        const result = validarSenha('Abcdefg!@');
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain('A senha deve conter pelo menos 02 digitos');
    })
    test('DEVE RETORNAR ERRO PARA A SENHA SEM LETRA MAIÚSCULA',()=>{
        const result = validarSenha('Abcdefg!@');
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain('A senha deve conter pelo menos uma letra maiúscula');
    })
})
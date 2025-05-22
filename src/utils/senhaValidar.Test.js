const {validarSenha} = require ('./senhaValidar');

describe ('VALIDAÇÃO DE SENHAS', () =>{
    test('DEVE RETORNAR ERRO PARA A SENHA MENOR QUE 08 CARACTERES', ()=>{
        const result = validarSenha('ape4p');
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain('A senha deve conter pelo menos 08 caracteres');
    });

        test('DEVE RETORNAR ERRO PARA A SENHA SEM CARACTERE ESPECIAL', () => {
        const result = validatePassword('Abcdef12');
        expect(result.isValid).toBe(false);
        expect(result.errors).toContain('A senha deve conter pelo menos um caractere especial');
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

    test('DEVE RETORNAR VÁRIOS ERROS PARA A SENHA INVÁLIDA "MYPASS"', () => {
    const result = validatePassword('mypass');
    expect(result.isValid).toBe(false);
    expect(result.errors).toEqual([
      'A senha deve ter pelo menos 8 caracteres',
      'A senha deve conter pelo menos 2 dígitos',
      'A senha deve conter pelo menos uma letra maiúscula',
      'A senha deve conter pelo menos um caractere especial'
    ]);
  });
})
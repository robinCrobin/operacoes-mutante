const {
  soma, subtracao, multiplicacao, divisao, potencia, raizQuadrada, restoDivisao,
  fatorial, mediaArray, somaArray, maximoArray, minimoArray, valorAbsoluto,
  arredondar, isPar, isImpar, calcularPorcentagem, aumentarPorcentagem,
  diminuirPorcentagem, inverterSinal, seno, cosseno, tangente, logaritmoNatural,
  logaritmoBase10, arredondarParaBaixo, arredondarParaCima, hipotenusa,
  grausParaRadianos, radianosParaGraus, mdc, mmc, isPrimo, fibonacci,
  produtoArray, clamp, isDivisivel, celsiusParaFahrenheit, fahrenheitParaCelsius,
  inverso, areaCirculo, areaRetangulo, perimetroRetangulo, isMaiorQue,
  isMenorQue, isEqual, medianaArray, dobro, triplo, metade
} = require('../src/operacoes');

describe('Suíte de Testes Fraca para 50 Operações Aritméticas', () => {
  // === Testes para o Bloco 1 (1-10) ===
  test('1. deve somar dois números positivos', () => { expect(soma(2, 3)).toBe(5); });
  test('2. deve subtrair dois números positivos', () => { expect(subtracao(5, 2)).toBe(3); });
  test('3. deve multiplicar dois números positivos', () => { expect(multiplicacao(3, 4)).toBe(12); });
  test('4. deve dividir e lançar erro para divisão por zero', () => {
    expect(divisao(10, 2)).toBe(5);
    expect(() => divisao(5, 0)).toThrow();
  });
  test('5. deve calcular a potência com expoente positivo', () => { expect(potencia(2, 3)).toBe(8); });
  test('6. deve calcular a raiz quadrada de um quadrado perfeito', () => { expect(raizQuadrada(16)).toBe(4); });
  test('7. deve retornar o resto da divisão', () => { expect(restoDivisao(10, 3)).toBe(1); });
  test('8. deve calcular o fatorial de um número maior que 1', () => { expect(fatorial(4)).toBe(24); });
  test('9. deve calcular a média de um array com múltiplos elementos', () => { expect(mediaArray([10, 20, 30])).toBe(20); });
  test('10. deve somar um array com múltiplos elementos', () => { expect(somaArray([1, 2, 3])).toBe(6); });

  // === Testes para o Bloco 2 (11-20) ===
  test('11. deve encontrar o valor máximo em um array', () => { expect(maximoArray([1, 50, 10])).toBe(50); });
  test('12. deve encontrar o valor mínimo em um array', () => { expect(minimoArray([10, 2, 100])).toBe(2); });
  test('13. deve retornar o valor absoluto de um número negativo', () => { expect(valorAbsoluto(-5)).toBe(5); });
  test('14. deve arredondar um número para cima', () => { expect(arredondar(9.8)).toBe(10); });
  test('15. deve retornar true para um número par', () => { expect(isPar(100)).toBe(true); });
  test('16. deve retornar true para um número ímpar', () => { expect(isImpar(7)).toBe(true); });
  test('17. deve calcular uma porcentagem simples', () => { expect(calcularPorcentagem(50, 200)).toBe(100); });
  test('18. deve aumentar um valor em uma porcentagem', () => { expect(aumentarPorcentagem(100, 10)).toBeCloseTo(110); });
  test('19. deve diminuir um valor em uma porcentagem', () => { expect(diminuirPorcentagem(100, 10)).toBeCloseTo(90); });
  test('20. deve inverter o sinal de um número positivo', () => { expect(inverterSinal(42)).toBe(-42); });
  
  // === Testes para o Bloco 3 (21-30) ===
  test('21. deve calcular o seno de 0', () => { expect(seno(0)).toBe(0); });
  test('22. deve calcular o cosseno de 0', () => { expect(cosseno(0)).toBe(1); });
  test('23. deve calcular a tangente de 0', () => { expect(tangente(0)).toBe(0); });
  test('24. deve calcular o logaritmo natural de Euler', () => { expect(logaritmoNatural(Math.E)).toBe(1); });
  test('25. deve calcular o logaritmo na base 10', () => { expect(logaritmoBase10(100)).toBe(2); });
  test('26. deve arredondar para baixo', () => { expect(arredondarParaBaixo(5.9)).toBe(5); });
  test('27. deve arredondar para cima', () => { expect(arredondarParaCima(5.1)).toBe(6); });
  test('28. deve calcular a hipotenusa de um triângulo retângulo', () => { expect(hipotenusa(3, 4)).toBe(5); });
  test('29. deve converter graus para radianos', () => { expect(grausParaRadianos(180)).toBeCloseTo(Math.PI); });
  test('30. deve converter radianos para graus', () => { expect(radianosParaGraus(Math.PI)).toBeCloseTo(180); });

  // === Testes para o Bloco 4 (31-40) ===
  test('31. deve calcular o MDC de dois números', () => { expect(mdc(10, 5)).toBe(5); });
  test('32. deve calcular o MMC de dois números', () => { expect(mmc(10, 5)).toBe(10); });
  test('33. deve verificar que um número é primo', () => { expect(isPrimo(7)).toBe(true); });
  test('34. deve calcular o 10º termo de Fibonacci', () => { expect(fibonacci(10)).toBe(55); });
  test('35. deve calcular o produto de um array', () => { expect(produtoArray([2, 3, 4])).toBe(24); });
  test('36. deve manter um valor dentro de um intervalo (clamp)', () => { expect(clamp(5, 0, 10)).toBe(5); });
  test('37. deve verificar se um número é divisível por outro', () => { expect(isDivisivel(10, 2)).toBe(true); });
  test('38. deve converter Celsius para Fahrenheit', () => { expect(celsiusParaFahrenheit(0)).toBe(32); });
  test('39. deve converter Fahrenheit para Celsius', () => { expect(fahrenheitParaCelsius(32)).toBe(0); });
  test('40. deve calcular o inverso de um número', () => { expect(inverso(4)).toBe(0.25); });

  // === Testes para o Bloco 5 (41-50) ===
  test('41. deve calcular a área de um círculo', () => { expect(areaCirculo(10)).toBeCloseTo(314.159); });
  test('42. deve calcular a área de um retângulo', () => { expect(areaRetangulo(5, 4)).toBe(20); });
  test('43. deve calcular o perímetro de um retângulo', () => { expect(perimetroRetangulo(5, 4)).toBe(18); });
  test('44. deve verificar se um número é maior que outro', () => { expect(isMaiorQue(10, 5)).toBe(true); });
  test('45. deve verificar se um número é menor que outro', () => { expect(isMenorQue(5, 10)).toBe(true); });
  test('46. deve verificar se dois números são iguais', () => { expect(isEqual(7, 7)).toBe(true); });
  test('47. deve calcular a mediana de um array ímpar e ordenado', () => { expect(medianaArray([1, 2, 3, 4, 5])).toBe(3); });
  test('48. deve calcular o dobro de um número', () => { expect(dobro(10)).toBe(20); });
  test('49. deve calcular o triplo de um número', () => { expect(triplo(10)).toBe(30); });
  test('50. deve calcular a metade de um número', () => { expect(metade(20)).toBe(10); });
});

describe('Testes Adicionais para Matar Mutantes Sobreviventes', () => {
  // --- divisao: mensagem de erro e guard ---
  test('divisao: mensagem exata ao dividir por zero', () => {
    expect(() => divisao(5, 0)).toThrow('Divisão por zero não é permitida.');
  });

  // --- raizQuadrada: guard n<0 (mutantes 15, 16) e mensagem (18) ---
  test('raizQuadrada: lança erro com mensagem exata para n negativo', () => {
    expect(() => raizQuadrada(-1)).toThrow('Não é possível calcular a raiz quadrada de um número negativo.');
  });
  test('raizQuadrada: aceita zero (fronteira do operador <)', () => {
    expect(raizQuadrada(0)).toBe(0);
  });

  // --- fatorial: guards e casos base (mutantes 23, 24, 26, 28, 29, 30, 32) ---
  test('fatorial: lança erro com mensagem exata para n negativo', () => {
    expect(() => fatorial(-1)).toThrow('Fatorial não é definido para números negativos.');
  });
  test('fatorial: caso base 0 retorna 1', () => { expect(fatorial(0)).toBe(1); });
  test('fatorial: caso base 1 retorna 1', () => { expect(fatorial(1)).toBe(1); });
  test('fatorial: 2 retorna 2 (ramo do laço, distingue de retorno fixo 1)', () => {
    expect(fatorial(2)).toBe(2);
  });

  // --- mediaArray (42) ---
  test('mediaArray: array vazio retorna 0', () => { expect(mediaArray([])).toBe(0); });

  // --- maximoArray / minimoArray: vazios + mensagens (50, 52, 56, 58) ---
  test('maximoArray: array vazio lança erro com mensagem exata', () => {
    expect(() => maximoArray([])).toThrow('Array vazio не possui valor máximo.');
  });
  test('minimoArray: array vazio lança erro com mensagem exata', () => {
    expect(() => minimoArray([])).toThrow('Array vazio не possui valor mínimo.');
  });

  // --- isPar / isImpar: ramos negativos (63, 68, 71) ---
  test('isPar: número ímpar retorna false', () => { expect(isPar(3)).toBe(false); });
  test('isImpar: número par retorna false', () => { expect(isImpar(2)).toBe(false); });
  // mutante 71 troca n%2 por n*2; isImpar(4): 4%2=0 → false; mutado: 4*2=8 (truthy) → !==0 dá true. Mata.

  // --- isPrimo: guards e laço (110, 111, 113, 114, 116, 118, 120, 122, 123) ---
  test('isPrimo: 1 não é primo (fronteira do <=)', () => { expect(isPrimo(1)).toBe(false); });
  test('isPrimo: 0 não é primo', () => { expect(isPrimo(0)).toBe(false); });
  test('isPrimo: 2 é primo (laço não executa)', () => { expect(isPrimo(2)).toBe(true); });
  test('isPrimo: 4 não é primo (mata mutante n%i → n*i e fim do laço)', () => {
    expect(isPrimo(4)).toBe(false);
  });
  test('isPrimo: 9 não é primo (composto ímpar)', () => { expect(isPrimo(9)).toBe(false); });

  // --- produtoArray (135) ---
  test('produtoArray: array vazio retorna 1', () => { expect(produtoArray([])).toBe(1); });
  test('produtoArray: guard de length é checado antes de reduce (mata mutante que remove guard)', () => {
    // Objeto array-like com length=0 e SEM reduce: o guard original retorna 1 sem tocar em reduce.
    // O mutante (guard false) pula o guard e tenta chamar reduce, lançando TypeError.
    expect(produtoArray({ length: 0 })).toBe(1);
  });

  // --- clamp: fronteiras (141, 142, 145, 146) ---
  test('clamp: valor abaixo do mínimo é elevado ao mínimo', () => {
    expect(clamp(-5, 0, 10)).toBe(0);
  });
  test('clamp: valor acima do máximo é reduzido ao máximo', () => {
    expect(clamp(15, 0, 10)).toBe(10);
  });
  test('clamp: valor igual ao mínimo permanece (mata <=)', () => {
    expect(clamp(0, 0, 10)).toBe(0);
  });
  test('clamp: valor igual ao máximo permanece (mata >=)', () => {
    expect(clamp(10, 0, 10)).toBe(10);
  });
  test('clamp: distingue < de <= na fronteira via -0 (mata mutante valor <= min)', () => {
    // valor=+0, min=-0: original +0 < -0 é false (porque +0 === -0), retorna valor=+0.
    // Mutante +0 <= -0 é true, retorna min=-0.
    // Object.is(+0, -0) === false, então toBe distingue.
    expect(clamp(0, -0, 10)).toBe(0);
  });
  test('clamp: distingue > de >= na fronteira via -0 (mata mutante valor >= max)', () => {
    // valor=-0, max=+0: original -0 > 0 é false, retorna valor=-0.
    // Mutante -0 >= 0 é true, retorna max=+0.
    expect(clamp(-0, -10, 0)).toBe(-0);
  });

  // --- isDivisivel (149) ---
  test('isDivisivel: retorna false quando há resto', () => {
    expect(isDivisivel(10, 3)).toBe(false);
  });

  // --- temperatura: matam mutantes aritméticos (155, 156, 158, 159) ---
  test('celsiusParaFahrenheit: 100°C = 212°F', () => {
    expect(celsiusParaFahrenheit(100)).toBe(212);
  });
  test('fahrenheitParaCelsius: 212°F = 100°C', () => {
    expect(fahrenheitParaCelsius(212)).toBe(100);
  });

  // --- inverso (163, 165) ---
  test('inverso: zero lança erro com mensagem exata', () => {
    expect(() => inverso(0)).toThrow('Não é possível inverter o número zero.');
  });

  // --- isMaiorQue / isMenorQue / isEqual: ramos false (175, 177, 180, 182, 185) ---
  test('isMaiorQue: valores iguais retornam false (mata >=)', () => {
    expect(isMaiorQue(5, 5)).toBe(false);
  });
  test('isMaiorQue: a < b retorna false', () => {
    expect(isMaiorQue(3, 7)).toBe(false);
  });
  test('isMenorQue: valores iguais retornam false (mata <=)', () => {
    expect(isMenorQue(5, 5)).toBe(false);
  });
  test('isMenorQue: a > b retorna false', () => {
    expect(isMenorQue(7, 3)).toBe(false);
  });
  test('isEqual: valores diferentes retornam false', () => {
    expect(isEqual(1, 2)).toBe(false);
  });

  // --- medianaArray: array vazio + ordenação + tamanho par (190, 192, 193, 195, 196, 199, 201, 202, 203, 204, 205) ---
  test('medianaArray: array vazio lança erro com mensagem exata', () => {
    expect(() => medianaArray([])).toThrow('Array vazio не possui mediana.');
  });
  test('medianaArray: ordena array desordenado antes de calcular', () => {
    // Sem sort, [3,1,2,4] daria (1+2)/2=1.5; com sort, mediana é (2+3)/2=2.5
    expect(medianaArray([3, 1, 2, 4])).toBe(2.5);
  });
  test('medianaArray: tamanho par calcula média dos dois centrais', () => {
    expect(medianaArray([1, 2, 3, 4])).toBe(2.5);
  });
  test('medianaArray: tamanho par com elementos distintos (mata mid-1 e divisão)', () => {
    // [10,20,30,40] → (20+30)/2 = 25. mid+1 → (30+40)/2=35. *2 → 100. -sorted[mid] → -10.
    expect(medianaArray([10, 20, 30, 40])).toBe(25);
  });
  test('medianaArray: comparador a-b ordena ascendentemente (mata ArrowFunction => undefined e a+b)', () => {
    // Sem comparador correto, [10,2,30,4].sort() default seria lexical: ['10','2','30','4'] → [10,2,30,4] como string.
    // Com a-b: [2,4,10,30] → mediana (4+10)/2 = 7.
    expect(medianaArray([10, 2, 30, 4])).toBe(7);
  });
});
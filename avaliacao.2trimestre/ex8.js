function coeficientes(A, B, C, D, E, F) //exemplos, 3, 4, 8, 5, 9 e 1
  
    const denominador = (A * E) - (B * D)
    const x = (c * e - b * f) / denominador
    const y = (a * f - c * d) / denominador
  
    console.log("O valor de x é: " + x);
    console.log("O valor de y é: " + y);
}

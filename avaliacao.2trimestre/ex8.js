function coeficientes(A, B, C, D, E, F) 
  
    const denominador = (A * E) - (B * D)
    const x = (c * e - b * f) / denominador
    const y = (a * f - c * d) / denominador
  
    console.log("O valor de x é: " + x);
    console.log("O valor de y é: " + y);
}

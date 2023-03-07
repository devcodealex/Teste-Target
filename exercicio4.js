
const fatMensal = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };
  
  let totalFat = 0;


  
  for (let estado in fatMensal) {
    totalFat += fatMensal[estado];
  }
  
  for (let estado in fatMensal) {
    const percentual = ((fatMensal[estado] / totalFat) * 100).toFixed(2);
    console.log(`${estado}: ${percentual}%`);
  }

  
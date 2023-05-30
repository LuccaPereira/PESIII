let arquivo = "PESIII-main/weapp/index.html";

function nfServico(){

  var valorBruto = document.querySelector("#calculo").value; 
  var cpp = 0;
  var iss = 0;
  var pis = 0;
  var csll = 0;
  var irpj = 0;
  var cofins = 0;
  var aliquotaTotal = 0;

  if(valorBruto == ""){
    alert("digite um numero");
  }

  if (valorBruto >= 0 && valorBruto <= 180000) {
    cpp = 4.00 / 100;
    iss = 2.01 / 100;
    pis = 0.00 / 100;
    csll = 0.00 / 100;
    irpj = 0.00 / 100;
    cofins = 0.00 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 180000 && valorBruto <= 360000) {
    cpp = 4.00 / 100;
    iss = 2.79 / 100;
    pis = 0.00 / 100;
    csll = 0.00 / 100;
    irpj = 0.00 / 100;
    cofins = 1.42 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins) ;
  } else if (valorBruto > 360000 && valorBruto <= 540000) {
    cpp = 4.07 / 100;
    iss = 3.50 / 100;
    pis = 0.35 / 100;
    csll = 0.43 / 100;
    irpj = 0.48 / 100;
    cofins = 1.43 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 540000 && valorBruto <= 720000) {
    cpp = 4.47 / 100;
    iss = 3.84 / 100;
    pis = 0.38 / 100;
    csll = 0.53 / 100;
    irpj = 0.53 / 100;
    cofins = 1.56 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 720000 && valorBruto <= 900000) {
    cpp = 4.52 / 100;
    iss = 3.87 / 100;
    pis = 0.38 / 100;
    csll = 0.52 / 100;
    irpj = 0.53 / 100;
    cofins = 1.58 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 900000 && valorBruto <= 1080000) {
    cpp = 4.92 / 100;
    iss = 4.23 / 100;
    pis = 0.40 / 100;
    csll = 0.57 / 100;
    irpj = 0.57 / 100;
    cofins = 1.73 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 1080000 && valorBruto <= 1260000) {
    cpp = 4.97 / 100;
    iss = 4.26 / 100;
    pis = 0.42 / 100;
    csll = 0.56 / 100;
    irpj = 0.59 / 100;
    cofins = 1.74 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 1260000 && valorBruto <= 1440000) {
    cpp = 5.03 / 100;
    iss = 4.31 / 100;
    pis = 0.51 / 100;
    csll = 0.59 / 100;
    irpj = 0.59 / 100;
    cofins = 1.76 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 1440000 && valorBruto <= 1620000) {
    cpp = 5.10 / 100;
    iss = 4.37 / 100;
    pis = 0.51 / 100;
    csll = 0.59 / 100;
    irpj = 0.63 / 100;
    cofins = 1.88 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 1620000 && valorBruto <= 1800000) {
    cpp = 5.20 / 100;
    iss = 4.45 / 100;
    pis = 0.56 / 100;
    csll = 0.61 / 100;
    irpj = 0.63 / 100;
    cofins = 1.89 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 1800000 && valorBruto <= 1980000) {
    cpp = 5.25 / 100;
    iss = 4.48 / 100;
    pis = 0.56 / 100;
    csll = 0.64 / 100;
    irpj = 0.63 / 100;
    cofins = 2.07 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 1980000 && valorBruto <= 2160000) {
    cpp = 5.31 / 100;
    iss = 4.54 / 100;
    pis = 0.57 / 100;
    csll = 0.69 / 100;
    irpj = 0.69 / 100;
    cofins = 2.09 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 2160000 && valorBruto <= 2340000) {
    cpp = 5.38 / 100;
    iss = 4.60 / 100;
    pis = 0.57 / 100;
    csll = 0.69 / 100;
    irpj = 0.69 / 100;
    cofins = 2.10 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 2340000 && valorBruto <= 2520000) {
    cpp = 5.44 / 100;
    iss = 4.65 / 100;
    pis = 0.57 / 100;
    csll = 0.70 / 100;
    irpj = 0.71 / 100;
    cofins = 2.13 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 2520000 && valorBruto <= 2700000) {
    cpp = 5.50 / 100;
    iss = 4.71 / 100;
    pis = 0.57 / 100;
    csll = 0.70 / 100;
    irpj = 0.71 / 100;
    cofins = 2.15 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 2700000 && valorBruto <= 2880000) {
    cpp = 5.56 / 100;
    iss = 4.76 / 100;
    pis = 0.57 / 100;
    csll = 0.70 / 100;
    irpj = 0.72 / 100;
    cofins = 2.34 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 2880000 && valorBruto <= 3060000) {
    cpp = 5.62 / 100;
    iss = 4.82 / 100;
    pis = 0.57 / 100;
    csll = 0.76 / 100;
    irpj = 0.78 / 100;
    cofins = 2.36 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 3060000 && valorBruto <= 3240000) {
    cpp = 5.68 / 100;
    iss = 4.87 / 100;
    pis = 0.57 / 100;
    csll = 0.78 / 100;
    irpj = 0.78 / 100;
    cofins = 2.37 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 3240000 && valorBruto <= 3420000) {
    cpp = 5.74 / 100;
    iss = 4.93 / 100;
    pis = 0.57 / 100;
    csll = 0.79 / 100;
    irpj = 0.80 / 100;
    cofins = 2.40 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins);
  } else if (valorBruto > 3420000 && valorBruto <= 3600000) {
    cpp = 5.80 / 100;
    iss = 4.98 / 100;
    pis = 0.57 / 100;
    csll = 0.79 / 100;
    irpj = 0.80 / 100;
    cofins = 2.42 / 100;
    aliquotaTotal = (cpp + iss + csll + irpj + cofins) ;
  }
      total = valorBruto / (1 - aliquotaTotal);

      var display = [
        `...CPP: ${cpp*100} %`,
        `...ISS: ${iss*100} %`,
        `...PIS: ${pis*100} %`,
        `...CSLL: ${csll*100} %`,
        `...IRPJ: ${irpj*100} %`,
        `...COFINS: ${cofins*100} %`,
        `...O total: ${parseInt(total)} com base no ${parseInt(valorBruto)} e a aliquota total ${aliquotaTotal*100}%`
      ];
      
      var resultadoElement = document.getElementById("resultado");
      resultadoElement.innerHTML = '';
      
      display.forEach(function(item) {
        resultadoElement.innerHTML += item + "<br>";
      });
      
}
  

// function multiplier(numbers){
//     return numbers  
//         .split(',')
//         .map( x => parseInt(x))
//         .reduce( (a,b) => a * b )
// }


//CPP:
//4.00%	4.00%	4.07%	4.47%	4.52%	4.92%	4.97%	5.03%	5.37%	5.42%	5.98%	6.09%	6.19%	6.30%	6.40%	7.41%	7.50%	7.60%	7.71%	7.83%

//iss:
//iss	2.01%	2.79%	3.50%	3.84%	3.87%	4.23%	4.26%	4.31%	4.61%	4.65%	5.00%	5.00%	5.00%	5.00%	5.00%	5.00%	5.00%	5.00%	5.00%	5.00%

//pis:
//pis	0.00%	0.00%	0.35%	0.38%	0.38%	0.40%	0.42%	0.42%	0.45%	0.45%	0.50%	0.50%	0.50%	0.51%	0.51%	0.56%	0.56%	0.57%	0.57%	0.57%

//CSLL:
//CSLL	0.00%	0.00%	0.43%	0.53%	0.52%	0.57%	0.56%	0.57%	0.61%	0.64%	0.69%	0.69%	0.70%	0.70%	0.70%	0.76%	0.78%	0.79%	0.79%	0.79%

//IRPJ:
//IRPJ	0.00%	0.00%	0.48%	0.53%	0.53%	0.57%	0.59%	0.59%	0.63%	0.63%	0.69%	0.69%	0.71%	0.71%	0.72%	0.78%	0.78%	0.80%	0.80%	0.81%

//COFINS:
//COFINS	0.00%	1.42%	1.43%	1.56%	1.58%	1.73%	1.74%	1.76%	1.88%	1.89%	2.07%	2.09%	2.10%	2.13%	2.15%	2.34%	2.36%	2.37%	2.40%	2.42%

//total:
// se o valor bruto for R$ 0,00 ate R$ 180.000,00	6.00%:
//CPP = 4%
//iss =2.01%
// se o valor bruto for R$ 180.000,01 ate R$ 360.000,00	8.21%
// se o valor bruto for R$ 360.000,01 ate R$ 540.000,00	10.26%
// se o valor bruto for R$ 540.000,01 ate R$ 720.000,00	11.31%
// se o valor bruto for R$ 720.000,01 ate R$ 900.000,00	11.40%
// se o valor bruto for R$ 900.000,01 ate R$ 1.080.000,00	12.42%
// se o valor bruto for R$ 1.080.000,01 ate R$ 1.260.000,00	12.54%
// se o valor bruto for R$ 1.260.000,01 ate R$ 1.440.000,00	12.68%
// se o valor bruto for R$ 1.440.000,01 ate R$ 1.620.000,00	13.55%
// se o valor bruto for R$ 1.620.000,01 ate R$ 1.800.000,00	13.68%
// se o valor bruto for R$ 1.800.000,01 ate R$ 1.980.000,00	14.93%
// se o valor bruto for R$ 1.980.000,01 ate R$ 2.160.000,00	15.06%
// se o valor bruto for R$ 2.160.000,01 ate R$ 2.340.000,00	15.20%
// se o valor bruto for R$ 2.340.000,01 ate R$ 2.520.000,00	15.35%
// se o valor bruto for R$ 2.520.000,01 ate R$ 2.700.000,00	15.48%
// se o valor bruto for R$ 2.700.000,01 ate R$ 2.880.000,00	16.85%
// se o valor bruto for R$ 2.880.000,01 ate R$ 3.060.000,00	16.98%
// se o valor bruto for R$ 3.060.000,01 ate R$ 3.240.000,00	17.13%
// se o valor bruto for R$ 3.240.000,01 ate R$ 3.420.000,00	17.27%
// se o valor bruto for R$ 3.420.000,01 ate R$ 3.600.000,00	17.42%


var slider = document.getElementById('diasTrabajados');
var output = document.getElementById("dias");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}



function calculo(){
var sal = document.getElementById('salario').value;
var dias = document.getElementById('diasTrabajados').value;

   try {
       if (IsNumeric(dias)) {

           if (IsNumeric(sal)) {
                var tst = ((dias * sal) / 360);
               console.log(tst);
              var result = Math.round(tst*100)/100;
               document.getElementById('cesantias').innerHTML = "$"+ result;
               return (dias * sal) / 360;

           } else {
               alert("Ingrese un número válido para su salario");
           }

       } else {
           alert("Ingrese un número valido de días");
       }
   } catch (err) {
       alert("Ocurrió un problema, trata de llenar los datos sin espacios ni caracteres especiales");
   }



}

function IsNumeric(input) {
   return (input - 0) == input && ('' + input).trim().length > 0;
}

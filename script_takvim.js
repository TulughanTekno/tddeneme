const elementmsa = document.getElementById("ms_a");
elementmsa.addEventListener("click", msa);

const elementmsb = document.getElementById("ms_b");
elementmsb.addEventListener("click", msb);

const elementmsc = document.getElementById("ms_c");
elementmsa.addEventListener("click", msc);

const elementmsd = document.getElementById("ms_d");
elementmsb.addEventListener("click", msd);


function msa() {
  document.getElementById("demo").innerHTML = 'der Frühling';
}

function msb() {
  document.getElementById("demo").innerHTML = 'der Sommer';
}

function msc() {
    document.getElementById("demo").innerHTML = 'der Winter';
  }
  
  function msd() {
    document.getElementById("demo").innerHTML = 'der Herbst';
  }



  function playAudio(url) {
    new Audio(url).play();
  }
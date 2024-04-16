const elementmsa = document.getElementById("ms_a");
elementmsa.addEventListener("click", msa);

const elementmsb = document.getElementById("ms_b");
elementmsb.addEventListener("click", msb);

const elementmsc = document.getElementById("ms_c");
elementmsa.addEventListener("click", msc);

const elementmsd = document.getElementById("ms_d");
elementmsb.addEventListener("click", msd);

function playAudio(url) {
  new Audio(url).play();
}


function msa() {
  document.getElementById("demo").innerHTML = 'der Frühling';
  playAudio("Sesler/takvimses/frühling.mp3")
}

function msb() {
  document.getElementById("demo").innerHTML = 'der Sommer';
  playAudio("Sesler/takvimses/sommer.mp3")
}

function msc() {
    document.getElementById("demo").innerHTML = 'der Winter';
    playAudio("Sesler/takvimses/winter.mp3")
  }
  
  function msd() {
    document.getElementById("demo").innerHTML = 'der Herbst';
    playAudio("Sesler/takvimses/herbst.mp3")
  }



  
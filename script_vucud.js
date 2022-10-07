const elementva = document.getElementById("v_a");
elementva.addEventListener("click", va);

const elementvb = document.getElementById("v_b");
elementvb.addEventListener("click", vb);

const elementvc = document.getElementById("v_c");
elementvc.addEventListener("click", vc);

const elementvd = document.getElementById("v_d");
elementvd.addEventListener("click", vd);

const elementvel = document.getElementById("v_el");
const elementver = document.getElementById("v_er");
elementvel.addEventListener("click", ve);
elementver.addEventListener("click", ve);

const elementvf = document.getElementById("v_f");
elementvf.addEventListener("click", vf);

const elementvg = document.getElementById("v_g");
elementvg.addEventListener("click", vg);

const elementvh = document.getElementById("v_h");
elementvh.addEventListener("click", vh);

const elementvi = document.getElementById("v_i");
elementvi.addEventListener("click", vi);

const elementvj = document.getElementById("v_j");
elementvj.addEventListener("click", vj);

const elementvk = document.getElementById("v_k");
elementvk.addEventListener("click", vk);

const elementvl = document.getElementById("v_l");
elementvl.addEventListener("click", vl);

const elementvn = document.getElementById("v_n");
elementvn.addEventListener("click", vn);

function va() {
  document.getElementById("demo").innerHTML = 'der Frühling';
}

function vb() {
  document.getElementById("demo").innerHTML = 'der Sommer';
}

function vc() {
    document.getElementById("demo").innerHTML = 'der Winter';
  }
  
function vd() {
    document.getElementById("demo").innerHTML = 'der Herbst';
  }

function ve() {
    document.getElementById("demo").innerHTML = 'der Frühling';
  }
  
  function vf() {
    document.getElementById("demo").innerHTML = 'der Sommer';
  }
  
  function vg() {
      document.getElementById("demo").innerHTML = 'der Winter';
    }
    
    function vh() {
      document.getElementById("demo").innerHTML = 'der Herbst';
    }
  
    function vi() {
      document.getElementById("demo").innerHTML = 'der Frühling';
    }
    
    function vj() {
      document.getElementById("demo").innerHTML = 'der Sommer';
    }
    
    function vk() {
        document.getElementById("demo").innerHTML = 'der Winter';
      }
      
      function vl() {
        document.getElementById("demo").innerHTML = 'der Herbst';
      }
  function vn() {
    document.getElementById("demo").innerHTML = 'der Frühling';
 }
      



  function playAudio(url) {
    new Audio(url).play();
  }
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
  document.getElementById("demo_g").innerHTML = 'das Haar';
}

function vb() {
  document.getElementById("demo_g").innerHTML = 'der Stirn';
}

function vc() {
    document.getElementById("demo_g").innerHTML = 'der Mund';
  }
  
function vd() {
    document.getElementById("demo_g").innerHTML = 'der Kopft';
  }

function ve() {
    document.getElementById("demo_g").innerHTML = 'die Schulter';
  }
  
  function vf() {
    document.getElementById("demo_g").innerHTML = 'der Ellbogen';
  }
  
  function vg() {
      document.getElementById("demo_g").innerHTML = 'der Arm';
    }
    
    function vh() {
      document.getElementById("demo_g").innerHTML = 'das Handgelenk';
    }
  
    function vi() {
      document.getElementById("demo_g").innerHTML = 'die Hand';
    }
    
    function vj() {
      document.getElementById("demo_g").innerHTML = 'der Bauch';
    }
    
    function vk() {
        document.getElementById("demo_g").innerHTML = 'das Knie';
      }
      
      function vl() {
        document.getElementById("demo_g").innerHTML = 'das Fußgelenk';
      }
  function vn() {
    document.getElementById("demo_g").innerHTML = 'der Fuß';
 }
      



  function playAudio(url) {
    new Audio(url).play();
  }
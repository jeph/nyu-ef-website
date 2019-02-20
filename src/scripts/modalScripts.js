if (document.getElementById('100-speakers') != null) {
  const speakersModal = document.getElementById('100-speakers-modal');
  const speakersButton = document.getElementById('100-speakers');
  const span1 = document.getElementsByClassName("close")[0];

  speakersButton.onclick = function () {
    speakersModal.style.display = "block";
  }

  span1.onclick = function () {
    speakersModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === speakersModal) {
      speakersModal.style.display = "none";
    }
  });

  const startupsModal = document.getElementById('60-startups-modal');
  const startupsButton = document.getElementById('60-startups');
  const span2 = document.getElementsByClassName("close")[1];

  startupsButton.onclick = function () {
    startupsModal.style.display = "block";
  }

  span2.onclick = function () {
    startupsModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === startupsModal) {
      startupsModal.style.display = "none";
    }
  });

  const roundtablesModal = document.getElementById('roundtables-modal');
  const roundtablesButton = document.getElementById('roundtables');
  const span3 = document.getElementsByClassName("close")[2];

  roundtablesButton.onclick = function () {
    roundtablesModal.style.display = "block";
  }

  span3.onclick = function () {
    roundtablesModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === roundtablesModal) {
      roundtablesModal.style.display = "none";
    }
  });
}

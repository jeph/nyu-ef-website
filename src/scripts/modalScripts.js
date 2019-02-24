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

  const keynoteModal = document.getElementById('keynote-modal');
  const keynoteButton = document.getElementById('keynote');
  const span4 = document.getElementsByClassName("close")[3];

  keynoteButton.onclick = function () {
    keynoteModal.style.display = "block";
  }

  span4.onclick = function () {
    keynoteModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === keynoteModal) {
      keynoteModal.style.display = "none";
    }
  });

  const workshopsModal = document.getElementById('workshops-modal');
  const workshopsButton = document.getElementById('workshops');
  const span5 = document.getElementsByClassName("close")[4];

  workshopsButton.onclick = function () {
    workshopsModal.style.display = "block";
  }

  span5.onclick = function () {
    workshopsModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === workshopsModal) {
      workshopsModal.style.display = "none";
    }
  });

  const panelsModal = document.getElementById('panels-modal');
  const panelsButton = document.getElementById('panels');
  const span6 = document.getElementsByClassName("close")[5];

  panelsButton.onclick = function () {
    panelsModal.style.display = "block";
  }

  span6.onclick = function () {
    panelsModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === panelsModal) {
      panelsModal.style.display = "none";
    }
  });

  const ideaJamModal = document.getElementById('idea-jam-modal');
  const ideaJamButton = document.getElementById('idea-jam');
  const span7 = document.getElementsByClassName("close")[6];

  ideaJamButton.onclick = function () {
    ideaJamModal.style.display = "block";
  }

  span7.onclick = function () {
    ideaJamModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === ideaJamModal) {
      ideaJamModal.style.display = "none";
    }
  });

  const pitchCompetitionModal = document.getElementById('pitch-competition-modal');
  const pitchCompetitionButton = document.getElementById('pitch-competition');
  const span8 = document.getElementsByClassName("close")[7];

  pitchCompetitionButton.onclick = function () {
    pitchCompetitionModal.style.display = "block";
  }

  span8.onclick = function () {
    pitchCompetitionModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === pitchCompetitionModal) {
      pitchCompetitionModal.style.display = "none";
    }
  });

  const afterPartyModal = document.getElementById('after-party-modal');
  const afterParty = document.getElementById('after-party');
  const span9 = document.getElementsByClassName("close")[8];

  afterParty.onclick = function () {
    afterPartyModal.style.display = "block";
  }

  span9.onclick = function () {
    afterPartyModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === afterPartyModal) {
      afterPartyModal.style.display = "none";
    }
  });
}

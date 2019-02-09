if (document.getElementById('hackathon-modal') != null) {
  const hackathonModal = document.getElementById('hackathon-modal');
  const hackathonButton = document.getElementById('hackathon');
  const span1 = document.getElementsByClassName("close")[0];

  hackathonButton.onclick = function () {
    hackathonModal.style.display = "block";
  }

  span1.onclick = function () {
    hackathonModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === hackathonModal) {
      hackathonModal.style.display = "none";
    }
  });

  //modal for second speaker
  const pitchCompeitionModal = document.getElementById('pitch-competition-modal');
  const pitchCompetitionButton = document.getElementById('pitch-competition');
  const span2 = document.getElementsByClassName("close")[1];

  pitchCompetitionButton.onclick = function () {
    pitchCompeitionModal.style.display = "block";
  }

  span2.onclick = function () {
    pitchCompeitionModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target === pitchCompeitionModal) {
      pitchCompeitionModal.style.display = "none";
    }
  });

  const afterPartyModal = document.getElementById('after-party-modal');
  const afterPartyButton = document.getElementById('after-party');
  const span3 = document.getElementsByClassName("close")[2];

  afterPartyButton.onclick = function () {
    afterPartyModal.style.display = "block";
  }

  span3.onclick = function () {
    afterPartyModal.style.display = "none";
  }

  window.addEventListener("click", function (event) {
    if (event.target == afterPartyModal) {
      afterPartyModal.style.display = "none";
    }
  });
}

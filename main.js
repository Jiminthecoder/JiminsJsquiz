// Jimin's js quiz code
document.getElementById("button").addEventListener("click", buttonclicked);

// global variables
let numscorespan = document.getElementById("num-score");

// function
function buttonclicked() {
  document.getElementById("advice").innerHTML = "";
  document.getElementById("percentage").innerHTML = "";

  // scorekeeper
  let numscore = 0;

  // If statements
  // question1
  let quest1 = document.getElementById("question1").value.toLowerCase();
  if (quest1 === "george washington") {
    document.getElementById("answer1").innerHTML = "CORRECT";
    numscore++;
    numscorespan.innerHTML = numscore;
  } else {
    document.getElementById("answer1").innerHTML = "INCORRECT";
  }

  // question2
  let quest2 = document.getElementById("question2").value.toLowerCase();

  if (quest2 === "abraham lincoln") {
    document.getElementById("answer2").innerHTML = "CORRECT";
    numscore++;
    numscorespan.innerHTML = numscore;
  } else {
    document.getElementById("answer2").innerHTML = "INCORRECT";
  }

  // question3
  let quest3 = document.getElementById("question3").value.toLowerCase();

  if (quest3 === "cell") {
    document.getElementById("answer3").innerHTML = "CORRECT";
    numscore++;
    numscorespan.innerHTML = numscore + "/3";
  } else {
    document.getElementById("answer3").innerHTML = "INCORRECT";
    numscorespan.innerHTML = numscore + "/3";
  }

  // question4
  let quest4 = document.getElementById("question4").value.toLowerCase();

  if (quest4 === "yes" || quest4 === "absolutely") {
    document.getElementById("answer4").innerHTML = "CORRECT";
    numscore++;
    numscorespan.innerHTML = numscore + "/4";
  } else {
    document.getElementById("answer4").innerHTML = "INCORRECT";
    numscorespan.innerHTML = numscore + "/4";
  }

  //percentage and score calculation
  let percentage = (numscore / 4) * 100;
  document.getElementById("percentage").innerHTML = percentage + "%";
  if (percentage < 34) {
    document.getElementById("advice").innerHTML =
      "some more time studying would prove to be helpful";
  } else if (percentage < 67) {
    document.getElementById("advice").innerHTML =
      "you could probably spend some more time to study";
  } else if (percentage < 100) {
    advice.innerHTML = "good... but not perfect";
  } else {
    document.getElementById("advice").innerHTML = "wow! nice job, a 100%!";
  }
}

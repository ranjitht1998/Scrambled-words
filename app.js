//var btn = document.querySelector(".btn");
var play = false;
let words = ["java", "python", "angular", "javascript", "reactjs", "c++"];
let newword = "";
let random = "";

function create() {
  let randomWord = Math.floor(Math.random() * words.length);
  //console.log(randomWord);
  let newTempWord = words[randomWord];
  //console.log(newTempWord);
  return newTempWord;
}

function scrambledWord(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[i];
    //console.log(temp);
    let j = Math.floor(Math.random() * (i + 1));
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
}

function fun1() {
  if (!play) {
    play = true;

    newword = create();
    random = scrambledWord(newword.split("")).join();
    document.getElementById("msg").innerHTML = random;
    document.querySelector(".btn").innerHTML = "Check ";

  } else {
    let tempWord = document.querySelector("input").value;
    if (tempWord === newword) {

      //promt("correct");
      play = false;
      document.getElementById("msg").innerHTML = "It is correct";
      //btn.innerHTML = "Start Again";
      document.querySelector(".btn").innerHTML = "Next Word";

    } else {
      play = false;
      //console.log("incorrect");
      document.getElementById("msg").innerHTML = "It is Incorrect-Try Again";
      document.querySelector(".btn").innerHTML = "Next Word";
    }
  }
}
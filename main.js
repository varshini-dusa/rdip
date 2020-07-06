var ans = 0.0;
var a = 0.0;
var b = 0.0;
function round(value, decimals = 3) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

function display() {
  if (
    document.getElementById("operation").value == "absolute" ||
    document.getElementById("operation").value == "sqrt"
  ) {
    console.log("enterd if block");

    document.getElementById("inp2").style.display = "none";
    document.getElementById("lab2").style.display = "none";
  } else {
    if (document.getElementById("inp2").style.display == "none") {
      document.getElementById("inp2").style.display = "block";
      document.getElementById("lab2").style.display = "block";
    }
  }
}
function validateForm() {
  console.log("enterd solve");

  a = parseFloat(document.getElementById("inp1").value);
  if (
    document.getElementById("operation").value != "absolute" &&
    document.getElementById("operation").value != "sqrt"
  ) {
    b = parseFloat(document.getElementById("inp2").value);
  }
  console.log(a, b);

  a = round(a);
  b = round(b);
  switch (document.getElementById("operation").value) {
    case "addition":
      ans = a + b;
      break;
    case "subtraction":
      ans = a - b;
      break;
    case "multiplication":
      ans = a * b;
      break;
    case "division":
      ans = a / b;
      break;
    case "absolute":
      ans = Math.abs(a);
      break;
    case "sqrt":
      ans = Math.sqrt(a);
      break;
  }
  document.getElementById("demo").innerHTML = round(ans);
  return round(ans);
}
function validate() {
  if (
    document.myform2.name.value[0] >= "0" &&
    document.myform2.name.value[0] <= "9"
  ) {
    alert("name parameters do not match");
    return false;
  }

  if (!document.myform2.phone.value.match("[0-9]{10}")) {
    alert("phone number format does not match");
    return false;
  }
  if (
    !document.myform2.email.value.includes("@") ||
    !document.myform2.email.value.includes(".")
  ) {
    alert("email format not satisfied");
    return false;
  }

  return true;
}
function checkPalindrome() {
  var str = document.form3.inp1.value;
  if (str.includes(" ")) {
    alert("Enter single word!");
    // return false
  } else {
    if (str == str.split("").reverse().join("")) {
      alert("palindrome");
      return true;
    } else {
      alert("not palindrome");
      return false;
    }
  }
}
function checkAnagram() {
  var arr1 = document.form4.inp2.value.split("");
  var arr2 = document.form4.inp3.value.split("");
  arr2 = arr2.filter(function (ele) {
    return ele != " ";
  });
  if (JSON.stringify(arr1.sort()) === JSON.stringify(arr2.sort())) {
    alert("anagram");
    return true;
  } else {
    alert("not anagram");
    return false;
  }
}

function survive() {
  var a = document.getElementById("inp1").value;
  var b = document.getElementById("inp2").value;
  a = a % 3;
  b = b % 3;
  var v = ["Human", "Cockroach", "Nuclear Bomb"];
  if (a == b) {
    alert("TIE " + v[a]);
    return "TIE " + v[a];
  } else if (a + b == 1) {
    alert(v[0]);
    return v[0];
  } else if (a + b == 2) {
    alert(v[2]);
    return v[2];
  } else {
    alert(v[1]);
    return v[1];
  }
}

function convert() {
  var a = document.getElementById("inp1").value;
  var b = document.getElementById("inp2").value;
  var c = document.getElementById("inp3").value;
  a = parseFloat(a);
  let request = new XMLHttpRequest();
  var url =
    "https://free.currconv.com/api/v7/convert?q=" +
    b +
    "_" +
    c +
    "&compact=ultra&apiKey=ecd96f38ab9cbbe978b7";
  request.open("GET", url);
  request.send();
  var obj;
  request.onload = () => {
    // console.log(request);
    if (request.status === 200) {
      // alert(request.response);
      obj = request.responseText.substring(11);
      obj = obj.slice(0, -1);
      obj = Number(obj);
      a = round(a * obj);
      alert(a);
      return a;
    } else {
      alert(`error ${request.status} ${request.statusText}`);
      return false;
    }
  };
  // console.log(obj);

  // var con = b + "_" + c;
  // alert(a * obj);
}

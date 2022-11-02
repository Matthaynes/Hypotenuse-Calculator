function do_things() {

  var a = parseFloat(document.getElementById("a").value);
  var b = parseFloat(document.getElementById("b").value);
  var output = document.getElementById("output");

  if (Number.isNaN(a) && !Number.isNaN(b)) {
    const a = Math.sqrt(c ** 2 - b ** 2);
    output.textContent = ' ' + a;
  }

  if (Number.isNaN(b) && !Number.isNaN(a)) {
    const b = Math.sqrt(c ** 2 - a ** 2);
    output.textContent = ' ' + b;
  }

  if (!Number.isNaN(a) && !Number.isNaN(b)) {
    const c = Math.sqrt(a ** 2 + b ** 2);
    output.textContent = ' ' + c;
  }
}
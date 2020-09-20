
// var num_0 = document.getElementById("num_0");
// var num_1 = document.getElementById("num_1");
// var num_2 = document.getElementById("num_2");
// var num_3 = document.getElementById("num_3");
// var num_4 = document.getElementById("num_4");
// var num_5 = document.getElementById("num_5");
// var num_6 = document.getElementById("num_6");
// var num_7 = document.getElementById("num_7");
// var num_8 = document.getElementById("num_8");
// var num_9 = document.getElementById("num_9");

var result_section = document.getElementById("result_section");
var plus = document.getElementById("plus");
var equal = document.getElementById("equal");
var multiply = document.getElementById("multiply");
var except = document.getElementById("except");


var num_a = '';
var num_b = '';
var num_final = '';

// console.log((12 * 10))


document.querySelectorAll('.number').forEach(item => {
  result_section.innerHTML = ""
  item.addEventListener('click', event => {
    console.log(item.innerHTML)
    result_section.append(item.innerHTML)
    num_a = Number(parseInt(result_section.innerHTML),10)
  })
})



var math = ''
plus.addEventListener("click", function(e){
  math = "plus"
  // result_section.append(10)
  num_b = 10
})

subtract.addEventListener("click", function(e){
  math =  "subtract"
})
multiply.addEventListener("click", function(e){
  math = "multiply"
})
except.addEventListener("click", function(e){
  math =  "except"
})



equal.addEventListener("click", function(){
  result_section.innerHTML = ""
  console.log(num_a, "num_a")
  console.log(num_b, "num_b")
  console.log("num_a is " + typeof(num_a))

  switch (math) {
    case 'plus':
      console.log(num_a, 'plus');
      result_section.append(num_a)
      break;
    case 'subtract':
      console.log(num_a - num_b);
      result_section.append(num_a -= num_b)
      break;
    case 'multiply':
      console.log(num_a * num_b);
      result_section.append(num_a *= num_b)

      break;
    case 'except':
      console.log(num_a/num_b);
      result_section.append(num_a /= num_b)

      break;
    default:
      console.log('default');
  }

})


















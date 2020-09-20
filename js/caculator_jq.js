
$(document).ready(function(){
  
  var result="";
  $(".btn").click(function(){
    var input = $(this).attr("value");
    if(input != "AC" && input != "CE" && input != "%" && input != "="){
      if(result === 0){
        result = "";
        result += input;
      }else{
        result += input;
      }


    }else if(input == "AC"){
      result = 0;
    }else if(input == "CE"){
      result = result.slice(0,-1);
    }else if(input == "="){
      result = eval(result);
    }else if(input == "%"){
      result = eval(result / 100)
    }
    $("#result_sectiont").val(result);
    console.log(result)
  });




  // $('.btn').click(function(){
  //   var keyIn = $(this).attr("value")
    
  //   if(keyIn !='AC' && keyIn !='CE' && keyIn !='%' && keyIn !='='){
  //     result += keyIn
  //     console.log(result)

  //   }else if( keyIn == "="){
  //     result = eval(keyIn)
  //   }


  // })







})
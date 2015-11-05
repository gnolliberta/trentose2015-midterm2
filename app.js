/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    word_en : "Apple",  // word in english
 *    word_de : "Apfel"   // word in german
 *  }
 */ 



var tmpl = ' <li id="ID">' +
           '  <h3>WORD</h3>' +
           '  <h3 class="solution">SOLUTION</h3>'+
           ' </li> ';

var counter=0;
var i =0;

$(document).ready(function(){


   
   var tmp = tmpl.replace("ID",i).replace("WORD",data [i].word_en).replace("SOLUTION",data[i].word_de);
   
   $(".current").html(tmp);
   $(".solution").hide();

   $(".current").click(function(){
        $(".current").html("");
        $(".solution").show();
    
    });
    
    $(".btn opt-correct").click(function(){
        counter ++;
        i++;
    });
    
    $(".btn opt-incorrect").click(function(){
        i++;
    });



    $("#tot-good").html(counter);
    $("#tot").html(7);
    
});








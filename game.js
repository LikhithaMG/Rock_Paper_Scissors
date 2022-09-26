           /* 1 refers to rock
           2 refers to paper
           3 refers to scissor */
          document.getElementById("two").value=Math.floor((Math.random()*3)+1);
       function winner(){
            if(document.getElementById("one").value==document.getElementById("two").value){
                var x=document.write("Game ties because computer's choice is "+ document.getElementById("two").value);
            }
            if((document.getElementById("one").value=="1"&&document.getElementById("two").value=="3")||(document.getElementById("one").value=="1"&&document.getElementById("two").value=="3")||(document.getElementById("one").value=="3"&&document.getElementById("two").value=="2")||(document.getElementById("one").value=="2"&&document.getElementById("two").value=="1")){
                var x=document.write("User wins because computer's choice is "+ document.getElementById("two").value);
            }
            if((document.getElementById("one").value=="3"&&document.getElementById("two").value=="1")||(document.getElementById("one").value=="3"&&document.getElementById("two").value=="1")||(document.getElementById("one").value=="2"&&document.getElementById("two").value=="3")||(document.getElementById("one").value=="1"&&document.getElementById("two").value=="2")){
                var x=document.write("Computer wins because computer's choice is "+ document.getElementById("two").value);
            }
        }

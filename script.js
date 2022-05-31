// document.getElementById("money-plus").value=20000;
// document.getElementById("money-minus").value=00;
// document.getElementById("balance").value=20000-0;

var arr=[];
function showIncome(){
//document.getElementById("money-plus").innerHTML=20000;
}
function showExpenses(){
//document.getElementById("money-minus").innerHTML=20000;
    }



function check(){
    // alert("Clicked");
    

    var text=document.getElementById("text").value;
    document.getElementById("text").value='';
    var amount=Number(document.getElementById("amount").value);
    document.getElementById("amount").value='';

    var Income=Number(document.getElementById("money-plus").innerHTML);
    var expenses=Number(document.getElementById("money-minus").innerHTML);

   

    // console.log(text,amount);
    if(amount>0){
        Income+=amount;
       // alert(Income);


    }
    else{
        var amnt=-amount;
        expenses+=amnt;


    }
    arr.push(text);
    arr.push(amount);
    var apnd='';
    for(var i=0;i<arr.length;i+=2){
        apnd+='<li class="minus">'+arr[i]+' <span>'+arr[i+1]+' </span><button class="delete-btn" id="'+arr[i]+'" onclick="deleteB(this.id)">x</button></li>'; 

    }
    //var apnd='<li class="minus">'+text+' <span>'+amount+' </span><button class="delete-btn">x</button></li>'; 
    document.getElementById('list').innerHTML=apnd;


    document.getElementById("money-plus").innerHTML=Income;
    document.getElementById("money-minus").innerHTML=expenses;
    document.getElementById("balance").innerHTML=Income-expenses;
 
  showIncome();
  showExpenses();

}

// var elements= document.getElementsByName("delete-btn");
// elements.forEach(el =>
//     function(){
//         el.addEventListener("click",function(){
//             alert(this.id);

//         });

//     });

function deleteB(o){
   for(var i=0;i<arr.length;i+=2){
       if(arr[i]==o)
          arr.splice(i,2);
   }
   var apnd='';
   for(var i=0;i<arr.length;i+=2){

       apnd+='<li class="minus">'+arr[i]+' <span>'+arr[i+1]+' </span><button class="delete-btn" id="'+arr[i]+'" onclick="deleteB(this.id)">x</button></li>'; 

   }
   //var apnd='<li class="minus">'+text+' <span>'+amount+' </span><button class="delete-btn">x</button></li>'; 
   document.getElementById('list').innerHTML=apnd;
}
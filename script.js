const result = document.getElementById("screen") ;


const btn = document.querySelectorAll('.btn, .op , .op1, .op2, .btn1 ');


btn.forEach((curr)=>{
     console.log(curr);

curr.addEventListener("click", function() {
    console.log(curr.innerText);
    result.value = result.value + curr.innerText;
});
}
);

function calculate(){
    
    let expression = result.value ;
     let a ;
    try{
        a = eval(expression);
        console.log(a);
        result.value = a ;
    }
    catch(error)
    {
        alert("Invalid");
    
        
    }
}

function allClear()
{
    result.value = "" ;
}

function delLastChar() {
    result.value = result.value.slice( 0 , -1);

}



 
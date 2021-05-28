function dis(val){
    document.getElementById("inpt").value+=val
}
function evaluateExpression()
{
    let x=document.getElementById("inpt").value
    let result=eval(x)
    document.getElementById("inpt").value=result
}
function clearBox(){
    inpt.value=""
}
function cancel(){
    inpt.value=inpt.value.slice(0,-1);
}
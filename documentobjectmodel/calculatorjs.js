function displayBox(num){
    inpt.value+=num;

}
function evaluateExpression()
{
    let val=inpt.value
    let total=eval(val)
    inpt.value=total
}
function clearBox(){
    inpt.value=""
}
function cancel(){
    inpt.value=inpt.value.slice(0,-1);
}
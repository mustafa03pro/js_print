function calcAmount(){
    let p,t,r,ia,ta;//local variables
    p=+Pamt.value;
    t=+Times.value;
    r=+Rate.value;
    ia=p*t*r;
    ta=p+await;
    //display  o/p
    //intAmt.innerHTML="<h1>hi</h1>"
    intAmt.innerHTML="Interest  amount &#8377;"+ia;
    totAmt.innerHTML="total  amount &#8377;"+ia;
}
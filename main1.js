/*global console, alert*/
/*
    start with letters, Underscore, $
    var = JavaScript Variable keyword
    myPrice = Variable Name
    ( = ) = Assignment Operator
    100 = Variable value
    */

    var mainPrice = 450,
    mySmallDiscount = 50,
    myMediumDiscount = 100,
    myBigDiscount = 250;
document.getElementById("price").innerHTML = mainPrice;
document.getElementById("product1").innerHTML = mainPrice - mySmallDiscount; // 450 - 50 = 400
document.getElementById("product2").innerHTML = mainPrice - myMediumDiscount; //450 - 100 = 300
document.getElementById("product3").innerHTML = mainPrice - myBigDiscount; //450 - 250 = 200
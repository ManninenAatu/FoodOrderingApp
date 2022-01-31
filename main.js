

let shoppinCart = []
let ordersArray = [];
let shoppinCartPrice = [];
var sum="";



$(function(){



   
   //AJAX CAll
    $.ajax({
       url:"foodlist.json",
       method:"GET",
       success:function(result){
           
           print_catalog(result);
           
           
       },

       

       
   });

   



   // JSON PRINT
        function print_catalog(result){
    

    var catalog = "<table class='table'> <tr> <th scope='col'>Meal</th><th scope='col'>Info</th><th scope='col'>Price</th><th scope='col'>Add</th></tr> ";
    
    

    for(let  i = 0;i < result.length;i++){
        catalog += "<tr><td>" + result[i].Meal + "</td>";
        catalog += "<td> <button class='tiedot'  ' id='" +"Main dish:" +result[i].Dish + "/" +"Special diet:" +result[i].Allergic + 
        "'>Info</button></td>"
        catalog += "<td>" + result[i].Price+"€" + "</td>";
        catalog += "<td><button class='confirmButton' value= '" + result[i].Meal +" "+result[i].Price + "' id='"+ result[i].Meal +   
         "'>Add</button></td></tr>";
         
        
    }


    catalog += "</table">
    $("#table").html(catalog);

    


   
   
  
}  



//FIltters
//All

$("#filtter").click(function(){
    $.ajax({
        url:"foodlist.json",
        success:function(result){
            print_catalog(result);
        }
    });

});


 //MEAT
$("#Meat").click(function(){
    $.ajax({
        url:"foodlist.json",
        success:function(result){
            meat(result);
        }
    });
    
    
});

function meat(result){
    var catalog = "<table class='table'>  <th scope='col'>Meal</th><th scope='col'>Info</th><th scope='col'>Price</th><th scope='col'>Add</th></tr> ";

    for(let  i = 0;i < result.length;i++){
        if(result[i].Dish=="Meat"){
            catalog += "<tr><td>" + result[i].Meal + "</td>";
            catalog += "<td> <button class='tiedot'  ' id='" +"Main dish:" +result[i].Dish + "/" +"Special diet:" +result[i].Allergic + 
            "'>Info</button></td>"
            catalog += "<td>" + result[i].Price+"€" + "</td>";
            catalog += "<td><button class='confirmButton' value= '"+result[i].Meal+ " " +result[i].Price + "' id='" + result[i].Meal+  
            "'>Add</button></td></tr>";
        
        }
       
        
    }
    catalog += "</table">
        $("#table").html(catalog);
}


//FISH

$("#Fish").click(function(){

    $.ajax({
        url:"foodlist.json",
        success:function(result){
            fish(result);
        }
    });
});

        function fish(result){
    var catalog = "<table class='table'>  <th scope='col'>Meal</th><th scope='col'>Info</th><th scope='col'>Price</th><th scope='col'>Add</th></tr> ";

    for(let  i = 0;i < result.length;i++){
        if(result[i].Dish=="Fish"){
            catalog += "<tr><td>" + result[i].Meal + "</td>";
            catalog += "<td> <button class='tiedot'  ' id='" +"Main dish:" +result[i].Dish + "/" +"Special diet:" +result[i].Allergic + 
            "'>Info</button></td>"
            catalog += "<td>" + result[i].Price+"€" + "</td>";
            catalog += "<td><button class='confirmButton' value= '"+result[i].Meal+ " " +result[i].Price + "' id='" + result[i].Meal+  
            "'>Add</button></td></tr>";
        
        }
       
        
    }
    catalog += "</table">
        $("#table").html(catalog);
}

//CHICKEN

$("#Chicken").click(function(){

    $.ajax({
        url:"foodlist.json",
        success:function(result){
            chicken(result);
        }
    });
});

        function chicken(result){
    var catalog = "<table class='table'>  <th scope='col'>Meal</th><th scope='col'>Info</th><th scope='col'>Price</th><th scope='col'>Add</th></tr> ";

    for(let  i = 0;i < result.length;i++){
        if(result[i].Dish=="Chicken"){
            catalog += "<tr><td>" + result[i].Meal + "</td>";
            catalog += "<td> <button class='tiedot'  ' id='" +"Main dish:" +result[i].Dish + "/" +"Special diet:" +result[i].Allergic + 
            "'>Info</button></td>"
            catalog += "<td>" + result[i].Price+"€" + "</td>";
            catalog += "<td><button class='confirmButton' value= '"+result[i].Meal+ " " +result[i].Price + "' id='" + result[i].Meal+  
            "'>Add</button></td></tr>";
        
        }
       
        
    }
    catalog += "</table">
        $("#table").html(catalog);
}

//VEGE


$("#Vegetable").click(function(){

    $.ajax({
        url:"foodlist.json",
        success:function(result){
            vege(result);
        }
    });
});

        function vege(result){
    var catalog = "<table class='table'>  <th scope='col'>Meal</th><th scope='col'>Info</th><th scope='col'>Price</th><th scope='col'>Add</th></tr> ";

    for(let  i = 0;i < result.length;i++){
        if(result[i].Dish=="Vegetable"){
            catalog += "<tr><td>" + result[i].Meal + "</td>";
            catalog += "<td> <button class='tiedot'  ' id='" +"Main dish:" +result[i].Dish + "/" +"Special diet:" +result[i].Allergic + 
            "'>Info</button></td>"
            catalog += "<td>" + result[i].Price+"€" + "</td>";
            catalog += "<td><button class='confirmButton' value= '"+result[i].Meal+ " " +result[i].Price + "' id='" + result[i].Meal+  
            "'>Add</button></td></tr>";
        
        }
       
        
    }
    catalog += "</table">
        $("#table").html(catalog);
}

//LACTOSEFREE

$("#LactoseFree").click(function(){

    $.ajax({
        url:"foodlist.json",
        success:function(result){
            lactosefree(result);
        }
    });
});

        function lactosefree(result){
    var catalog = "<table class='table'>  <th scope='col'>Meal</th><th scope='col'>Info</th><th scope='col'>Price</th><th scope='col'>Add</th></tr> ";

    for(let  i = 0;i < result.length;i++){
        if(result[i].Allergic=="LactoseFree"){
            catalog += "<tr><td>" + result[i].Meal + "</td>";
            catalog += "<td> <button class='tiedot'  ' id='" +"Main dish:" +result[i].Dish + "/" +"Special diet:" +result[i].Allergic + 
            "'>Info</button></td>"
            catalog += "<td>" + result[i].Price+"€" + "</td>";
            catalog += "<td><button class='confirmButton' value= '"+result[i].Meal+ " " +result[i].Price + "' id='" + result[i].Meal+  
            "'>Add</button></td></tr>";
        
        }
       
        
    }
    catalog += "</table">
        $("#table").html(catalog);
}

//GLUTENFREE

$("#GlutenFree").click(function(){

    $.ajax({
        url:"foodlist.json",
        success:function(result){
            glutenfree(result);
        }
    });
});

        function glutenfree(result){
    var catalog = "<table class='table'>  <th scope='col'>Meal</th><th scope='col'>Info</th><th scope='col'>Price</th><th scope='col'>Add</th></tr> ";

    for(let  i = 0;i < result.length;i++){
        if(result[i].Allergic=="GlutenFree"){
            catalog += "<tr><td>" + result[i].Meal + "</td>";
            catalog += "<td> <button class='tiedot'  ' id='" +"Main dish:" +result[i].Dish + "/" +"Special diet:" +result[i].Allergic + 
            "'>Info</button></td>"
            catalog += "<td>" + result[i].Price+"€" + "</td>";
            catalog += "<td><button class='confirmButton' value= '"+result[i].Meal+ " " +result[i].Price + "' id='" + result[i].Meal+  
            "'>Add</button></td></tr>";
        
        }
       
        
    }
    catalog += "</table">
        $("#table").html(catalog);
}



 //shoppinCart ADD
    
        $("#table").on("click",".confirmButton",function(result){
            let tuote = $(this).attr("id");            
                let tuoteHinta = $(this).attr("value")+"€";
                    result.preventDefault();
                        alert( "Added shoppingcart :" + $(this).attr("id"));
                        
                    
                      
                      if(shoppinCart.length<7){ 
                          shoppinCart.push(tuote)
                          shoppinCartPrice.push(tuoteHinta);
        
                         
                        }
                        else{
                            alert("You can only choose 7 meals.");
                        }
        
                   
             });
        

    
 
     
//shoppinCart WATCH

$("#sCart").click(function(){

    shoppinCartPrice.toString;
    $("#printarea1").html(shoppinCartPrice.join("<br>"));
});


//DISH INFO

$("#table").on("click",".tiedot",function(){
    var raakaAine = ($(this).attr("id"));
    alert(raakaAine);
});


    //CONFIRM BUTTON
 $("#confirmButton").click(function(result){


    localStorage.setItem("ruoka", JSON.stringify(shoppinCart));
    
    if(shoppinCart.length<1){
        alert("Choose at least one meal");
       
    }
     
    else {
    window.location.href="forms.html";
    }
    

    
    });
    


 


$("#returnButton").click(function(){
    
        localStorage.removeItem("ruoka");
  
})
//CANCEL
$("#returnButton1").click(function(){
    if(localStorage.removeItem("lomake")==null){
        window.location.href="frontpage.html";
    };
        

})
});
let orders =JSON.parse(localStorage.getItem("ruoka"));
//MODAALI
$("#modalButton").click(function(){
        //INPUTIT
             let orders =JSON.parse(localStorage.getItem("ruoka"));
             let firstName=$("#firstName").val();
             let lastName=$("#lastName").val();
             let email=$("#email").val();
             let phoneNumber=$("#phoneNumber").val();
             let address=$("#address").val();
             let postalCode=$("#postalCode").val();
             let city=$("#city").val();
             let billingAddress=$("#billingAddress").val();
             let bPostalCode=$("#billingPostalCode").val();
             let bCity=$("#billingCity").val();


           
        
                
            
        // MODAL ACCEPT ORDER
        $("#saveModal").click(function(){
            //WHOLE ORDER
            let customerObject= {
                orders: JSON.parse(localStorage.getItem("ruoka")),
                firstName:$("#firstName").val(),
                lastName:$("#lastName").val(),
                email:$("#sposti").val(),
                phoneNumber:$("#puhelin").val(),
                address:$("#address").val(),
                postalCode:$("#postalCode").val(),
                city:$("#city").val(),
                billingAddress:$("#billingAddress").val(),
                bPostalCode:$("#billingPostalCode").val(),
                bCity:$("#billingCity").val(),
                
        }

       
        // LOCAL STORAGE-->
        ordersArray.push(customerObject);
        let orderJson = JSON.stringify(ordersArray);
        localStorage.setItem("lomake",orderJson);
        
        console.log(orderJson);

        //END SUM

        

        
        $("#exampleModal").modal('hide');
               
        });

       

        // PRINT MODAL
        $("#printArea").html("<h4>Delivery Address</h4>"+"<br/>"+"Firstname:" +firstName+"<br/>"
        + "Lastname:"+lastName+"<br/>"+"Email:"+email+"<br/>"+"Phone number:"+phoneNumber+"<br/>"+
        "Address:"+address+"<br/>"+"Postal code:"+postalCode+"<br/>"+"City:"+city+
        "<h4>Billing Address</h4>"+"<br/>"+"Street adress:"+billingAddress+"<br/>"+"Postal code:"+bPostalCode+
        "<br/>"+"City:"+bCity+"<br/>"+"<h4>Meals</h4>"+"<br/>"+orders+"<br/>" + "<h4>End price</h4>");


        

       

       
    });    
    //RETURN FRONT PAGE
    $("#confirmOrderButton").click(function(){
        
        alert("Thank you for ordering!");
       
        window.location.href="frontpage.html";
        
    })

    //PRINT ORDERS
        function printOrder(){

        if(localStorage.getItem("lomake") != null){
            let ordersJSON = localStorage.getItem("lomake");
            ordersArray = JSON.parse(ordersJSON);
    
            if(ordersArray == null){
                ordersArray= [];
            }
            let tulosta = "<table class='table'>  <th scope='col'>Firstname</th><th scope='col'>Lastname</th><th scope='col'>Email</th><th scope='col'>Billing address</th><th scope='col'>Billing postal code</th><th scope='col'>Billing city</th><th scope='col'>Delivery Address</th><th scope='col'>Meals</th><tr> "; 
            
            console.log(ordersJSON);
            for(let i = 0; i < ordersArray.length;i++){
                 
            
                tulosta += "<tr><td>"+ordersArray[i].firstName+"</td>"+"<td>"+ ordersArray[i].lastName+"</td>"+"<td>"+ordersArray[i].email+"</td>"+"<br/>"+"<td>"+ordersArray[i].billingAddress+"</td>"+"<td>"+ ordersArray[i].bPostalCode+"</td>"+"<td>"+ordersArray[i].bCity +"</td>"+"<td>"+ordersArray[i].address +"</td>"+"<td>"+orders+"</td></tr>";
                }
                tulosta += "</table>"
                
                $("#printArea").html(tulosta);
           
        }
        
    }

    
  
  

    
 
 



   

    

    


   


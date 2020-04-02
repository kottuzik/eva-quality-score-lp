$(document).ready(function(){
  $(".second-price").hide();
  $(".third-price").hide();

  $("#btn1").click(function(){
    $("#btn1").addClass("active");
    $("#btn2").removeClass("active");
    $("#btn3").removeClass("active");

    $(".first-price").show();
    $(".second-price").hide();
    $(".third-price").hide();
  });

  $("#btn2").click(function(){
    $("#btn1").removeClass("active");
    $("#btn2").addClass("active");
    $("#btn3").removeClass("active");

    $(".first-price").hide()
    $(".second-price").show();
    $(".third-price").hide();
  });

  $("#btn3").click(function(){
    $("#btn1").removeClass("active");
    $("#btn2").removeClass("active");
    $("#btn3").addClass("active");

    $(".first-price").hide()
    $(".second-price").hide();
    $(".third-price").show();
  });
});
const firstPriceCard = () =>{
  let regularPriceValue = parseFloat(document.getElementById("regularPrice1").innerText);
  let discountPriceValue = parseFloat(document.getElementById("todaysPrice1").innerText);

  const instantSavings = () =>{
    let  instantSavings = regularPriceValue - discountPriceValue;
    document.getElementById("price1Instant").innerHTML = instantSavings;
  }

  const Discount = () =>{
    let discPercentage = ((discountPriceValue / regularPriceValue - 1) * 100) * (-1)
    document.getElementById("discount1").innerHTML = parseInt(discPercentage);
  }

  instantSavings();
  Discount();
}

const secondPriceCard = () =>{
  let regularPriceValue = parseFloat(document.getElementById("regularPrice2").innerText);
  let discountPriceValue = parseFloat(document.getElementById("todaysPrice2").innerText);

  const instantSavings = () =>{
    let  instantSavings = regularPriceValue - discountPriceValue;
    document.getElementById("price2Instant").innerHTML = instantSavings;
  }
  
  const Discount = () =>{
    let discPercentage = ((discountPriceValue / regularPriceValue - 1) * 100) * (-1)
    document.getElementById("discount2").innerHTML = parseInt(discPercentage);
  }

  instantSavings();
  Discount();
}

const thirdPriceCard = () =>{
  let regularPriceValue = parseFloat(document.getElementById("regularPrice3").innerText);
  let discountPriceValue = parseFloat(document.getElementById("todaysPrice3").innerText);

  const instantSavings = () =>{
    let  instantSavings = regularPriceValue - discountPriceValue;
    document.getElementById("price3Instant").innerHTML = instantSavings;
  }
  
  const Discount = () =>{
    let discPercentage = ((discountPriceValue / regularPriceValue - 1) * 100) * (-1)
    document.getElementById("discount3").innerHTML = parseInt(discPercentage);
  }

  instantSavings();
  Discount();
}

firstPriceCard();
secondPriceCard();
thirdPriceCard();
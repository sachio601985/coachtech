function tomato(price, func){
  const name = 'トマト';
  func(name, price); //price(name,price);
}

const price = function(name, price){ //price(name,price)
  console.log(name + ' の値段は ' + price + ' 円です。');
}

tomato(100, price);
tomato(500, price);



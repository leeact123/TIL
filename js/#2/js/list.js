var products = [
    { id : 0, price : 70000, title : 'Blossom Dress' },
    { id : 1, price : 50000, title : 'Springfield Shirt' },
    { id : 2, price : 60000, title : 'Black Monastery' }
  ];

  const cardTitle = document.querySelectorAll(".card-body h5");
  const cardPrice = document.querySelectorAll(".card-body p");

  for(i=0; i < products.length; i++) {
      
    cardTitle[i].innerHTML = products[i].title;
    cardPrice[i].innerHTML = `가격 : ${products[i].price}`;

  }

  
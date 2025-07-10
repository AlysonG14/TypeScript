fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((res) => {
    const cardContainer = document.getElementById("card-container");

    res.products.map((product) => {
      const card = document.createElement("div");
      card.className = "card";
      cardContainer.append(card);

      const image = document.createElement("img");
      image.src = product.images[0];
      image.alt = "Imagem";
      card.append(image);

      const title = document.createElement("h1");
      title.innerHTML = product.title;
      card.append(title);

      const price = document.createElement("h3");
      price.innerHTML = product.price;
      card.append(price);

      const addLink = document.createElement("a");
      addLink.innerHTML = product.addButton;
      card.append(addLink);

      addLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (confirm("Are you sure?")) {
          window.location = this.href;
        }
      });

      addLink.setAttribute("href", "product.html");
      addLink.textContent = "Informations";
    });
  });

const element = document.body.childNodes;
console.log(element);

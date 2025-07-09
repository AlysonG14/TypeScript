fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {

    const product = data.products[0]

    const cardContainerProduct = document.getElementById('card_containerProduct')

    const card = document.createElement('div')
    card.className = "card"

    const image = document.createElement('img')
    image.src = product.images[0]
    image.alt = "Imagem"
    card.append(image)

    const description = document.createElement('p')
    description.innerHTML = product.description
    card.append(description)


    cardContainerProduct.append(card)



  })
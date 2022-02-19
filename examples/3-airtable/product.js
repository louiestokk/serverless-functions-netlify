const result = document.querySelector(".result");
const fetchProduct = async () => {
  result.innerHTML = `<h2>loading...</h2>`;
  try {
    const id = window.location.search;
    const { data } = await axios(`/api/3-product${id}`);
    console.log(data);
    result.innerHTML = `  <article class="product">
        <img class="product-img"
      src=${data.fields.images[0].url}
      alt=${data.fields.Name}
        />
        <div class="product-info">
          <h5 class="title">utopia sofa</h5>
          <h5 class="price">$${data.fields.price}</h5>
          <p class="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, iusto. Corrupti excepturi quod in veniam laborum? Animi, labore excepturi nesciunt magni illum optio, sed qui deserunt ex amet adipisci cumque?</p>
        </div>
      </article>`;
  } catch (error) {
    result.innerHTML = error.response.data;
  }
};

fetchProduct();

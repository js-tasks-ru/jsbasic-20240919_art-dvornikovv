import createElement from "../../assets/lib/create-element.js";
import ProductCard from "../../6-module/2-task/index.js";

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {};

    this.elem = createElement(`
      <div class="products-grid">
        <div class="products-grid__inner">
        </div>
      </div>
    `);

    this.render();
  }

  render() {
    const inner = this.elem.querySelector(".products-grid__inner");
    inner.innerHTML = "";

    const filteredProducts = this.products.filter((product) => {
      return (
        (!this.filters.noNuts || !product.nuts) &&
        (!this.filters.vegeterianOnly || product.vegeterian) &&
        (!this.filters.maxSpiciness ||
          product.spiciness <= this.filters.maxSpiciness) &&
        (!this.filters.category || product.category === this.filters.category)
      );
    });

    filteredProducts.forEach((product) => {
      const card = new ProductCard(product);
      inner.append(card.elem);
    });
  }

  updateFilter(filters) {
    Object.assign(this.filters, filters);
    this.render();
  }
}

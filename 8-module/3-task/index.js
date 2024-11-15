export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (!product) return;

    const cartItemIndex = this.cartItems.findIndex(
      (item) => item.product.id === product.id
    );

    if (cartItemIndex === -1) {
      this.cartItems.push({ product, count: 1 });
    } else {
      this.cartItems[cartItemIndex].count += 1;
    }

    const cartItem =
      this.cartItems[
        cartItemIndex !== -1 ? cartItemIndex : this.cartItems.length - 1
      ];
    this.onProductUpdate(cartItem);
  }

  updateProductCount(productId, amount) {
    const cartItemIndex = this.cartItems.findIndex(
      (item) => item.product.id === productId
    );

    if (cartItemIndex === -1) return;

    this.cartItems[cartItemIndex].count += amount;

    if (this.cartItems[cartItemIndex].count <= 0) {
      this.cartItems.splice(cartItemIndex, 1);
    }

    const cartItem = this.cartItems[cartItemIndex];
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((total, item) => total + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce(
      (total, item) => total + item.product.price * item.count,
      0
    );
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

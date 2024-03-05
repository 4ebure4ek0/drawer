<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Картофель", price: 20 },
        { id: 2, name: "Сок", price: 100 },
        { id: 3, name: "Мясо", price: 500 },
        { id: 4, name: "Бананы", price: 50 },
      ],
      productsInDrawer: new Set(),
      lastId: 0,
    };
  },
  methods: {
    addProduct() {
      this.productsInDrawer.add({
        id: this.lastId++,
        product: this.products[0],
        quantity: 1,
      });
    }
  },
  computed: {
    totalPrice() {
      return [...this.productsInDrawer].reduce(
        (prev, cur) => prev + cur.product.price * cur.quantity,
        0
      );
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="drawer">
      <h1>Корзина</h1>
    <button @click="addProduct">Добавить</button>
    <table>
      <thead>
        <tr>
          <th>Товар</th>
          <th>Стоимость</th>
          <th>Количество</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="drawerProduct in productsInDrawer" :key="drawerProduct.id">
          <td>
            <select v-model="drawerProduct.product">
              <option v-for="item in products" :key="item.name" :value="item">
                {{ item.name }}
              </option>
            </select>
          </td>
          <td>
            {{ drawerProduct.product.price }}
          </td>
          <td>
            <input type="number" v-model.number="drawerProduct.quantity" />
          </td>
          <td>
            <button
              @click="productsInDrawer.delete(drawerProduct)"
            >
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td>Итого:</td>
          <td>{{ totalPrice }}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>
    </div>
  </div>
</template>

<style scoped>
table {
  border: 1px solid #343434;
}
td {
  border: 1px solid #343434;
}
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}
.drawer{
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 600px;
}
</style>

/*
  TAREFA (Aluno 3 - Produtos)
  - Adicione 2 produtos novos com name, price e stock.
  - Inclua um campo "category" em todos os produtos.
  - Atualize um produto existente com novo stock.
  - Mantenha price e stock como strings.
*/

window.AppData = window.AppData || {};

window.AppData.products = [
  {
    name: "Caderno A5",
    price: "R$ 24,90",
    stock: "32 un",
  },
  {
    name: "Caneta Brush",
    price: "R$ 12,50",
    stock: "75 un",
  },
  {
    name: "Planner 2026",
    price: "R$ 58,00",
    stock: "18 un",
  },
];

function renderList(targetId, items, template) {
  var target = document.getElementById(targetId);
  if (!target) {
    return;
  }

  target.innerHTML = items.map(template).join("");
}

renderList("users", window.AppData.users || [], function (user) {
  return (
    "<li>" +
    '<span class="label">Nome</span>' +
    '<div class="value">' +
    user.name +
    "</div>" +
    '<span class="label">Funcao</span>' +
    '<div class="value">' +
    user.role +
    "</div>" +
    '<span class="label">Cidade</span>' +
    '<div class="value">' +
    user.city +
    "</div>" +
    "</li>"
  );
});

renderList("products", window.AppData.products || [], function (product) {
  return (
    "<li>" +
    '<span class="label">Produto</span>' +
    '<div class="value">' +
    product.name +
    "</div>" +
    '<span class="label">Preco</span>' +
    '<div class="value">' +
    product.price +
    "</div>" +
    '<span class="label">Estoque</span>' +
    '<div class="value">' +
    product.stock +
    "</div>" +
    "</li>"
  );
});

renderList("orders", window.AppData.orders || [], function (order) {
  return (
    "<li>" +
    '<div class="pill">' +
    order.id +
    "</div>" +
    '<span class="label">Cliente</span>' +
    '<div class="value">' +
    order.customer +
    "</div>" +
    '<span class="label">Total</span>' +
    '<div class="value">' +
    order.total +
    "</div>" +
    '<span class="label">Status</span>' +
    '<div class="value">' +
    order.status +
    "</div>" +
    "</li>"
  );
});

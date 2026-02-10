/*
  TAREFA (Aluno 1 - Pedidos)
  - Adicione 2 pedidos novos com id, customer, total e status.
  - Inclua um campo "delivery" (ex: "Retirada" ou "Entrega") em cada pedido.
  - Atualize um pedido existente para status "Cancelado".
  - Mantenha os valores como strings para facilitar a edicao.
*/

window.AppData = window.AppData || {};

window.AppData.orders = [
  {
    id: "P-1001",
    customer: "Ana Souza",
    total: "R$ 128,00",
    status: "Pago",
  },
  {
    id: "P-1002",
    customer: "Bruno Lima",
    total: "R$ 59,90",
    status: "Pendente",
  },
  {
    id: "P-1003",
    customer: "Carlos Medeiros",
    total: "R$ 212,40",
    status: "Enviado",
  },
];

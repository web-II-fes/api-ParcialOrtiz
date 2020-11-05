import { Schema, model } from "mongoose";

const schemaPedido = new Schema({
  nombreCliente: { type: String, upercase: true },
  direccionEntrega: { type: String, upercase: true },
  pedido: { type: String, upercase: true },
  fechaEntrega: Date
});

export let pedidoSchema = model("schemaPedido", schemaPedido, "pedidos");
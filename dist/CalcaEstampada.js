"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcaEstampada = void 0;
/**
 * Nesta implementação, temos a classe CalcaEstampada, que também é criada com base na CalcaBase.
    As diferenças da CalcaEstampada e da CalcaJeans são o nome da classe, o valor atribuído ao atributo
    tipo e a informação passada dentro do println.
 */
const CalcaBase_1 = require("./CalcaBase");
class CalcaEstampada extends CalcaBase_1.CalcaBase {
    constructor() {
        super();
        this.tipo = "Calça Estampada";
    }
    criarmodelo() {
        console.log("Calça Estampada criada com sucesso!");
    }
}
exports.CalcaEstampada = CalcaEstampada;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcaJeans = void 0;
/**
 * Aqui, temos a classe CalcaJeans, que é criada com base na CalcaBase, sendo sua classe filha.
 * Por isso, ela precisa implementar todos os métodos abstratos presentes na  classe CalcaBase,
 * como o método criarmodelo().
 * O atributo tipo, que existe na classe CalcaBase, também é utilizado aqui.
 */
const CalcaBase_1 = require("./CalcaBase");
class CalcaJeans extends CalcaBase_1.CalcaBase {
    constructor() {
        super();
        this.tipo = "Calça Jeans";
    }
    criarmodelo() {
        console.log("Calça Jeans criada com sucesso!");
    }
}
exports.CalcaJeans = CalcaJeans;

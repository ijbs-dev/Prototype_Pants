"use strict";
/**
 * O método carregarCache() é responsável por criar diferentes calças.
 * Com ele, criamos um objeto diferente para cada modelo de calça disponível.
 * Aqui, temos dois modelos de calça.
 * Com isso, são criados dois objetos iniciais que serão clonados depois.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcaModelos = void 0;
const CalcaJeans_1 = require("./CalcaJeans");
const CalcaEstampada_1 = require("./CalcaEstampada");
class CalcaModelos {
    static getCalcaBase(calcaBaseId) {
        const cache = CalcaModelos.calcamodelos[calcaBaseId];
        return cache ? cache.clone() : null;
    }
    static carregarCache() {
        const calcaJeans = new CalcaJeans_1.CalcaJeans();
        calcaJeans.setId("Jeans");
        CalcaModelos.calcamodelos[calcaJeans.getId()] = calcaJeans;
        const calcaEstampada = new CalcaEstampada_1.CalcaEstampada();
        calcaEstampada.setId("Estampada");
        CalcaModelos.calcamodelos[calcaEstampada.getId()] = calcaEstampada;
    }
}
exports.CalcaModelos = CalcaModelos;
CalcaModelos.calcamodelos = {};

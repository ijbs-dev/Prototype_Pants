"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcaBase = void 0;
class CalcaBase {
    constructor() {
        this.id = "";
        this.tipo = "";
    }
    getTipo() {
        return this.tipo;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    clone() {
        try {
            // Usando o construtor para criar uma nova instância
            const clone = new this.constructor();
            // Copiando propriedades
            Object.assign(clone, this);
            return clone;
        }
        catch (e) {
            console.log("Erro ao clonar objeto: " + e);
            throw e;
        }
    }
}
exports.CalcaBase = CalcaBase;

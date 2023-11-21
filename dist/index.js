"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const CalcaModelos_1 = require("./CalcaModelos");
const app = (0, express_1.default)();
/* function main() {
    try {
      CalcaModelos.carregarCache();
  
      const calcaClonada1 = CalcaModelos.getCalcaBase("Jeans") as CalcaBase;
      console.log("Calça Jeans Clonada -> " + calcaClonada1.getTipo());
  
      const calcaClonada2 = CalcaModelos.getCalcaBase("Estampada") as CalcaBase;
      console.log("Calça Estampada Clonada -> " + calcaClonada2.getTipo());
    } catch (error) {
      console.error("Erro ao executar main():", error);
    }
  } */
app.get('/api/v1', (req, res) => {
    try {
        // Criando e clonando objetos
        const calcaClonada1 = CalcaModelos_1.CalcaModelos.getCalcaBase("Jeans");
        const calcaClonada2 = CalcaModelos_1.CalcaModelos.getCalcaBase("Estampada");
        if (calcaClonada1 && calcaClonada2) {
            // Enviando os dados clonados como resposta à requisição
            res.json({
                calcaJeans: {
                    tipo: calcaClonada1.getTipo(),
                    id: calcaClonada1.getId(),
                },
                calcaEstampada: {
                    tipo: calcaClonada2.getTipo(),
                    id: calcaClonada2.getId(),
                },
            });
        }
        else {
            // Se não conseguirmos clonar as calças, enviamos uma resposta indicando o problema.
            res.status(500).json({ error1: 'Erro ao clonar calças.' });
        }
    }
    catch (error) {
        console.error("Erro ao processar requisição:", error);
        res.status(500).json({ error: 'Erro interno no servidor.' });
    }
});
// GET http://localhost:3000/api/v1
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
/**
 * Aqui, temos a função main(), que é responsável por criar os objetos e cloná-los.
 */

import express from 'express';
import { CalcaBase } from './CalcaBase';
import { CalcaModelos } from './CalcaModelos';

const app = express();
// GET http://localhost:3000/api/v1
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });


  app.get('/api/v1', (req, res) => {
    try {
      console.log("Chamando a rota /api/v1");
      CalcaModelos.carregarCache();
  
      const calcaClonada1 = CalcaModelos.getCalcaBase("Jeans") as CalcaBase;
      const calcaClonada2 = CalcaModelos.getCalcaBase("Estampada") as CalcaBase;
  
      console.log("Calças clonadas:", calcaClonada1, calcaClonada2);
  
      if (calcaClonada1 && calcaClonada2) {
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
      } else {
        res.status(500).json({ error1: 'Erro ao clonar calças.' });
      }
    } catch (error) {
      console.error("Erro ao processar requisição:", error);
      res.status(500).json({ error: 'Erro interno no servidor.' });
    }
  });  



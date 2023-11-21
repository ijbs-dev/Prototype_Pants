/**
 * Nesta implementação, temos a classe CalcaEstampada, que também é criada com base na CalcaBase.
    As diferenças da CalcaEstampada e da CalcaJeans são o nome da classe, o valor atribuído ao atributo
    tipo e a informação passada dentro do println.
 */
    import { CalcaBase } from "./CalcaBase";

    export class CalcaEstampada extends CalcaBase {
        
        constructor() {
            super();
            this.tipo = "Calça Estampada";
        }
    
        public criarmodelo(): void {
            console.log("Calça Estampada criada com sucesso!");
        }
    }
    
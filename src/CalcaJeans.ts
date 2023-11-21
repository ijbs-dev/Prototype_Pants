/**
 * Aqui, temos a classe CalcaJeans, que é criada com base na CalcaBase, sendo sua classe filha. 
 * Por isso, ela precisa implementar todos os métodos abstratos presentes na  classe CalcaBase, 
 * como o método criarmodelo().
 * O atributo tipo, que existe na classe CalcaBase, também é utilizado aqui. 
 */
import { CalcaBase } from "./CalcaBase";

export class CalcaJeans extends CalcaBase {
    
    constructor() {
        super();
        this.tipo = "Calça Jeans";
    }

    public criarmodelo(): void {
        console.log("Calça Jeans criada com sucesso!");
    }
}

/**
 * O método carregarCache() é responsável por criar diferentes calças. 
 * Com ele, criamos um objeto diferente para cada modelo de calça disponível. 
 * Aqui, temos dois modelos de calça.
 * Com isso, são criados dois objetos iniciais que serão clonados depois.
 */

import { CalcaBase } from "./CalcaBase";
import { CalcaJeans } from "./CalcaJeans";
import { CalcaEstampada } from "./CalcaEstampada";

export class CalcaModelos {

    private static calcamodelos: { [key: string]: CalcaBase } = {};

    public static getCalcaBase(calcaBaseId: string): CalcaBase | null {
        const cache = CalcaModelos.calcamodelos[calcaBaseId];
        return cache ? cache.clone() : null;
    }
    
    public static carregarCache(): void {
        try {
            const calcaJeans = new CalcaJeans();
            calcaJeans.setId("Jeans");
            CalcaModelos.calcamodelos[calcaJeans.getId()] = calcaJeans;
    
            const calcaEstampada = new CalcaEstampada();
            calcaEstampada.setId("Estampada");
            CalcaModelos.calcamodelos[calcaEstampada.getId()] = calcaEstampada;
        } catch (error) {
            console.error("Erro ao carregar cache:", error);
        }
    }
    
}

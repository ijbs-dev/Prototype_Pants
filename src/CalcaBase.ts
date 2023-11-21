/**
 * Primeiro, precisamos desenvolver nossa classe base. No nosso caso, será a CalcaBase.
 * Ela implementa a interface Cloneable para utilizar o método clone(), que está nessa interface.
 * Para criar o clone de um objeto, é obrigatório utilizar a Cloneable no código.
 */
import { Cloneable } from "./Cloneable";

export abstract class CalcaBase implements Cloneable {

    private id: string = "";
    protected tipo: string = "";

    public abstract criarmodelo(): void;

    public getTipo(): string { 
        return this.tipo; 
    }

    public getId(): string { 
        return this.id; 
    }

    public setId(id: string): void { 
        this.id = id; 
    }

    public clone(): CalcaBase {
        try {
            // Usando o construtor para criar uma nova instância
            const clone = new (this.constructor as any)();
            // Copiando propriedades
            Object.assign(clone, this);
            return clone;
        } catch (e) {
            console.log("Erro ao clonar objeto: " + e);
            throw e;
        }
    }
}

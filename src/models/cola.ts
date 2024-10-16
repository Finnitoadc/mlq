import { Proceso } from "./proceso";

export class Cola {
  tipo: string;
  procesos: Proceso[];
  quantum: number | null;

  constructor(tipo: string, quantum: number | null = null) {
    this.tipo = tipo;
    this.procesos = [];
    this.quantum = quantum;
  }

  agregarProceso(proceso: Proceso): void {
    this.procesos.push(proceso);
  }

  ejecutarRR(quantum: number, tiempoActual: number): number {
    if (this.procesos.length === 0) {
      return tiempoActual;
    }
    let colaAux: Proceso[] = [];
    while (this.procesos.length > 0 || colaAux.length > 0) {
      if (this.procesos.length === 0) {
        [this.procesos, colaAux] = [colaAux, this.procesos];
      }
      const proceso = this.procesos.shift()!;
      if (proceso.responseTime === null) {
        proceso.responseTime = Math.max(0, tiempoActual - proceso.arrivalTime);
      }
      if (proceso.remainingTime > quantum) {
        proceso.remainingTime -= quantum;
        tiempoActual += quantum;
        colaAux.push(proceso);
      } else {
        tiempoActual += proceso.remainingTime;
        proceso.remainingTime = 0;
        proceso.completionTime = tiempoActual;
        proceso.turnaroundTime = proceso.completionTime - proceso.arrivalTime;
        proceso.waitTime = proceso.turnaroundTime - proceso.burstTime;
      }
    }
    return tiempoActual;
  }

  ejecutarFCFS(tiempoActual: number): number {
    if (this.procesos.length === 0) {
      return tiempoActual;
    }
    for (const proceso of this.procesos) {
      if (proceso.responseTime === null) {
        proceso.responseTime = Math.max(0, tiempoActual - proceso.arrivalTime);
      }
      tiempoActual += proceso.burstTime;
      proceso.completionTime = tiempoActual;
      proceso.turnaroundTime = proceso.completionTime - proceso.arrivalTime;
      proceso.waitTime = proceso.turnaroundTime - proceso.burstTime;
    }
    this.procesos = [];
    return tiempoActual;
  }

  ejecutar(tiempoActual: number): number {
    if (this.tipo === "RR") {
      return this.ejecutarRR(this.quantum!, tiempoActual);
    } else if (this.tipo === "FCFS") {
      return this.ejecutarFCFS(tiempoActual);
    }
    return tiempoActual;
  }
}

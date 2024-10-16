import { Cola } from "./models/cola";

export class MLQScheduler {
  colas: Cola[];

  constructor() {
    this.colas = [];
  }

  agregarCola(cola: Cola): void {
    this.colas.push(cola);
  }

  planificar(): void {
    let tiempoActual = 0;
    while (this.colas.some((cola) => cola.procesos.length > 0)) {
      for (const cola of this.colas) {
        tiempoActual = cola.ejecutar(tiempoActual);
      }
    }
  }
}

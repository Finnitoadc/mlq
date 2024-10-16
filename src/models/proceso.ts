export class Proceso {
  etiqueta: string;
  burstTime: number;
  remainingTime: number;
  arrivalTime: number;
  queue: number;
  priority: number;
  waitTime: number;
  completionTime: number;
  responseTime: number | null;
  turnaroundTime: number;

  constructor(
    etiqueta: string,
    burstTime: number,
    arrivalTime: number,
    queue: number,
    priority: number
  ) {
    this.etiqueta = etiqueta;
    this.burstTime = burstTime;
    this.remainingTime = burstTime;
    this.arrivalTime = arrivalTime;
    this.queue = queue;
    this.priority = priority;
    this.waitTime = 0;
    this.completionTime = 0;
    this.responseTime = null;
    this.turnaroundTime = 0;
  }

  toString(): string {
    return `Proceso(${this.etiqueta}, BT=${this.burstTime}, AT=${this.arrivalTime}, Q=${this.queue}, Pr=${this.priority})`;
  }
}

import * as fs from "fs";
import { MLQScheduler } from "./MLQScheduler";
import { Cola } from "./models/cola";
import { leerArchivoEntrada, generarSalida } from "./utils/fileUtils";

(function main() {
  const mlqScheduler = new MLQScheduler();
  //Configuracion
  mlqScheduler.agregarCola(new Cola("RR", 3));
  mlqScheduler.agregarCola(new Cola("RR", 5));
  mlqScheduler.agregarCola(new Cola("FCFS"));

  // Leer todos los archivos de entrada de la carpeta input
  const archivos = fs
    .readdirSync("input")
    .filter((file: string) => file.endsWith(".txt"));

  for (const archivo of archivos) {
    // Leer los procesos desde el archivo
    const procesos = leerArchivoEntrada(`input/${archivo}`);

    // Asignar los procesos
    for (const proceso of procesos) {
      if (proceso.queue === 1) {
        mlqScheduler.colas[0].agregarProceso(proceso);
      } else if (proceso.queue === 2) {
        mlqScheduler.colas[1].agregarProceso(proceso);
      } else if (proceso.queue === 3) {
        mlqScheduler.colas[2].agregarProceso(proceso);
      }
    }

    mlqScheduler.planificar();

    console.table(procesos, [
      "etiqueta",
      "burstTime",
      "arrivalTime",
      "queue",
      "priority",
      "waitTime",
      "completionTime",
      "responseTime",
      "turnaroundTime",
    ]);

    const nombreSalida = `output/salida_${archivo}`;
    generarSalida(procesos, nombreSalida);
  }
})();

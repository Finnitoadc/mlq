import * as fs from "fs";
import { Proceso } from "../models/proceso";

export function leerArchivoEntrada(nombreArchivo: string): Proceso[] {
  const procesos: Proceso[] = [];
  const contenido = fs.readFileSync(nombreArchivo, "utf8");
  const lineas = contenido.split("\n");
  for (const linea of lineas) {
    if (linea.startsWith("#") || linea.trim() === "") {
      continue;
    }
    const datos = linea.split(";");
    const proceso = new Proceso(
      datos[0],
      parseInt(datos[1]),
      parseInt(datos[2]),
      parseInt(datos[3]),
      parseInt(datos[4])
    );
    procesos.push(proceso);
  }
  return procesos;
}

export function generarSalida(procesos: Proceso[], nombreSalida: string): void {
  let contenido = "# etiqueta; BT; AT; Q; Pr; WT; CT; RT; TAT\n";
  for (const proceso of procesos) {
    contenido += `${proceso.etiqueta};${proceso.burstTime};${proceso.arrivalTime};${proceso.queue};${proceso.priority};${proceso.waitTime};${proceso.completionTime};${proceso.responseTime};${proceso.turnaroundTime}\n`;
  }
  fs.writeFileSync(nombreSalida, contenido);
}

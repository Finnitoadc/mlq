# Multi-Level Queue Scheduler (MLQScheduler)

Este proyecto implementa un planificador de colas multinivel (`Multi-Level Queue Scheduler`) con diferentes políticas de planificación, tales como Round Robin (RR) y First Come First Served (FCFS). Este planificador organiza procesos en varias colas de prioridad, cada una con su propia política de planificación, para gestionar la asignación de tiempo de CPU de manera eficiente.

## Cómo Empezar

### Prerrequisitos

Necesitas tener **Node.js** instalado para ejecutar este proyecto. Si no lo tienes, puedes instalarlo desde [Node.js](https://nodejs.org/).

### Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/finnitadc/mlq
   cd mlq_scheduler
   ```

2. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

### Compilar y Ejecutar el Código

El proyecto está escrito en TypeScript y debe ser compilado antes de ejecutarse. Para compilar el código fuente, utiliza el siguiente comando:

```bash
npm run build
```

Esto generará los archivos JavaScript compilados en la carpeta `dist/`.

Después de compilar el código, puedes ejecutar el planificador con el siguiente comando:

```bash
npm start
```

Esto ejecutará el archivo `dist/main.js` y planificará los procesos que se encuentran definidos en los archivos dentro de la carpeta `input`.

### Ejecución en Modo Desarrollo

Si deseas evitar la compilación manual durante el desarrollo, puedes usar el siguiente comando para ejecutar el proyecto directamente con `ts-node`:

```bash
npm run dev
```

Esto ejecutará el archivo `src/main.ts` directamente, permitiéndote ver los cambios de manera más rápida mientras desarrollas.

## Formato de Archivos de Entrada

Los archivos de entrada deben estar ubicados en la carpeta `input/`. Asegúrate de colocar los archivos en esta carpeta antes de ejecutar el planificador.

Los archivos deben tener el siguiente formato:

```
etiqueta;burstTime;arrivalTime;queue;priority
P1;5;0;1;3
P2;3;2;2;1
```

Cada línea representa un proceso, donde:

- `etiqueta`: Identificador del proceso.
- `burstTime`: Tiempo de ejecución requerido.
- `arrivalTime`: Tiempo de llegada del proceso.
- `queue`: Cola a la que pertenece el proceso (1, 2, 3, etc.).
- `priority`: Prioridad del proceso (si aplica).

Asegúrate de seguir este formato para que el planificador pueda procesar correctamente los datos de cada proceso.

## Archivos de Salida

Los resultados de la planificación se guardarán en archivos dentro de la carpeta `output/`. También se mostrará una tabla de los procesos después de la planificación directamente en la consola.

## Ejemplos

Puedes crear múltiples archivos `.txt` dentro de `input/` para probar la planificación en diferentes casos. Cada archivo será procesado automáticamente y se generará una salida correspondiente en `output/`.

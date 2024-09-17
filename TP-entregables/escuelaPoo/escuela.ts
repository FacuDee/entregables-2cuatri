// EJERCICIO DE PRÁCTICA - OBJETOS
// Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
// - Los profesores deben tener un listado de sus alumnos.
// - Cada alumno debe saber su nota e informar si está aprobado o no (es decir, si la nota es mayor que 7).
// - La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.

///////////////////////////////////////////////////

// Clase Alumno

class Alumno {
  nombre: string;
  apellido: string;
  nota: number;

  constructor(nombre: string, apellido: string, nota: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nota = nota;
  }

  estaAprobado(): string {
    if (this.nota >= 7) {
      return "APROBADO/A";
    } else return "Desprobado/a";
  }
}

// Clase Profesor

class Profesor {
  nombre: string;
  apellido: string;
  materia: string;
  alumnos: Alumno[];

  constructor(nombre: string, apellido: string, materia: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.materia = materia;
    this.alumnos = [];
  }

  agregarAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  quitarAlumno(alumno: Alumno): void {
    this.alumnos = this.alumnos.filter((a) => a !== alumno);
  }
}

// Clase Escuela

class Escuela {
  alumnos: Alumno[];
  profesores: Profesor[];

  constructor() {
    this.alumnos = [];
    this.profesores = [];
  }

  matricularAlumno(alumno: Alumno): void {
    this.alumnos.push(alumno);
  }

  expulsarAlumno(alumno: Alumno): void {
    this.alumnos = this.alumnos.filter((a) => a !== alumno);
  }

  contratarProfesor(profesor: Profesor): void {
    this.profesores.push(profesor);
  }

  despedirProfesor(profesor: Profesor): void {
    this.profesores = this.profesores.filter((p) => p !== profesor);
  }
}

// Uso de los objetos

const escuela = new Escuela();

const alumnos = [
  new Alumno("Juan", "Sequeira", 8),
  new Alumno("Ana", "Crevatin", 6),
  new Alumno("Brian", "Panarace", 9),
  new Alumno("Solange", "Catanzaro", 2),
  new Alumno("Pedro", "Salinas", 7),
  new Alumno("Lucía", "Gómez", 10),
  new Alumno("Federico", "López", 5),
  new Alumno("Sofía", "Martínez", 4),
  new Alumno("Andrés", "Pérez", 8),
  new Alumno("Gabriela", "Ortiz", 7),
  new Alumno("Diego", "Rivas", 9),
  new Alumno("María", "Ramírez", 3),
  new Alumno("Ignacio", "Fernández", 6),
  new Alumno("Paula", "Sánchez", 8),
  new Alumno("Rodrigo", "Méndez", 5),
  new Alumno("Camila", "Herrera", 9),
  new Alumno("Santiago", "Silva", 6),
  new Alumno("Elena", "Morales", 8),
  new Alumno("Martín", "Sosa", 7),
  new Alumno("Florencia", "Castro", 10),
];

const profesores = [
  new Profesor("Gustavo", "Zarate", "Matemáticas"),
  new Profesor("Marisa", "Arrieta", "Física"),
  new Profesor("Nélida", "Bodart", "Literatura"),
];

// Matricular alumnos
alumnos.forEach((alumno) => escuela.matricularAlumno(alumno));

// Asignar alumnos al primer profesor
alumnos.forEach((alumno) => profesores[0].agregarAlumno(alumno));

// Contratar profesores
profesores.forEach((profesor) => escuela.contratarProfesor(profesor));

// Imprimir si los alumnos están aprobados o desaprobados
alumnos.forEach((alumno) => {
  console.log(`${alumno.nombre} ${alumno.apellido}: ${alumno.estaAprobado()}`);
});

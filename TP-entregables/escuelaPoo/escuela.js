// EJERCICIO DE PRÁCTICA - OBJETOS
// Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
// - Los profesores deben tener un listado de sus alumnos.
// - Cada alumno debe saber su nota e informar si está aprobado o no (es decir, si la nota es mayor que 7).
// - La escuela debe tener un registro de los alumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos.
///////////////////////////////////////////////////
// Clase Alumno
var Alumno = /** @class */ (function () {
    function Alumno(nombre, apellido, nota) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
    }
    Alumno.prototype.estaAprobado = function () {
        if (this.nota >= 7) {
            return "APROBADO/A";
        }
        else
            return "Desprobado/a";
    };
    return Alumno;
}());
// Clase Profesor
var Profesor = /** @class */ (function () {
    function Profesor(nombre, apellido, materia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.materia = materia;
        this.alumnos = [];
    }
    Profesor.prototype.agregarAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Profesor.prototype.quitarAlumno = function (alumno) {
        this.alumnos = this.alumnos.filter(function (a) { return a !== alumno; });
    };
    return Profesor;
}());
// Clase Escuela
var Escuela = /** @class */ (function () {
    function Escuela() {
        this.alumnos = [];
        this.profesores = [];
    }
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.alumnos.push(alumno);
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        this.alumnos = this.alumnos.filter(function (a) { return a !== alumno; });
    };
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.profesores.push(profesor);
    };
    Escuela.prototype.despedirProfesor = function (profesor) {
        this.profesores = this.profesores.filter(function (p) { return p !== profesor; });
    };
    return Escuela;
}());
// Uso de los objetos
var escuela = new Escuela();
var alumnos = [
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
var profesores = [
    new Profesor("Gustavo", "Zarate", "Matemáticas"),
    new Profesor("Marisa", "Arrieta", "Física"),
    new Profesor("Nélida", "Bodart", "Literatura"),
];
// Matricular alumnos
alumnos.forEach(function (alumno) { return escuela.matricularAlumno(alumno); });
// Asignar alumnos al primer profesor
alumnos.forEach(function (alumno) { return profesores[0].agregarAlumno(alumno); });
// Contratar profesores
profesores.forEach(function (profesor) { return escuela.contratarProfesor(profesor); });
// Imprimir si los alumnos están aprobados o desaprobados
alumnos.forEach(function (alumno) {
    console.log("".concat(alumno.nombre, " ").concat(alumno.apellido, ": ").concat(alumno.estaAprobado()));
});

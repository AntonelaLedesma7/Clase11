//¡Atención, equipo de inteligencia! Hemos recibido un reporte de un importante hackeo en nuestra red de computadoras. Necesitamos su ayuda para encontrar al responsable del ataque y detenerlo antes de que cause más daño. Se sabe que el hacker es parte de una lista de los 10 delincuentes más buscados. Además sabemos que tiene fanatismo por dejar “su marca” en los registros, creemos que se llama Juan o Pedro, y que sus números favoritos son el 3 y el 7. Encuentren al hacker lo más rápido que puedan, el destino de todos está en sus manos.

const suspects = ["Juan", "Santiago", "Luis", "Carlos", "Miguel", "Jorge", "Fernando", "Pedro", "Andrés", "Daniel"];

const markHint = [3, 7];
const primeSuspects = ["Juan", "Pedro"]

const findHacker = (suspects) => {
    let hacker = "FUGITIVE"
    for (let i = 0; i <= suspects.length; i++) {
        if ((suspects[i] === "Juan" || suspects[i] === "Pedro") && (i === 3 || i === 7)) {
            hacker = suspects[i]
            break;
        }
    }
    return hacker
}

const result = findHacker(suspects)
console.log(result)
import minimist from "minimist";

// Parsing des arguments
const args = minimist(process.argv.slice(2))

// Détermination du fichier contenant les variables d'environnement (dev / prod)
const env = ["test"].includes(args['ENV']) ? args['ENV'] : "test"
export default env
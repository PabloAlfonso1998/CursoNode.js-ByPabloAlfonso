function saludar(nombre) {
    return `Hola, ${nombre}`
}

function saludarMundo() {
    return 'Hola Mundo';
}

module.exports.saludar = saludar;
module.exports.saludarMundo = saludarMundo;

module.exports = {
    saludar
};
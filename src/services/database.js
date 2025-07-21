//export default, serve para exportar por padrão 
// para ser async "que espera a execução" vai depois do = 

exports.connectToDatabase = async (dataName) => {
    console.log("se conectando ao banco: " + dataName);
};

exports.disconnectDatabase = () => {
    // logica
    console.log("desconectando");
};
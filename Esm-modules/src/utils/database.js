// pra passar uma constante 
const dataBaseType = {
    userType: "admin",
    typeData: "datalocal"
}

async function connectToDatabase(dataName) {
    // logica de conexão
    console.log(`conectado ao banco ${dataName}`);
};

// pra multiplos exports
async function disconnectDatabase() {
    console.log("desconectando do banco de dados ");
}

// para exportar no esm é assim
export  {
    connectToDatabase,
    disconnectDatabase,
    dataBaseType
};
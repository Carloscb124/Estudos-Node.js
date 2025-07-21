// importando o conteudo
// dentro das {} serve para chamar apenas a função que eu preciso 
const { getFullName, productType} = require("./services/products")
const product = require("./services/products")
const config = require("./services/config")
const database = require("./services/database")

async function main(){
     console.log("carrinho de compras:");
    getFullName("1", "mousepad");
    product.getFullName("1", "mousepad");
    
    console.log(productType);
    
    database.connectToDatabase();
    database.disconnectDatabase();

}
main();

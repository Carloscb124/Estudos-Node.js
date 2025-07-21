// todas as funções que lidam com o produto

const productType = {
    version: "digital",
    tax: "x1",
};

async function getFullName(codeId,  productName) {
    console.log("productX: " + codeId + "--" + productName);
    await doBrakeLine();
};

// hidden function 
async function doBrakeLine() {
    console.log("\n");
};

async function getProductLabel(productName) {
    console.log("product: " + productName);
};

// serve para exportar os modulos 
module.exports = {
    getFullName,
    getProductLabel,
    productType,
};
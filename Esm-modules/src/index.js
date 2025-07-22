// pra importar utliaza o from, e a extensao tem que ter .js
// import connectToDatabas, { disconnectDatabase } from "./utils/database.js";
// import * serve para importar tudo
// import * as database from "./utils/database.js"
// destruturação, serve para chamar apenas uma função, usa as chaves
import {disconnectDatabase, dataBaseType} from "./utils/database.js"
import * as api from "./utils/api.js"

api.getDataFromApi();
// database.connectToDatabase("my-databse");
disconnectDatabase();
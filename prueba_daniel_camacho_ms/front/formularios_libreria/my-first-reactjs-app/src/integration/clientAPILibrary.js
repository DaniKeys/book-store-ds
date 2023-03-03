import axios from "axios";


class ClientAPILibrary {


    async createBook(newBook) {

        return axios.post("/book", newBook)
            .then(response => { //200-299

                if (response.status === 201) {
                    return response.data;

                } else {
                }
            })
            .catch(error => {
                if (error.response) {//400 - 499 o 500 - 599
                    if (error.response.status === 400) {
                        throw new Error("Caracteres no validos");
                    } else if (error.response.status === 409) {
                        throw new Error("ISBN ya existente");
                    } else {
                        throw new Error("Se presento un error con status: " + error.response.status);
                    }
                } else {
                    throw new Error("Se presento un error: " + error.message);
                }
            });

    }


    async buyBook(BookBuy) {

        return axios.post("/buyBook", BookBuy)
            .then(response => { //200-299

                if (response.status === 200) {
                    return response.data;

                } else if (response.status === 204) {
                    throw new Error("No hay esa cantidad de libros requerida");
                }
            })
            .catch(error => {
                if (error.response) {//400 - 499 o 500 - 599
                    if (error.response.status === 304) {
                        throw new Error("Seleccione como minimo 1 Und");
                    } else if (error.response.status === 400) {
                        throw new Error("Caracteres no validos");
                    } else if (error.response.status === 404) {
                        throw new Error("ID de libro no encontrado");
                    }else if (error.response.status === 406) {
                        throw new Error("ID o Cantidad vacio");
                    } else if (error.response.status === 500) {
                        throw new Error("No esta disponible el sistema de comparas intente mas tarde");
                    } else {
                        throw new Error("Se presento un error con status: " + error.response.status);
                    }
                } else {
                    throw new Error("" + error.message);
                }
            });

    }
    
    async updateStock(id, stock) {

        const configPut = {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:3000'
            },
        };

        return axios.put("/" + id, stock, configPut)
            .then(response => { //200-299

                if (response.status === 200) {
                    return response.data;

                } else if (response.status === 204) {
                    throw new Error("No existe un libro con ID ingresado");
                } else {
                    throw new Error("Se esperaba 200 pero obtuvo " + response.status);
                }
            })
            .catch(error => {
                if (error.response) {//400 - 499 o 500 - 599
                    if (error.response.status === 304) {
                        throw new Error("Stock sin cambios");
                    } else if (error.response.status === 400) {
                        throw new Error("Caracteres no validos");
                    } else if (error.response.status === 406) {
                        throw new Error("Valor o Stock vacios o nulos");
                    }else if (error.response.status === 500) {
                        throw new Error("No esta disponible el sistema intente mas tarde");
                    } else {
                        throw new Error("Se presento un error con status: " + error.response.status);
                    }
                } else {
                    throw new Error(error.message);
                }
            });
    }

    async getAllVentas() {
        try {
            const response = await axios.get("/all");
            return response.data;
        } catch (error) {
            throw new Error(error.message);
        }
    }


    async getById(id) {
    
        return axios.get("/id/" + id)
            .then(response => { //200-299
                
                if (response.status === 200) {
                    return response.data;

                } 
                })
            .catch(error => {
                if (error.response) {//400 - 499 o 500 - 599
                    if (error.response.status === 404) {
                        throw new Error("No existe un libro con ese id");
                    } else if (error.response.status === 405) {
                        throw new Error("Casilla id vacia o  nula");
                    }else if (error.response.status === 400) {
                        throw new Error("Caracteres no validos");
                    } else if (error.response.status === 500) {
                        throw new Error("No esta disponible el sistema intente mas tarde");
                    }else {
                        throw new Error("Se presento un error con status: " + error.response.status);
                    }
                } else {
                    throw new Error(error.message);
                }
            });
    }

}

export default ClientAPILibrary;









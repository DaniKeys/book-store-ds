import express from 'express';
import axios from "axios";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';


const app = express();
app.use(bodyParser.json());
dotenv.config();
const port = process.env.BACK_WEB_PORT || 3001;
const URL = process.env.URL_REQUEST_API;


axios.defaults.headers.common['Access-Control-Allow-Origin'] = "\'" + process.env.ORIGIN + "\'";


app.post("/book", (request, response) => {

    axios.post(URL, request.body)
        .then(res => { //200-299
            response.status(res.status)
            if (res.data) {
                response.json(res.data)
            } else {
                response.send();
            }
        })
        .catch(error => {
            if (error.response) {//400 - 499 o 500 - 599
                response.status(error.response.status);
                if (error.response.data) {
                    response.json(error.response.data)
                } else {
                    response.send()
                }
            } else {
                response.status(500).send(error.message);
            }
        });
});



app.get("/all", (request, response) => {

    axios.get(URL + "/allVentas")
        .then(sales => {
            response.status(sales.status);
            if (sales.data) {
                response.json(sales.data);
            } else {
                response.send()
            }
        }).catch(error => {
            if (error.response) {
                response.status(error.response.status);
                if (error.data) {
                    response.json(error.data);
                } else {
                    response.send()
                }
            } else {
                response.status(500).send(error.message);
            }
        })
});


app.get("/id/:id", (request, response) => {

    axios.get(URL + "/id/" + request.params.id)
    .then(get => {
        response.status(get.status);
        if (get.data) {
            response.json(get.data);
        } else {
            response.send()
        }
    }).catch(error => {
        if (error.response) {
            response.status(error.response.status);
            if (error.data) {
                response.json(error.data);
            } else {
                response.send()
            }
        } else {
            response.status(500).send(error.message);
        }
    })

});


app.post("/buyBook", (request, response) => {

    axios.post(URL + "/buy", request.body)
        .then(buy => { //200-299
            response.status(buy.status);
            if (buy.data) {
                response.json(buy.data);
            } else {
                response.send()
            }
        }).catch(error => {
            if (error.response) {
                response.status(error.response.status);
                if (error.data) {
                    response.json(error.data);
                } else {
                    response.send()
                }
            } else {
                response.status(500).send(error.message);
            }
        })
});



app.put("/:id", (request, response) => {
 
    axios.put(URL+"/"+ request.params.id, request.body)
        .then(update => { //200-299
            response.status(update.status);
            if (update.data) {
                response.json(update.data);
            } else {
                response.send()
            }
        }).catch(error => {
            if (error.response) {
                response.status(error.response.status);
                if (error.data) {
                    response.json(error.data);
                } else {
                    response.send()
                }
            } else {
                response.status(500).send(error.message);
            }
        })
});


app.listen(port, () => {
    console.log("Corriendo por el puerto " + port);
    //console.log(process.env.PORT_API);

});







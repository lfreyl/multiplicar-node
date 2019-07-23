const fs = require('fs');
const colors = require('colors');
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`No es un numero`);
            return;
        }
        let data = '';
        console.log('=================================');
        console.log(`===========Tabla del ${base}============`.green);
        console.log('=================================');
        for (let index = 1; index <= limite; index++) {
            let res = base * index;

            data += `${base} * ${index} = ${res}\n`;

        }
        resolve(data)

    })




}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`No es un numero`);
            return;
        }
        let data = '';
        for (let index = 1; index < limite + 1; index++) {
            let res = base * index;

            data += `${base} * ${index} = ${res}\n`;

        }
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)

        });

    })

}
module.exports = {
    crearArchivo,
    listarTabla
}
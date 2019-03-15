const fs = require('fs');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`No es un numero`);
            return;
        }
        let data = '';
        for (let index = 1; index <= limite; index++) {
            let res = base * index;

            data += `${base} * ${index} = ${res}\n`;

        }
        resolve(data)

    })




}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`No es un numero`);
            return;
        }
        let data = '';
        for (let index = 1; index < 11; index++) {
            let res = base * index;

            data += `${base} * ${index} = ${res}\n`;

        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)

        });

    })

}
module.exports = {
    crearArchivo,
    listarTabla
}
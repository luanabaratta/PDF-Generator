import * as http from "http";
import * as fs from "fs";
import * as pdf from 'html-pdf';

const server = http.createServer((req, res) => {
    let html = fs.readFileSync('./index.html');

    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait'
    }

    pdf.create(html.toString(), options).toBuffer((err, buffer) => {
        if (err) return res.status(500).json(err);
        res.end(buffer);
    });
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server iniciado na porta ${port}`)
});
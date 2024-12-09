const express = require('express')

const app = express()

app.use(express.json());

let usuarios = [ 
   {id: 1, nome: 'joão'},
   {id: 2, nome: 'Jadienne'},
]

app.get('/usuarios', (req, res) => {
    res.json(usuarios);

});

app.post('/usuarios', (req, res) => {
    const {nome} = req.body.body;

    
    if(!nome){
        return res.status(400).json({erro: 'o nome do usuário é obrigatorio!'})
    }

    const novoUsuario ={
        id: usuarios.length + 1,
        nome: nome,
    }

    usuarios.push(novoUsuario);
    return res.status(201).json(novoUsuario);
    
});


app.put('/usarios/:id', (req, res) =>{
    const{id} = req.params;
    const{nome} = req.body;

    const usuarioindex = usuarios.findIndex(usuarios => usuarioindex.id === parseInt(id));

    if(usuarioindex === -1){
        return res.status(404).json({erro: 'Usuário não encontrado!'})
    }

    if(!nome){
        return res.status(400).json({erro : 'O nome é pbriagtorio!'});

    }

    usuarios[usuarioindex].nome = nome;
    return res.status(200).json(usuarioindex);
});


app.listen(3000, () => {

    console.log('Servidor rodando na porta 3000');

});


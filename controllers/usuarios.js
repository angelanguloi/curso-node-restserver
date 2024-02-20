const { resposnse, request } = require('express');


const usuariosGet = (req = request, res = response) => {
    
    const { q, nombre, apikey } = req.query;

    res.json({
        msg: 'get API - usuariosGet',
        q,
        nombre,
        apikey
    });
  }

const usuariosPut = (req, res) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
  }

const usuariosPost = (req, res) => {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - usuariosPost',
        nombre,
        edad
    });
  }

const usuariosDelete = (req, res) => {
    res.json({
        msg: 'delete API - controlador'
    });
  }

  module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
  }


















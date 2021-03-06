const axios = require('axios');
const express = require('express');
const db = require('../config/db');
require('../../server');
const router = express.Router();

/*
CONSUMO APIs
*/

router.get('/sgc', async (req, res) => {

  try {
   const { data } = await axios('http://sgc.dcc.pm.df.gov.br:8082/actuator/health')
   return res.json(data)
       
  } catch (error) {
    console.log(res.status(500).json('Error: ', error, res));
  } 
})

router.get('/pje', async (req, res) => {

  try {
   const { data } = await axios('http://sgc.dcc.pm.df.gov.br:8088/actuator/health')
   return res.json(data)
       
  } catch (error) {
    console.log(res.status(500).json('Error: ', error, res));
  } 
})

router.get('/inter-consulta', async (req, res) => {

  try {
   const { data } = await axios('https://pje-mni-consulta.tjdft.jus.br/consultapublica/intercomunicacao?wsdl')
   return res.json(data)
       
  } catch (error) {
    console.log(res.status(500).json('Error: ', error, res));
  } 
})

router.get('/inter-escrita', async (req, res) => {

  try {
   const { data } = await axios('https://pje-mni.tjdft.jus.br/pje/intercomunicacao?wsdl')
   return res.json(data)
       
  } catch (error) {
    console.log(res.status(500).json('Error: ', error, res));
  } 
})

router.get('/pje-consulta', async (req, res) => {

  try {
   const { data } = await axios('https://pje-mni-consulta.tjdft.jus.br/consultapublica/ConsultaPJe?wsdl')
   return res.json(data)
       
  } catch (error) {
    console.log(res.status(500).json('Error: ', error, res));
  } 
})

router.get('/pje-integracao', async (req, res) => {

  try {
   const { data } = await axios('https://pje-integracao.tjdft.jus.br/actuator/health')
   return res.json(data)
       
  } catch (error) {
    console.log(res.status(500).json('Error: ', error, res));
  } 
})

router.get('/estatisticas', async (req, res) => {

  try {
    const { data } = await axios('http://sgc.dcc.pm.df.gov.br:8082/estatisticas/sgcJob')
    console.log(data)
    return res.json(data)

  } catch (error) {
    console.log(res.status(500).json('Error: ', error, res));
  }

})

/*
CONSUMO BANCO DE DADOS
*/
const procedimentos = {
  qtd : router.get(`/procedimentos-qtd/:id`, (req, res) => {  
    try {
      let id = req.params;
      db.query(`SELECT COUNT(*) FROM dcc.procedimento WHERE procedimento_tipo_id=${id.id}&&procedimento_status_id!=7&&procedimento_status_id!=15&&procedimento_status_id!=2;`, (error, results, fields) =>{
      return res.json(results);
      })
    } catch (error) {
      console.error('Error: ',error);
    } 
  }),
  ultimo : router.get(`/procedimentos-last/:id`, (req, res) => {
    try {
      let id = req.params;
      db.query(`SELECT MAX(created_at) FROM dcc.procedimento WHERE procedimento_tipo_id=${id.id}`, (error, results, fields) =>{
        return res.json(results);
      })
    } catch (error) {
      console.error('Error: ', error);
    }
  }),
  tipo : router.get(`/procedimentos-tipo`, (req, res) => {
    try {
      db.query(`SELECT * FROM dcc.procedimento_tipo;`, (error, results, fields) =>{
        return res.json(results);
      })
    } catch (error) {
      console.error('Error: ', error);
    }
  })
}
module.exports = router, procedimentos;
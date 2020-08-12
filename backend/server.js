const cors = require('cors')
const express = require('express');
const app = express();
const axios = require('axios');

app.use(cors())

app.get('/sgc', async (req, res) => {

  try {
   const { data } = await axios('http://api.sgc.dcc.pm.df.gov.br:8082/actuator/health')
   return res.json(data)
       
  } catch (error) {
    console.error(error);
  } 
})

app.get('/pje', async (req, res) => {

  try {
   const { data } = await axios('http://api.sgc.dcc.pm.df.gov.br:8088/actuator/health')
   return res.json(data)
       
  } catch (error) {
    console.error(error);
  } 
})

app.get('/inter-consulta', async (req, res) => {

  try {
   const { data } = await axios('https://pje-ead.tjdft.jus.br/pje/intercomunicacao?wsdl')
   return res.json(data)
       
  } catch (error) {
    console.error(error);
  } 
})

app.get('/inter-escrita', async (req, res) => {

  try {
   const { data } = await axios('https://pje-ead.tjdft.jus.br/pje/intercomunicacao?wsdl')
   return res.json(data)
       
  } catch (error) {
    console.error(error);
  } 
})

app.get('/pje-consulta', async (req, res) => {

  try {
   const { data } = await axios('https://pje-ead.tjdft.jus.br/pje/ConsultaPJe?wsdl')
   return res.json(data)
       
  } catch (error) {
    console.error(error);
  } 
})

app.get('/pje-integracao', async (req, res) => {

  try {
   const { data } = await axios('https://pje-integracao-ead.tjdft.jus.br/actuator/health')
   return res.json(data)
       
  } catch (error) {
    console.error(error);
  } 
})

app.listen('4567')
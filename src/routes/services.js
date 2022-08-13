import express from "express";
import fetch from "node-fetch";
import mongoose from "mongoose";
const router = express.Router();

import Conexion from "../schema/conexion.js";

//Local
/*
const serverInscriptions = "http://localhost:4000/";
const serverSubjects = "http://localhost:4000/";
const serverStudents = "http://localhost:4000/";
const balance = "http://localhost:4000/";
*/
 
//Cloud

const serverInscriptions = "http://54.237.209.113:4000/";
const serverSubjects = "http://52.87.176.141:4000/";
const serverStudents = "http://54.166.19.80:4000/";
const balance = "ServerBanlanceador-240039913.us-east-1.elb.amazonaws.com";


//Metodos GET

/**
	
**/
router.get("/",async (req, res) => {
    conexionDB(balance);
	//res.send("servidor de Middleware");
    const respuesta = await fetch(balance);
    const datos = await respuesta.json();
    res.send(datos);
});

router.get("/showData",async (req, res) => {
    conexionDB(balance);
    const respuesta = await fetch(balance+"showData");
    const datos = await respuesta.json();
    res.send(datos);
});

router.get("/show/last_saved_student",async (req, res) => {
    conexionDB(serverStudents);
    const respuesta = await fetch(serverStudents+"show/last_saved_student");
    const datos = await respuesta.json();
    res.send(datos);
});

router.post("/getStudent",async (req, res) => {
    conexionDB(serverStudents);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverStudents + "getStudent", { method: 'POST', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});



router.post("/getInscription",async (req, res) => {
    conexionDB(serverInscriptions);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverInscriptions + "getInscription", { method: 'POST', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});

router.put("/put/subject/",async (req, res) => {
    conexionDB(serverSubjects);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverSubjects + "put/subject/", { method: 'PUT', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});

router.put("/put/student/",async (req, res) => {
    conexionDB(serverStudents);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverStudents + "put/student/", { method: 'PUT', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});

router.put("/put/inscription/",async (req, res) => {
    conexionDB(serverInscriptions);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverInscriptions + "put/inscription/", { method: 'PUT', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});

router.patch("/patch/student/",async (req, res) => {
    conexionDB(serverStudents);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverStudents + "patch/student/", { method: 'PATCH', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});

router.patch("/patch/subject",async (req, res) => {
    conexionDB(serverSubjects);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverSubjects + "patch/subject", { method: 'PATCH', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});

router.patch("/patch/subject/quota",async (req, res) => {
    conexionDB(serverSubjects);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverSubjects + "patch/subject/quota", { method: 'PATCH', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});


router.post("/add/student",async (req, res) => {
    conexionDB(serverStudents);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverStudents + "add/student", { method: 'POST', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});

router.post("/add/subject",async (req, res) => {
    conexionDB(serverSubjects);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverSubjects + "add/subject", { method: 'POST', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});

router.post("/add/inscription",async (req, res) => {
    conexionDB(serverInscriptions);
    const info = req.body;
    console.log(JSON.stringify(info));
    const response = await fetch(serverInscriptions + "add/inscription", { method: 'POST', body: JSON.stringify(info) });
    const data = await response.json();
    console.log(data);
    res.send(data);
});

router.get("/getSubjects",async (req, res) => {
    conexionDB(serverSubjects);
    const respuesta = await fetch(serverSubjects+"getSubjects");
    const datos = await respuesta.json();
    res.send(datos);
});


function conexionDB(ipConection){
    const data = new Date();
    const conexion = new Conexion({ip:ipConection,data:data.toDateString()});
    console.log(ipConection);
    console.log(conexion.save());
}
export default router;
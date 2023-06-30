import express from 'express';
import HealthRouter from './health/health-router.js'

export default class MainRouter extends express.Router {
    constructor() {
        super();
        this.use('/', new HealthRouter())
    }
}
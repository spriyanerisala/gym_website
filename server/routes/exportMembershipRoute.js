import express from 'express'
import { exportMemberships } from '../controllers/exportMembershipsController.js'

const router = express.Router()

router.get('/export-memberships',exportMemberships)

export default router
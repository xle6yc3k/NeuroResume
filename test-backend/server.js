// server.js (Express)
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import cors from 'cors'
import fs from 'fs-extra'

const app = express()
const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dataPath = path.join(__dirname, 'data') // ✅ добавлено

// 🧠 CORS и API
app.use(cors())
app.use(express.json())

// 📁 Отдача собранного фронта
const distPath = path.join(__dirname, '../dist')
app.use(express.static(distPath))

// API
app.get('/api/profile', async (req, res) => {
  const profile = await fs.readJson(path.join(dataPath, 'profile.json'))
  res.json(profile)
})

app.get('/api/resumes', async (req, res) => {
  const resumes = await fs.readJson(path.join(dataPath, 'resumes.json'))
  res.json(resumes.resumes)
})

app.patch('/api/profile', async (req, res) => {
  const profilePath = path.join(dataPath, 'profile.json')
  const profile = await fs.readJson(profilePath)
  const { mainResumeId, resumes } = req.body

  if (mainResumeId !== undefined) {
    profile.mainResumeId = mainResumeId
  }

  if (Array.isArray(resumes)) {
    profile.resumes = resumes
  }

  await fs.writeJson(profilePath, profile, { spaces: 2 })
  res.json({ message: 'Profile updated', profile })
})

app.patch('/api/resumes', async (req, res) => {
  const resumesPath = path.join(dataPath, 'resumes.json')
  const { resumes } = req.body

  if (!Array.isArray(resumes)) {
    return res.status(400).json({ message: 'Invalid format' })
  }

  await fs.writeJson(resumesPath, { resumes }, { spaces: 2 })
  res.json({ message: 'Resumes updated', resumes })
})

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

const PORT = 5000
app.listen(PORT, () => {
  console.log(`✅ Сервер запущен на http://localhost:${PORT}`)
})

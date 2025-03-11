import { ref, computed } from 'vue'
import axios from 'axios'
import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', () => {
  const profile = ref(null)
  const allResumes = ref([])

  const mainResume = computed(() => {
    if (!profile.value || !allResumes.value.length) return {}
    return allResumes.value.find(r => r.id === profile.value.mainResumeId) || {}
  })

  const fetchProfile = async () => {
    const [profileRes, resumesRes] = await Promise.all([
      axios.get('/api/profile'),
      axios.get('/api/resumes')
    ])
    profile.value = profileRes.data
    allResumes.value = resumesRes.data
  }

  const setMainResume = async (id) => {
    try {
      await axios.patch('/api/profile', { mainResumeId: id })
      profile.value.mainResumeId = id
    } catch (err) {
      console.error('Ошибка при обновлении главного резюме:', err)
    }
  }

  return {
    profile,
    allResumes,
    mainResume,
    fetchProfile,
    setMainResume
  }
})

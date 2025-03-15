import { defineStore } from 'pinia'

interface ProfileState {
  firstName: string
  lastName: string
  email: string
  skills: string[]
}

export const useProfileStore = defineStore('profile', {
  state: (): ProfileState => ({
    firstName: '',
    lastName: '',
    email: '',
    skills: []
  }),
  
  getters: {
    fullName: (state) => `${state.firstName} ${state.lastName}`,
    hasProfile: (state) => Boolean(state.firstName && state.lastName && state.email)
  },
  
  actions: {
    updateProfile(profile: Partial<ProfileState>) {
      Object.assign(this, profile)
    },
    addSkill(skill: string) {
      if (!this.skills.includes(skill)) {
        this.skills.push(skill)
      }
    },
    removeSkill(skill: string) {
      const index = this.skills.indexOf(skill)
      if (index > -1) {
        this.skills.splice(index, 1)
      }
    }
  }
})
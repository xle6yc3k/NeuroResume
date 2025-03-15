export interface Profile {
  firstName: string
  lastName: string
  email: string
  skills: string[]
}

export interface Resume {
  id: string
  title: string
  createdAt: Date
  updatedAt: Date
  sections: ResumeSection[]
}

export interface ResumeSection {
  id: string
  type: 'education' | 'experience' | 'skills' | 'summary'
  content: unknown
}
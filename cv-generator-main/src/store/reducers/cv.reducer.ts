import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface CVProps {
    personalInfo: {
        title?: string;
        firstName?: string;
        lastName?: string;
        email?: string;
        phoneNumber?: string;
        country?: string;
        city?: string;
    },
    professionalSummary: {
        description: string;
    },
    websites: {
        label?: string;
        title: string;
        url: string;
    }[],
    professionalHistory: {
        label?: string;
        company: string;
        position: string;
        startDate: string;
        endDate: string;
        description: string;
        city?: string;
    }[],
    skills: string[],
    languages: {
        label?: string;
        language: string;
        level: string;
    }[],
    hobbies: {
        description: string;
    }
}

const initialState: CVProps = {
    personalInfo: {
        title: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        country: '',
        city: '',
    },
    professionalSummary: {
        description: '',
    },
    websites: [],
    professionalHistory: [],
    skills: [],
    languages: [],
    hobbies: {
        description: '',
    }
}

export const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: {
        setCV: (state, action: PayloadAction<CVProps>) => {
            state.personalInfo = action.payload.personalInfo
            state.professionalSummary = action.payload.professionalSummary
            state.websites = action.payload.websites
            state.professionalHistory = action.payload.professionalHistory
            state.skills = action.payload.skills
            state.languages = action.payload.languages
            state.hobbies = action.payload.hobbies
        },
        setPersonalInfo: (state, action: PayloadAction<CVProps['personalInfo']>) => {
            state.personalInfo = action.payload
        },
        setProfessionalSummary: (state, action: PayloadAction<CVProps['professionalSummary']>) => {
            state.professionalSummary = action.payload
        },
        setWebsites: (state, action: PayloadAction<CVProps['websites']>) => {
            state.websites = action.payload
        },
        setProfessionalHistory: (state, action: PayloadAction<CVProps['professionalHistory']>) => {
            state.professionalHistory = action.payload
        },
        setSkills: (state, action: PayloadAction<CVProps['skills']>) => {
            state.skills = action.payload
        },
        setLanguages: (state, action: PayloadAction<CVProps['languages']>) => {
            state.languages = action.payload
        },
        setHobbies: (state, action: PayloadAction<CVProps['hobbies']>) => {
            state.hobbies = action.payload
        },
    },
})

export const {
    setCV,
    setPersonalInfo,
    setProfessionalSummary,
    setWebsites,
    setProfessionalHistory,
    setSkills,
    setLanguages,
    setHobbies,
} = cvSlice.actions

export const getCV = (state: RootState) => state.cv;
export const getPersonalInfo = (state: RootState) => state.cv.personalInfo;
export const getProfessionalSummary = (state: RootState) => state.cv.professionalSummary;
export const getWebsites = (state: RootState) => state.cv.websites;
export const getProfessionalHistory = (state: RootState) => state.cv.professionalHistory;
export const getSkills = (state: RootState) => state.cv.skills;
export const getLanguages = (state: RootState) => state.cv.languages;
export const getHobbies = (state: RootState) => state.cv.hobbies;

export default cvSlice.reducer
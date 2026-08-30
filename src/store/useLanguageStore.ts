import { create } from 'zustand'

type Language = 'en' | 'ar'

interface LanguageState {
  language: Language
  toggleLanguage: () => void
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'en',
  toggleLanguage: () =>
    set((state) => ({
      language: state.language === 'en' ? 'ar' : 'en',
    })),
}))
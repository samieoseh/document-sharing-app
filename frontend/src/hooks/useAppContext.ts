import AppContext from '@/contexts/AppContext'
import { useContext } from 'react'

export default function useAppContext() {
    const context = useContext(AppContext)
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider')
    }

    return context
}

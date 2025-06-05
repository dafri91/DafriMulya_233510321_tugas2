import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isOpen: true,
    isMobileOpen: false
  }),
  actions: {
    toggleSidebar() {
      this.isOpen = !this.isOpen
    },
    toggleMobileSidebar() {
      this.isMobileOpen = !this.isMobileOpen
    },
    closeMobileSidebar() {
      this.isMobileOpen = false
    }
  },
  persist: {
    paths: ['isOpen']
  }
})
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Documentos Legales",
  description: "Términos, Políticas de Privacidad y Legales",
  lang: "es-ES",
  themeConfig: {
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Términos', link: '/terminos' },
      { text: 'Privacidad', link: '/privacidad' }
    ],
    sidebar: [
      {
        text: 'Información Legal',
        items: [
          { text: 'Términos de Servicio', link: '/terminos' },
          { text: 'Política de Privacidad', link: '/privacidad' },
          
        ]
      }
    ],
    docFooter: {
      prev: 'Página anterior',
      next: 'Página siguiente'
    },
    outlineTitle: 'En esta página',
    search: {
      provider: 'local'
    }
  }
})
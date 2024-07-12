import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/The-Blog/',
  title: "The Blog",
  description: "The Blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Blog', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Leon2323232323232323232323/The-Blog' }
    ]
  }
})

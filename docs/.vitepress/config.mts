import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JS New Feature",
  description: "JS New Feature",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'New Feature', link: '/ecmascript/es6-2015' }
    ],

    sidebar: [
      {
        text: 'ES 版本',
        items: [
          { text: 'ES5-2009', link: '/ecmascript/es5-2009' },
          { text: 'ES6-2015', link: '/ecmascript/es6-2015' },
          { text: 'ES7-2016', link: '/ecmascript/es7-2016' },
          { text: 'ES8-2017', link: '/ecmascript/es8-2017' },
        ]
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

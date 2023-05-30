// type Deps = Array<Record<string, string | boolean>>

export const deps = [
  {
    name: 'element-plus',
    value: {
      name: 'element-plus',
      version: '^2.2.15',
      dev: false,
    },
  },
  {
    name: '@element-plus/nuxt',
    value: {
      name: '@element-plus/nuxt',
      version: '^1.0.5',
      dev: false,
    },
  },
  {
    name: 'naive-ui',
    value: {
      name: 'naive-ui',
      version: '^2.34.3',
      dev: false,
    },
  },
  {
    name: 'sass',
    value: {
      name: 'sass',
      version: '^1.54.8',
      dev: true,
    },
  },
]

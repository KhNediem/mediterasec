import { MetadataRoute } from 'next'
import { i18n } from '@/middleware'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mediterasec.com'
  const locales = i18n.locales
  const paths = ['', 'about', 'contact', 'partnership', 'privacy', 'pulse', 'terms']

  const sitemapEntries: MetadataRoute.Sitemap = []

  paths.forEach((path) => {
    locales.forEach((locale) => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${path ? `/${path}` : ''}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: path === '' ? 1 : 0.8,
      })
    })
  })

  return sitemapEntries
}

import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Gabriel Boyault | Développeur front-end',
    short_name: 'Gabriel Boyault',
    description: 'Portfolio de Gabriel Boyault, développeur front-end react & WordPress nantais',
    start_url: '/',
    display: 'standalone',
    background_color: '#242327',
    theme_color: '#EEEEEE',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
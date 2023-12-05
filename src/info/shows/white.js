const title = 'Птицы'

const subtitle = 'Райские птицы и афробразильский колорит'

const slug = 'white'

const description = `
    Райские птицы и афро-бразильский колорит - это шоу, от которого бегут мурашки.
`

const text = ''

const duration = '3.5 мин'

const videos = ['https://player.vimeo.com/video/835498813']

const imageFrontpage = require('@/assets/img/shows/white/frontpage.jpg')

const imageList = require('@/assets/img/shows/white/list.jpg')

const imageMain = require('@/assets/img/shows/white/main.jpg')

const imagesGallery = [
    require('@/assets/img/shows/white/1.jpg'),
    require('@/assets/img/shows/white/2.jpg'),
    require('@/assets/img/shows/white/3.jpg'),
    require('@/assets/img/shows/white/4.jpg'),
    require('@/assets/img/shows/white/5.jpg'),
    require('@/assets/img/shows/white/6.jpg'),
    // require('@/assets/img/shows/gallery/white/7.jpg'),
    // require('@/assets/img/shows/gallery/white/8.jpg'),
    // require('@/assets/img/shows/gallery/white/9.jpg'),
]

const alt = 'Шоу на свадьбу в СПб'

export const showWhite = {
    title,
    slug,
    description,
    text,
    duration,
    videos,
    imageMain,
    imagesGallery,
    alt,
}

export const frontpageWhite = {
    title,
    subtitle,
    slug,
    imageFrontpage,
    alt,
}

export const showsWhite = {
    title,
    subtitle,
    slug,
    imageList,
    alt,
}
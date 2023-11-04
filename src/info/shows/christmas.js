const title = 'Новогодний карнавал'

const subtitle = 'Карнавальное безумие на новогоднем корпоративе'

const slug = 'christmas'

const description = `
    Хореография бразильской карнавальной самбы под новогоднюю мелодию - 
    самба-версию всем известной Jingle Bells на португальском языке.<br><br>
    Mamãe Noel? А почему бы и да.<br>
    В камине не поместимся, но в целом это наш единственный минус.
`

const text = ''

const duration = '2.5 мин'

const videos = ['https://www.youtube.com/embed/8Tw3eAA15SA']

const imageFrontpage = require('@/assets/img/shows/christmas/frontpage.jpg')

const imageList = require('@/assets/img/shows/christmas/list.jpg')

const imageMain = require('@/assets/img/shows/christmas/main.jpg')

const imagesGallery = [
    require('@/assets/img/shows/christmas/1.jpg'),
    require('@/assets/img/shows/christmas/2.jpg'),
    require('@/assets/img/shows/christmas/3.jpg'),
    require('@/assets/img/shows/christmas/4.jpg'),
    require('@/assets/img/shows/christmas/5.jpg'),
    require('@/assets/img/shows/christmas/6.jpg'),
    // require('@/assets/img/shows/gallery/christmas/7.jpg'),
    // require('@/assets/img/shows/gallery/christmas/8.jpg'),
    // require('@/assets/img/shows/gallery/christmas/9.jpg'),
]

const alt = 'Шоу на новый год в СПб'

export const showChristmas = {
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

export const frontpageChristmas = {
    title,
    subtitle,
    slug,
    imageFrontpage,
    alt,
}

export const showsChristmas = {
    title,
    subtitle,
    slug,
    imageList,
    alt,
}
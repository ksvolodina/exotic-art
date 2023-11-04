const title = 'Маландру'

const subtitle = 'Неповторимый дух богемной жизни Рио'

const slug = 'malandro'

const description = `
    Неповторимый дух богемной жизни Рио и философия маландру - трикстера и короля ночи.<br><br>
    Бары, кабаре... Маландру - фольклорный персонаж Бразилии, ведущий праздный образ жизни, 
    чей стереотипный образ (костюм, шляпа) сложился после отмены рабства, 
    когда белым работодателям чаще было проще расплатиться бартером, 
    например красивыми костюмами, чем деньгами.<br><br>
    Темная личность с самого дна жизни, которая любит развлечься?<br>
    О, вы даже не представляете, как весело нам танцевать этот номер. Пожалуй, он наш любимый!
`

const text = ``

const duration = '3 мин.'

const videos = ['https://player.vimeo.com/video/844597794']

const imageFrontpage = require('@/assets/img/shows/malandro/frontpage.jpg')

const imageList = require('@/assets/img/shows/malandro/list.jpg')

const imageMain = require('@/assets/img/shows/malandro/main.jpg')

const imagesGallery = [
    require('@/assets/img/shows/malandro/1.jpg'),
    require('@/assets/img/shows/malandro/2.jpg'),
    require('@/assets/img/shows/malandro/3.jpg'),
    require('@/assets/img/shows/malandro/4.jpg'),
    require('@/assets/img/shows/malandro/5.jpg'),
    require('@/assets/img/shows/malandro/6.jpg'),
    // require('@/assets/img/shows/gallery/malandro/7.jpg'),
    // require('@/assets/img/shows/gallery/malandro/8.jpg'),
    // require('@/assets/img/shows/gallery/malandro/9.jpg'),
]

const alt = 'Шоу на праздник, корпоратив или юбилей в СПб'

export const showMalandro = {
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

export const frontpageMalandro = {
    title,
    subtitle,
    slug,
    imageFrontpage,
    alt,
}

export const showsMalandro = {
    title,
    subtitle,
    slug,
    imageList,
    alt,
}
const title = 'Самба'

const subtitle = 'Номер на основе предкарнавальных шоу лучших школ самбы Рио'

const slug = 'brazil'

const description = `
    Бразильское шоу, созданное на основе предкарнавальных шоу лучших школ самбы Рио-де-Жанейро, 
    с дополнением из шествия на самбодроме: представление флага Бразилии священной парой знаменосца и 
    его сопровождающего. Танцоры выходят по очереди, что не дает зрителю заскучать: картинка на сцене и 
    музыка постоянно меняются, а в конце номера вас и ваших гостей ждет грандиозный синхронный финал.
    <br><br>
    При желании ваши гости смогут сфотографироваться с нами после выступления.
`

const text = `
    Мы всегда вызываем восторг с первой секунды нашего появления на сцене: чистая энергия - вот что такое самба. 
    Выросшая из невероятных страданий африканского народа в рабстве - она стала воплощением любви к жизни. 
    <br>
    Самба - это сопротивление, это борьба, это сила. Прикоснитесь к ней - и вы не останетесь равнодушны.
`

const duration = '3.5 мин'

const videos = ['https://player.vimeo.com/video/844780602', 'https://www.youtube.com/embed/fepFExoPt1k']

const imageFrontpage = require('@/assets/img/shows/brazil/frontpage.png')

const imageList = require('@/assets/img/shows/brazil/list.png')

const imageMain = require('@/assets/img/shows/brazil/main.jpg')

const imagesGallery = [
    require('@/assets/img/shows/brazil/1.jpg'),
    require('@/assets/img/shows/brazil/2.jpg'),
    require('@/assets/img/shows/brazil/3.jpg'),
    require('@/assets/img/shows/brazil/4.jpg'),
    require('@/assets/img/shows/brazil/5.jpg'),
    require('@/assets/img/shows/brazil/6.jpg'),
    require('@/assets/img/shows/brazil/7.jpg'),
    require('@/assets/img/shows/brazil/8.jpg'),
    require('@/assets/img/shows/brazil/9.jpg'),
]

const alt = 'Бразильское шоу на праздник в СПб'

export const showBrazil = {
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

export const frontpageBrazil = {
    title,
    subtitle,
    slug,
    imageFrontpage,
    alt,
}

export const showsBrazil = {
    title,
    subtitle,
    slug,
    imageList,
    alt,
}


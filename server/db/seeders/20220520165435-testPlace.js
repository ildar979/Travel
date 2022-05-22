module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Places', [
      // Москва-Питер
      {
        roadId: 1,
        title: 'Пит Стоп кафе',
        info: 'Кафе расположено за Тверью перед Медное, от мкад 170 км. Широкий выбор меню: супы - солянка, борщ, лапша. второе - мясо по-французски/боярски, котлеты по-киевски, семга куском, котлеты... гарниры - картошка с грибами, жареные баклажаны, ну и простые.',
        categoria: 'еда',
        img: '/img/XXXL.jpeg',
        preset: 'islands#blueFoodIcon',
        adress: 'E105, 31, Поддубки, Тверская обл., 170520',
        geometry: [56.916334502732845,35.57775256079102],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 1,
        title: 'Лукойл №53267 Окуловка-2',
        info: 'Так же есть небольшое кафе',
        categoria: 'заправки',
        img: '/img/luk.jpeg',
        preset: 'islands#blueFuelStationIcon',
        adress: 'M-11, Новгородская обл., 174350',
        geometry: [58.34764,33.281908],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 1,
        title: 'Мини-отель "Золотой ключик"',
        info: 'хорошее расположение - как раз посередине пути',
        categoria: 'гостиница',
        img: '/img/koridor_2.jpeg',
        preset: 'islands#blueHotelIcon',
        adress: 'ул. Советская, д. 5 ЗАТО, Озёрный, Тверская обл., 171090',
        geometry: [57.869867,33.68994],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 1,
        title: 'Будь здоров',
        info: 'аптека',
        categoria: 'аптека',
        img: '/img/apteka.jpeg',
        preset: 'islands#blueMedicalIcon',
        adress: 'ул. Ленина, д. 36а, Окуловка, Новгородская обл., 174350',
        geometry: [58.373054,33.300682],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 1,
        title: 'Riversurf Zavidovo',
        info: 'Можно полюбоваться видами, а еще это лучшее места для катания на вэйксёрфинге!!!',
        categoria: 'отдых',
        img: '/img/zav.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'Лазурная, Тверская обл., 171270',
        geometry: [56.580114,36.454021],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
// ============================================================================= Питер-Хельсинки
      {
        roadId: 4,
        title: 'Гостиница "Скандинавия"',
        info: 'Спасибо за комфорт и уют! Отличные номера и вкусный завтрак! Персоналу отдельное спасибо за внимательность и доброжелательность к гостям. Обязательно приедем снова!',
        categoria: 'гостиница',
        img: '/img/скандинавия.jpeg',
        preset: 'islands#blueHotelIcon',
        adress: 'Россия, А-181 Скандинавия, 35',
        geometry: [60.724515, 28.6066008],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        roadId: 4,
        title: 'Татнефть №11666 Скандинавия',
        info: 'Обычная круглосуточная заправка',
        categoria: 'заправки',
        img: '/img/татнефть.jpeg',
        preset: 'islands#blueFuelStationIcon',
        adress: 'Россия, Ленинградская область, Выборгский район, А-181 Скандинавия, 190-й километр',
        geometry: [60.620911, 28.168563],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        roadId: 4,
        title: 'Karhulan Omega apteekki',
        info: 'Финская аптека',
        categoria: 'аптека',
        img: '/img/finApt.jpeg',
        preset: 'islands#blueMedicalIcon',
        adress: 'Финляндия, Кюменлааксо, Котка, Весиваллинаукио, 3',
        geometry: [60.512444, 26.932715],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        roadId: 4,
        title: 'Музей-усадьба художника И. Е. Репина',
        info: 'Обязательно к посещению',
        categoria: 'отдых',
        img: '/img/музейРепина.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'Посёлк Репино, Приморское шоссе, 411',
        geometry: [60.155980, 29.898538],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        roadId: 4,
        title: 'Zona Bike',
        info: 'Бар, паб. Атмосферное место',
        categoria: 'еда',
        img: '/img/zonaBoke.jpeg',
        preset: 'islands#blueFoodIcon',
        adress: 'ул. Таммисуо, 8, Выборг',
        geometry: [60.724446, 28.783796],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // ========================================================================== Казань-Сочи
      {
        roadId: 3,
        title: 'Кафе 73',
        info: 'Кафе, магазин кулинарии',
        categoria: 'еда',
        img: '/img/кафе73.jpeg',
        preset: 'islands#blueFoodIcon',
        adress: 'ул. Хваткова, 32Г, Ульяновск',
        geometry: [54.260769, 48.252931],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 3,
        title: 'Кафе Терса',
        info: 'Кафестоловая',
        categoria: 'еда',
        img: '/img/терса.jpeg',
        preset: 'islands#blueFoodIcon',
        adress: 'Революционная ул., 48А, село Терса',
        geometry: [52.082929, 47.554613],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 3,
        title: 'ЕвроАзия',
        info: 'Кафе, суши-бар',
        categoria: 'еда',
        img: '/img/евроАзия.jpeg',
        preset: 'islands#blueFoodIcon',
        adress: 'Камышин, Волгоградская область, ул. Пролетарская улица, 10',
        geometry: [50.085199, 45.407903],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 3,
        title: 'Мкафе',
        info: 'Быстрое питание, кафе',
        categoria: 'еда',
        img: '/img/mkafe.jpeg',
        preset: 'islands#blueFoodIcon',
        adress: 'Россия, Ростовская область, Сальский район',
        geometry: [46.476350, 41.475047],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 3,
        title: 'Столовая',
        info: 'Столовая, кафе',
        categoria: 'еда',
        img: '/img/столовая.jpeg',
        preset: 'islands#blueFoodIcon',
        adress: 'Туапсинский район, Краснодарский край, Россия, Дорожная ул. 2Б, село Дефановка',
        geometry: [44.431172, 38.782244],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        roadId: 3,
        title: 'Hampton by Hilton Volgograd Profsoyuznaya',
        info: 'Гостиница',
        categoria: 'гостиница',
        img: '/img/hampton.jpeg',
        preset: 'islands#blueHotelIcon',
        adress: 'Профсоюзная ул., 13, Волгоград',
        geometry: [48.699077, 44.495656],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        roadId: 3,
        title: 'Центротех',
        info: 'АЗС',
        categoria: 'заправки',
        img: '/img/центротех.jpeg',
        preset: 'islands#blueFuelStationIcon',
        adress: 'Заводская ул., 6, п. г. т. НовоспасскоеМ-5 Урал, 835 км, слева3',
        geometry: [53.142706, 47.731173],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        roadId: 3,
        title: 'Роснефть',
        info: 'АЗС',
        categoria: 'заправки',
        img: '/img/роснефть.jpeg',
        preset: 'islands#blueFuelStationIcon',
        adress: 'просп. имени В.И. Ленина, 173А, Волгоград',
        geometry: [48.798801, 44.610864],
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        roadId: 3,
        title: 'Аптека ВИТА Экспресс',
        info: 'Аптека',
        categoria: 'аптека',
        img: '/img/вита.jpeg',
        preset: 'islands#blueMedicalIcon',
        adress: 'ул. Авиаторская, д. 5, Волгоград',
        geometry: [48.663972, 44.472993],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 3,
        title: 'озеро Большое Голубое',
        info: 'Вода в этом озере +4 круглый год',
        categoria: 'отдых',
        img: '/img/голубое.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'городской округ Казань, Республика Татарстан, Россия',
        geometry: [55.906813, 49.157585],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 3,
        title: 'Музей истории гражданской авиации',
        info: 'Музей',
        categoria: 'отдых',
        img: '/img/авиа.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'Авиационная ул., 20А, Ульяновск',
        geometry: [54.289974, 48.232500],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 3,
        title: 'Пляж Санторини',
        info: 'Пляж',
        categoria: 'отдых',
        img: '/img/пляж.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'Россия, Краснодарский край, Туапсинский район, посёлок дома отдыха Кубань',
        geometry: [44.186523, 38.905386],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 3,
        title: 'Родина-Мать зовёт!',
        info: 'Памятник, мемориал',
        categoria: 'отдых',
        img: '/img/мемориал.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'Россия, Волгоград, Центральный район, Мамаев курган',
        geometry: [48.742269, 44.536984],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      //==================================================================Питер-Кижи
      {
        roadId: 2,
        title: 'Роснефть',
        info: 'АЗС',
        categoria: 'заправки',
        img: '/img/роснефть.jpeg',
        preset: 'islands#blueFuelStationIcon',
        adress: 'Юбилейная ул., 6, село Паша',
        geometry: [60.378188, 33.010195],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 2,
        title: 'Лукойл',
        info: 'АЗС',
        categoria: 'заправки',
        img: '/img/luk.jpeg',
        preset: 'islands#blueFuelStationIcon',
        adress: '1, территория АЗС Новая Вилга, посёлок Новая Вилга',
        geometry: [61.820401, 34.144534],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 2,
        title: 'Соломенский залив',
        info: 'Так же есть небольшое кафе',
        categoria: 'отдых',
        img: '/img/залив.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'Петрозаводск, Республика Карелия, Россия',
        geometry: [61.829655, 34.306239],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 2,
        title: 'Юбилейная',
        info: 'Банкет на дом! Предлагаем заказать блюда из нашей столовой.',
        categoria: 'еда',
        img: '/img/столовая1.jpeg',
        preset: 'islands#blueFoodIcon',
        adress: 'Юбилейная ул., 5А, село Паша',
        geometry: [60.398517, 33.023267],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 2,
        title: 'Кижская Благодать',
        info: 'Хорошее расположение, красивый вид из окна',
        categoria: 'гостиница',
        img: '/img/гостиница.jpeg',
        preset: 'islands#blueHotelIcon',
        adress: 'Россия, Республика Карелия, Медвежьегорский район, Великогубское сельское поселение, деревня Ерсенево',
        geometry: [62.085544, 35.212111],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 2,
        title: 'Аптека Невис',
        info: 'аптека',
        categoria: 'аптека',
        img: '/img/аптека.jpeg',
        preset: 'islands#blueMedicalIcon',
        adress: 'ул. Ивана Ярославцева, 13В, Лодейное Поле',
        geometry: [60.728077, 33.553634],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 2,
        title: 'Великогубское сельское поселение',
        info: 'Православный храмдостопримечательность',
        categoria: 'отдых',
        img: '/img/храм1.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'Медвежьегорский район, Республика Карелия, Россия',
        geometry: [62.067123, 35.223966],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        roadId: 2,
        title: 'парк Заозерский заказник',
        info: 'Очень красивые места',
        categoria: 'отдых',
        img: '/img/park.jpeg',
        preset: 'islands#blueStarIcon',
        adress: 'Государственный ландшафтный заказник в Республике Карелия, особо охраняемая природная территория.',
        geometry: [61.824966, 34.512576],
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Places');
  }
};

const PRODUCTS = [
  {
    "id": "506473",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Բիֆ Քրասթի 15սմ",
      "ru": "Биф Красти 15см",
      "en": "Beef Crusty 15cm"
    },
    "descriptions": {
      "hy": "Հաց, Տավարի միս, Մոցարելլա, Հազար, Լոլիկ, Վարունգ, Կարմիր սոխ, Պղպեղ, Մայոնեզ",
      "ru": "Хлеб, Говядина, Моцарелла, Салат Латук, Помидор, Огурец, Красный лук, Перец, Майонез",
      "en": "Bread, Beef, Blackpepper, Paprika, Oil, Mozzarella, Lettuce, Tomato, Cucumber, Red Onion, Pepper, Mayonnaise"
    },
    "price": 2400,
    "image": "/menu/506473.webp"
  },
  {
    "id": "506474",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Հեմ ընդ Չիզ 30սմ",
      "ru": "Ветчина и сыр 30см",
      "en": "Ham & Cheese 30cm"
    },
    "descriptions": {
      "hy": "Հաց, Իտալական սալյամի, Խոզապուխտ, Մոցարելլա, Հազար, Լոլիկ, Վարունգ, Մոցարելլա, Զեյթուն, Պղպեղ",
      "ru": "Хлеб, Салями, Ветчина, Моцарелла, Салат Латук, Помидор, Огурец, Оливки, Перец",
      "en": "Bread, Italian Salami, Ham, Mozzarella, Lettuce, Tomato, Cucumber, Mozzarella, Olives, Pepper"
    },
    "price": 2350,
    "image": "/menu/506474.webp"
  },
  {
    "id": "506475",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Հեմ ընդ Չիզ 15սմ",
      "ru": "Ветчина и сыр 15см",
      "en": "Ham & Cheese 15cm"
    },
    "descriptions": {
      "hy": "Հաց, Իտալական սալյամի, Խոզապուխտ, Մոցարելլա, Հազար, Լոլիկ, Վարունգ, Մոցարելլա, Զեյթուն, Պղպեղ",
      "ru": "Хлеб, Салями, Ветчина, Моцарелла, Салат Латук, Помидор, Огурец, Оливки, Перец",
      "en": "Bread, Italian Salami, Ham, Mozzarella, Lettuce, Tomato, Cucumber, Mozzarella, Olives, Pepper"
    },
    "price": 1450,
    "image": "/menu/506475.webp"
  },
  {
    "id": "506476",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Չիքեն Բեկոն Քրասթի 30սմ",
      "ru": "Красти с курицей и беконом 30см",
      "en": "Chicken Bacon Crusty 30cm"
    },
    "descriptions": {
      "hy": "Հաց, Հավի միս, Բեկոն, Մոցարելլա, Հազար, Լոլիկ, Վարունգ, Պղպեղ, Կարմիր սոխ",
      "ru": "Хлеб, Курица, Бекон, Моцарелла, Салат Латук, Помидор, Огурец, Перец, Красный лук",
      "en": "Bread, Chicken, Bacon, Mozzarella, Lettuce, Tomato, Cucumber, Pepper, Red Onion"
    },
    "price": 2500,
    "image": "/menu/506476.webp"
  },
  {
    "id": "506478",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Չիքեն Բեկոն Քրասթի 15սմ",
      "ru": "Красти с курицей и беконом 15см",
      "en": "Chicken Bacon Crusty 15cm"
    },
    "descriptions": {
      "hy": "Հաց, Հավի միս, Բեկոն, Մոցարելլա, Հազար, Լոլիկ, Վարունգ, Պղպեղ, Կարմիր սոխ",
      "ru": "Хлеб, Курица, Бекон, Моцарелла, Салат Латук, Помидор, Огурец, Перец, Красный лук",
      "en": "Bread, Chicken, Bacon, Mozzarella, Lettuce, Tomato, Cucumber, Pepper, Red Onion"
    },
    "price": 1400,
    "image": "/menu/506478.webp"
  },
  {
    "id": "506484",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Չիքեն Պեստո Քրասթի 30սմ",
      "ru": "Красти с курицей и песто 30см",
      "en": "Chicken Pesto Crusty 30cm"
    },
    "descriptions": {
      "hy": "Հաց, հավի միս, Մոցարելլա, Հազար, Վարունգ, Լոլիկ, Պեստո",
      "ru": "Хлеб, Курица, Моцарелла, Салат Латук, Огурец, Помидор, Песто",
      "en": "Bread, Chicken, Mozzarella, Lettuce, Cucumber, Tomato, Pesto"
    },
    "price": 2500,
    "image": "/menu/506484.webp"
  },
  {
    "id": "506486",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Չիքեն Պեստո Քրասթի 15սմ",
      "ru": "Красти с курицей и песто 15см",
      "en": "Chicken Pesto Crusty 15cm"
    },
    "descriptions": {
      "hy": "Հաց, հավի միս, Մոցարելլա, Հազար, Վարունգ, Լոլիկ, Պեստո",
      "ru": "Хлеб, Курица, Моцарелла, Салат Латук, Огурец, Помидор, Песто",
      "en": "Bread, Chicken, Mozzarella, Lettuce, Cucumber, Tomato, Pesto"
    },
    "price": 1500,
    "image": "/menu/506486.webp"
  },
  {
    "id": "506497",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Չիքեն Տերյակի Քրասթի 30սմ",
      "ru": "Чикен Терияки Красти 30см",
      "en": "Chicken Teriyaki Crusty 30cm"
    },
    "descriptions": {
      "hy": "Քունջութով հաց, Հավի միս, Մոցարելլա, Հազար, Վարունգ, Լոլիկ, Պղպեղ, Կարմիր Սոխ, Տերյակի",
      "ru": "Хлеб с кунжутными семечками, Курица, Моцарелла, Салат Латук, Огурец, Помидор, Перец, Красный лук, Соус Терияки",
      "en": "Sesame Bread, Chicken, Mozzarella, Lettuce, Cucumber, Tomato, Pepper, Red Onions, Teriyakki"
    },
    "price": 2500,
    "image": "/menu/506497.webp"
  },
  {
    "id": "506498",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Չիքեն Տերյակի Քրասթի 15սմ",
      "ru": "Чикен Терияки Красти 15см",
      "en": "Chicken Teriyaki Crusty 15cm"
    },
    "descriptions": {
      "hy": "Քունջութով հաց, Հավի միս, Մոցարելլա, Հազար, Վարունգ, Լոլիկ, Պղպեղ, Կարմիր Սոխ, Տերյակի",
      "ru": "Хлеб с кунжутными семечками, Курица, Моцарелла, Салат Латук, Огурец, Помидор, Перец, Красный лук, Соус Терияки",
      "en": "Sesame Bread, Chicken, Mozzarella, Lettuce, Cucumber, Tomato, Pepper, Red Onion, Teriyakki"
    },
    "price": 1400,
    "image": "/menu/506498.webp"
  },
  {
    "id": "506499",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Քլաբ Քրասթվիչ 30սմ",
      "ru": "Клаб Краствич 30см",
      "en": "Club Crustwich 30cm"
    },
    "descriptions": {
      "hy": "Հաց, Հավի միս, Պարմեզան, Ավոկադո, Լոլիկ, Պեստո",
      "ru": "Хлеб, Курица, Пармезан, Авокадо, Помидор, Песто",
      "en": "Bread, Chicken, Parmesan, Avacado, Tomato, Pesto"
    },
    "price": 2500,
    "image": "/menu/506499.webp"
  },
  {
    "id": "506500",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Քլաբ Քրասթվիչ 15սմ",
      "ru": "Клаб Краствич 15см",
      "en": "Club Crustwich 15cm"
    },
    "descriptions": {
      "hy": "Հաց, Հավի միս, Պարմեզան, Ավոկադո, Լոլիկ, Պեստո",
      "ru": "Хлеб, Курица, Пармезан, Авокадо, Помидор, Песто",
      "en": "Bread, Chicken, Parmesan, Avacado, Tomato, Pesto"
    },
    "price": 1400,
    "image": "/menu/506500.webp"
  },
  {
    "id": "506505",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Թունավիչ 30սմ",
      "ru": "Тунавич 30см",
      "en": "Tunawich 30cm"
    },
    "descriptions": {
      "hy": "Հաց, Թունա, Ձիթապտուղ, Հազար, Կարմիր Սոխ, Լոլիկ, Վարունգ, Մայոնեզ",
      "ru": "Хлеб, Тунец, Оливки, Салат Латук, Красный лук, Помидор, Огурец, Майонез",
      "en": "Bread, Tuna, Olives, Lettuce, Red Onions, Tomato, Cucumber, Mayonisse"
    },
    "price": 3550,
    "image": "/menu/506505.webp"
  },
  {
    "id": "506506",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Թունավիչ 15սմ",
      "ru": "Тунавич 15см",
      "en": "Tunawich 15cm"
    },
    "descriptions": {
      "hy": "Հաց, Թունա, Ձիթապտուղ, Հազար, Կարմիր Սոխ, Լոլիկ, Վարունգ, Մայոնեզ",
      "ru": "Хлеб, Тунец, Оливки, Салат Латук, Красный лук, Помидор, Огурец, Майонез",
      "en": "Bread, Tuna, Olives, Lettuce, Red Onions, Tomato, Cucumber, Mayonisse"
    },
    "price": 2390,
    "image": "/menu/506506.webp"
  },
  {
    "id": "506509",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Վեջջի Քրասթի 30սմ",
      "ru": "Веджи Красти 30см",
      "en": "Veggie Crusty 30cm"
    },
    "descriptions": {
      "hy": "Սև հաց, Ձիթապտուղ, Հազար, Լոլիկ, Եգիպտացորեն, Վարունգ, Պղպեղ, Սոխ",
      "ru": "Чёрный хлеб, Оливки, Салат Латук, Помидо, Кукуруза, Огурец, Перец, Лук",
      "en": "Black Bread, Olives, Lettuce, Tomato, Corn, Cucumber, Pepper, Onions"
    },
    "price": 1600,
    "image": "/menu/506509.webp"
  },
  {
    "id": "506510",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Վեջջի Քրասթի 15սմ",
      "ru": "Веджи Красти 15см",
      "en": "Veggie Crusty 15cm"
    },
    "descriptions": {
      "hy": "Սև հաց, Ձիթապտուղ, Հազար, Լոլիկ, Եգիպտացորեն, Վարունգ, Պղպեղ, Սոխ",
      "ru": "Чёрный хлеб, Оливки, Салат Латук, Помидо, Кукуруза, Огурец, Перец, Лук",
      "en": "Black Bread, Olives, Lettuce, Tomato, Corn, Cucumber, Pepper, Onions"
    },
    "price": 1000,
    "image": "/menu/506510.webp"
  },
  {
    "id": "506511",
    "category": "Salads",
    "names": {
      "hy": "Կեսար աղցան",
      "ru": "Салат Цезарь",
      "en": "Caesar salad"
    },
    "descriptions": {
      "hy": "Հազար, Չորահաց, Չերրի լոլիկ, Հավի միս, Կեսար սոուս, Պարմեզան",
      "ru": "Салат Латук, Сухарики, Помидоры черри, Курица, Соус Цезарь, Пармезан",
      "en": "Lettuce, Croutons, Cherry Tomato, Chicken, Ceaser Sauce, Parmesan"
    },
    "price": 2000,
    "image": "/menu/506511.webp"
  },
  {
    "id": "506514",
    "category": "Bites",
    "names": {
      "hy": "Նագեթներ",
      "ru": "Наггетсы",
      "en": "Nuggets"
    },
    "descriptions": {
      "hy": "7 հավի նագեթ",
      "ru": "7 куриных наггетсов",
      "en": "7 chicken nuggets/bites"
    },
    "price": 920,
    "image": "/menu/506514.webp"
  },
  {
    "id": "506515",
    "category": "Bites",
    "names": {
      "hy": "Համեմված ֆրի",
      "ru": "Приправленный картофель фри",
      "en": "Seasoned French fries"
    },
    "descriptions": {
      "hy": "Աղ, Ֆրի, Օրեգանո, Պապրիկա",
      "ru": "Картофель, Солъ, Орегано, Паприка",
      "en": "Salt, Fries, Oregano, Paprika"
    },
    "price": 800,
    "image": "/menu/506515.webp"
  },
  {
    "id": "506516",
    "category": "Bites",
    "names": {
      "hy": "Ֆրի",
      "ru": "Картофель фри",
      "en": "French fries"
    },
    "descriptions": {
      "hy": "260գ",
      "ru": "260г",
      "en": "260g"
    },
    "price": 600,
    "image": "/menu/506516.webp"
  },
  {
    "id": "506520",
    "category": "Sauce",
    "names": {
      "hy": "Պանրային սոուս",
      "ru": "Сырный соус",
      "en": "Cheese sauce"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506520.webp"
  },
  {
    "id": "506521",
    "category": "Sauce",
    "names": {
      "hy": "Դասական սոուս",
      "ru": "Классический соус",
      "en": "Classic sauce"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506521.webp"
  },
  {
    "id": "506522",
    "category": "Sauce",
    "names": {
      "hy": "Կետչուպ",
      "ru": "Кетчуп",
      "en": "Ketchup"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506522.webp"
  },
  {
    "id": "506523",
    "category": "Sauce",
    "names": {
      "hy": "Մեջիք",
      "ru": "Меджик",
      "en": "Magic"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506523.webp"
  },
  {
    "id": "506524",
    "category": "Sauce",
    "names": {
      "hy": "Մայոնեզ",
      "ru": "Майонез",
      "en": "Mayonnaise"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506524.webp"
  },
  {
    "id": "506525",
    "category": "Sauce",
    "names": {
      "hy": "Chipottle",
      "ru": "Chipottle",
      "en": "Chipottle"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506525.webp"
  },
  {
    "id": "506526",
    "category": "Sauce",
    "names": {
      "hy": "Պեստո սոուս",
      "ru": "Песто соус",
      "en": "Pesto sauce"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506526.webp"
  },
  {
    "id": "506527",
    "category": "Sauce",
    "names": {
      "hy": "Կծու սոուս",
      "ru": "Острый соус",
      "en": "Hot sauce"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506527.webp"
  },
  {
    "id": "506528",
    "category": "Sauce",
    "names": {
      "hy": "Տերիյակի",
      "ru": "Терияки",
      "en": "Teriyaki"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506528.webp"
  },
  {
    "id": "506529",
    "category": "Sauce",
    "names": {
      "hy": "Ձաձիկի",
      "ru": "Дзадзики",
      "en": "Dzadziki"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506529.webp"
  },
  {
    "id": "506906",
    "category": "Drinks",
    "names": {
      "hy": "Կոկա-Կոլա 500մլ",
      "ru": "Кока-Кола 500мл",
      "en": "Coca Cola 500ml"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 500,
    "image": "/menu/506906.webp"
  },
  {
    "id": "506908",
    "category": "Drinks",
    "names": {
      "hy": "Ֆանտա 500մլ",
      "ru": "Фанта 500мл",
      "en": "Fanta 500ml"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 500,
    "image": "/menu/506908.webp"
  },
  {
    "id": "506909",
    "category": "Drinks",
    "names": {
      "hy": "Սփրայթ 500մլ",
      "ru": "Спрайт 500мл",
      "en": "Sprite 500ml"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 500,
    "image": "/menu/506909.webp"
  },
  {
    "id": "506913",
    "category": "Drinks",
    "names": {
      "hy": "Փալփի 450մլ",
      "ru": "Палпи 450мл",
      "en": "Pulpy 450ml"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 500,
    "image": "/menu/506913.webp"
  },
  {
    "id": "506914",
    "category": "Drinks",
    "names": {
      "hy": "Դոբրի 300մլ",
      "ru": "Добрый 300мл",
      "en": "Dobriy 300ml"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 500,
    "image": "/menu/506914.webp"
  },
  {
    "id": "506916",
    "category": "Drinks",
    "names": {
      "hy": "Դոբրի 200մլ",
      "ru": "Добрый 200мл",
      "en": "Dobriy 200ml"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 500,
    "image": "/menu/506916.webp"
  },
  {
    "id": "506917",
    "category": "Drinks",
    "names": {
      "hy": "Բոնակվա 500մլ",
      "ru": "Бонаква 500мл",
      "en": "Bonaqua 500ml"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 300,
    "image": "/menu/506917.webp"
  },
  {
    "id": "506918",
    "category": "Drinks",
    "names": {
      "hy": "Ֆյուզ թեյ 500մլ",
      "ru": "Фьюзти 500мл",
      "en": "Fuze Tea 500ml"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 500,
    "image": "/menu/506918.webp"
  },
  {
    "id": "506919",
    "category": "Drinks",
    "names": {
      "hy": "Թան",
      "ru": "Тан",
      "en": "Tan"
    },
    "descriptions": {
      "hy": "Հատուկ քրասթի թան",
      "ru": "Особенный волшебный тан",
      "en": "Special crusty made tan"
    },
    "price": 500,
    "image": "/menu/506919.webp"
  },
  {
    "id": "506923",
    "category": "Sauce",
    "names": {
      "hy": "Բարբիքյու սոուս",
      "ru": "Барбекю соус",
      "en": "BBQ sauce"
    },
    "descriptions": {
      "hy": "30մլ",
      "ru": "30мл",
      "en": "30ml"
    },
    "price": 190,
    "image": "/menu/506923.webp"
  },
  {
    "id": "506924",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Քրասթի 30սմ",
      "ru": "Красти 30см",
      "en": "Crusty 30cm"
    },
    "descriptions": {
      "hy": "Մեր յուրահատուկ սենդվիչը",
      "ru": "Наш специальный сэндвич",
      "en": "Our special sandwich"
    },
    "price": 2600,
    "image": "/menu/506924.webp"
  },
  {
    "id": "506925",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Քրասթի 15սմ",
      "ru": "Красти 15см",
      "en": "Crusty 15cm"
    },
    "descriptions": {
      "hy": "Մեր յուրահատուկ սենդվիչը",
      "ru": "Наш специальный сэндвич",
      "en": "Our special sandwich"
    },
    "price": 1500,
    "image": "/menu/506925.webp"
  },
  {
    "id": "506926",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Բուֆալվիչ 30սմ",
      "ru": "Буфалвич 30см",
      "en": "Buffalwich 30cm"
    },
    "descriptions": {
      "hy": "Հավ, բուֆֆալո սոուս, մոցարելա պանիր, լոլիկ, սոխ, հազար, ձիթապտուղ",
      "ru": "Курица, соус бyффало, сыр моцарелла, помидоры, лук, листья салата, оливки",
      "en": "Chicken, buffalo sauce, mozzarella cheese, tomato, onion, lettuce, olives"
    },
    "price": 2500,
    "image": "/menu/506926.webp"
  },
  {
    "id": "506927",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Բուֆալվիչ 15սմ",
      "ru": "Буфалвич 15см",
      "en": "Buffalwich 15cm"
    },
    "descriptions": {
      "hy": "Հավ, բուֆֆալո սոուս, մոցարելա պանիր, լոլիկ, սոխ, հազար, ձիթապտուղ",
      "ru": "Курица, соус бyффало, сыр моцарелла, помидоры, лук, листья салата, оливки",
      "en": "Chicken, buffalo sauce, mozzarella cheese, tomato, onion, lettuce, olives"
    },
    "price": 1400,
    "image": "/menu/506927.webp"
  },
  {
    "id": "665543",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Հավի Բարբեքյու 15սմ",
      "ru": "Куриное барбекю 15 см",
      "en": "Chicken BBQ 15cm"
    },
    "descriptions": {
      "hy": "Հաց, Հավի կրծքամիս, Չեդր պանիր, Բարբիքյու սոուս, Լոլիկ, Վարունգ, Քաղցր կանաչ պղպեղ, Հազար",
      "ru": "Хлеб, Куриная грудка, сыр Чеддер, Соус барбекю, Помидор, Огурец, Сладкий зеленый перец, Листья салата",
      "en": "Bread, Chicken breast, Cheddar cheese, Barbecue sauce, Tomato, Cucumber, Sweet green pepper, Lettuce"
    },
    "price": 1400,
    "image": "/menu/665543.jpg"
  },
  {
    "id": "665544",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Հավի Բեկոն 15սմ",
      "ru": "Куриный бекон 15 см",
      "en": "Chicken Bacon 15 cm"
    },
    "descriptions": {
      "hy": "Հավի կրծքամիս, Բեկոն, Չեդր պանիր, Դասական սոուս, Լոլիկ, Վարունգ, Քաղցր պղպեղ, Կարմիր սոխ, Գանգուր Հազար",
      "ru": "Куриная грудка, Бекон, сыр Чеддер,  Классический соус, Помидор, Огурец, Сладкий перец, Красный лук,  Листья салата",
      "en": "Chicken breast, Bacon, Cheddar cheese,  Classic sauce, Tomato, Cucumber, Sweet pepper, Red onion, Lettuce"
    },
    "price": 1400,
    "image": "/menu/665544.jpg"
  },
  {
    "id": "665545",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Հավի Բեկոն 30սմ",
      "ru": "Куриный бекон 30 см",
      "en": "Chicken Bacon 30 cm"
    },
    "descriptions": {
      "hy": "Հավի կրծքամիս, Բեկոն, Չեդր պանիր, Դասական սոուս, Լոլիկ, Վարունգ, Քաղցր պղպեղ, Կարմիր սոխ, Գանգուր Հազար",
      "ru": "Куриная грудка, Бекон, сыр Чеддер,  Классический соус, Помидор, Огурец, Сладкий перец, Красный лук,  Листья салата",
      "en": "Chicken breast, Bacon, Cheddar cheese,  Classic sauce, Tomato, Cucumber, Sweet pepper, Red onion, Lettuce"
    },
    "price": 2500,
    "image": "/menu/665545.jpg"
  },
  {
    "id": "665546",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Հավի Թերիակի 15սմ",
      "ru": "Куриный терияки 15 см",
      "en": "Chicken Теriyaki 15 cm"
    },
    "descriptions": {
      "hy": "Հավի կրծքամիս, Մոցարելլա պանիր, Թերյակի սոուս, Լոլիկ, Քաղցր պղպեղ, Գանգուր Հազար",
      "ru": "Куриная грудка, сыр моцарелла, Соус Терияки, Помидор, Сладкий перец, Листья салата",
      "en": "Chicken breast, Mozzarella cheese, Teriyaki sauce, Tomato, Sweet pepper, Lettuce"
    },
    "price": 1400,
    "image": "/menu/665546.jpg"
  },
  {
    "id": "665547",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Հավի Թերիակի 30սմ",
      "ru": "Куриный терияки 30 см",
      "en": "Chicken Теriyaki 30 cm"
    },
    "descriptions": {
      "hy": "Հավի կրծքամիս, Մոցարելլա պանիր, Թերյակի սոուս, Լոլիկ, Քաղցր պղպեղ, Գանգուր Հազար",
      "ru": "Куриная грудка, сыр моцарелла, Соус Терияки, Помидор, Сладкий перец, Листья салата",
      "en": "Chicken breast, Mozzarella cheese, Teriyaki sauce, Tomato, Sweet pepper, Lettuce"
    },
    "price": 2500,
    "image": "/menu/665547.jpg"
  },
  {
    "id": "665550",
    "category": "Salads",
    "names": {
      "hy": "Հունական աղցան",
      "ru": "Греческий салат",
      "en": "Greek salad"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 2000,
    "image": "/menu/665550.jpg"
  },
  {
    "id": "665551",
    "category": "Drinks",
    "names": {
      "hy": "Էվիան 500մլ",
      "ru": "Эвиан 500мл",
      "en": "Evian 500ml"
    },
    "descriptions": {
      "hy": "",
      "ru": "",
      "en": ""
    },
    "price": 490,
    "image": "/menu/665551.jpg"
  },
  {
    "id": "665553",
    "category": "Combo",
    "names": {
      "hy": "Կոմբո Բուֆալվիչ",
      "ru": "Комбо Баффалович",
      "en": "Combo Buffalowich"
    },
    "descriptions": {
      "hy": "Բուֆալվիչ սենդվիչ 15սմ, Կարտոֆիլ ֆրի, Կոկա Կոլա",
      "ru": "Сэндвич «Баффалович» 15 см, картофель фри, Кока-Кола",
      "en": "Buffalowich sandwich 15cm, French fries, Coca Cola"
    },
    "price": 1999,
    "image": "/menu/665553.jpg"
  },
  {
    "id": "665554",
    "category": "Combo",
    "names": {
      "hy": "Կոմբո Հավի Պեստո",
      "ru": "Комбо Куриный Песто",
      "en": "Combo Chicken Pesto"
    },
    "descriptions": {
      "hy": "Հավի պեստո սենդվիչ 15սմ, Կարտոֆիլ ֆրի, Թան",
      "ru": "Куриный Песто сэндвич 15 см, картофель фри, Тан",
      "en": "Chicken pesto sandwich 15 cm, French fries, Tan"
    },
    "price": 1999,
    "image": "/menu/665554.jpg"
  },
  {
    "id": "665605",
    "category": "Combo",
    "names": {
      "hy": "Կոմբո Քլաբվիչ",
      "ru": "Комбо Клабвич",
      "en": "Combo Clubwich"
    },
    "descriptions": {
      "hy": "Քլաբ սենդվիչ 15սմ, Հավի նագեթներ, Թուրինջ թարմ քամած",
      "ru": "Клаб сэндвич 15см, Куриные наггетсы, Свежевыжатый грейпфрут",
      "en": "Club sandwich 15cm, Chicken nuggets, Freshly squeezed grapefruit"
    },
    "price": 2299,
    "image": "/menu/665605.jpg"
  },
  {
    "id": "665606",
    "category": "Combo",
    "names": {
      "hy": "Կոմբո Հավի Պիկնիկ",
      "ru": "Комбо Куриный Пикник",
      "en": "Combo Chicken Picnic"
    },
    "descriptions": {
      "hy": "Հունական աղցան, Հավի նագեթներ, Թան",
      "ru": "Греческий салат, Куриные наггетсы, Тан",
      "en": "Greek salad, Chicken nuggets, Than"
    },
    "price": 2499,
    "image": "/menu/665606.jpg"
  },
  {
    "id": "665607",
    "category": "Combo",
    "names": {
      "hy": "Կոմբո Քրասթի Բիֆ",
      "ru": "Комбо Красти Биф",
      "en": "Combo Crusty Beef"
    },
    "descriptions": {
      "hy": "Քրասթի Բիֆ 15սմ, Կարտոֆիլ ֆրի, Թուրինջ թարմ քամած",
      "ru": "Красти Биф 15см, картофель фри, Свежевыжатый грейпфрут",
      "en": "Crusty Beef 15cm, French fries, Freshly squeezed grapefruit"
    },
    "price": 2699,
    "image": "/menu/665607.jpg"
  },
  {
    "id": "665609",
    "category": "Combo",
    "names": {
      "hy": "Կոմբո Հեմ ընդ Չիզ",
      "ru": "Комбо Хэм Энд Чиз ",
      "en": "Combo Ham & Cheese"
    },
    "descriptions": {
      "hy": "Հեմ ընդ Չիզ սենդվիչ 15սմ, Կարտոֆիլ ֆրի, Կոկա-Կոլա",
      "ru": "Сэндвич с ветчиной и сыром 15 см , картофель фри, Кока-Кола",
      "en": "Ham and Cheese Sandwich 15cm, French Fries, Coca-Cola"
    },
    "price": 2199,
    "image": "/menu/665609.jpg"
  },
  {
    "id": "665610",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Չիքեն Մաշռում 15սմ",
      "ru": "Чикен Машрум 15 см",
      "en": "Chicken Mushroom 15 cm"
    },
    "descriptions": {
      "hy": "Հավի միս, Սունկ Ալֆրեդո սոուս, Մարինացված վարունգ, Հազար, Մոցարելլա պանիր, Մայոնեզ",
      "ru": "Куриное мясо, Грибной соус Альфредо, Маринованные огурцы, Листья салата, Сыр моцарелла, Майонез",
      "en": "Chicken, Mushroom Alfredo sauce, Marinated cucumber, Lettuce, Mozzarella cheese, Mayo"
    },
    "price": 1500,
    "image": "/menu/665610.jpg"
  },
  {
    "id": "665611",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Չիքեն Մաշռում 30սմ",
      "ru": "Чикен Машрум 30 см",
      "en": "Chicken Mushroom 30 cm"
    },
    "descriptions": {
      "hy": "Հավի միս, Սունկ Ալֆրեդո սոուս, Մարինացված վարունգ, Հազար, Մոցարելլա պանիր, Մայոնեզ",
      "ru": "Куриное мясо, Грибной соус Альфредо, Маринованные огурцы, Листья салата, Сыр моцарелла, Майонез",
      "en": "Chicken, Mushroom Alfredo sauce, Marinated cucumber, Lettuce, Mozzarella cheese, Mayo"
    },
    "price": 2600,
    "image": "/menu/665611.jpg"
  },
  {
    "id": "665612",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Չիքեն Բարբեքյու 15սմ",
      "ru": "Чикен Барбекю 15 см",
      "en": "Chicken BBQ 15 cm"
    },
    "descriptions": {
      "hy": "Հավի միս, Բարբեքյու սոուս, Չեդր պանիր, Լոլիկ, Վարունգ, Պղպեղ, Հազար",
      "ru": "Куриное мясо, Соус барбекю, сыр Чеддер, Помидор, Огурец, Перец, Листья салата",
      "en": "Chicken, BBQ sauce, Cheddar cheese, Tomato, Cucumber, Pepper, Lettuce"
    },
    "price": 1400,
    "image": "/menu/665612.jpg"
  },
  {
    "id": "665613",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Չիքեն Բարբեքյու 30սմ",
      "ru": "Чикен Барбекю 30 см",
      "en": "Chicken BBQ 30 cm"
    },
    "descriptions": {
      "hy": "Հավի միս, Բարբեքյու սոուս, Չեդր պանիր, Լոլիկ, Վարունգ, Պղպեղ, Հազար",
      "ru": "Куриное мясо, Соус барбекю, сыр Чеддер, Помидор, Огурец, Перец, Листья салата",
      "en": "Chicken, BBQ sauce, Cheddar cheese, Tomato, Cucumber, Pepper, Lettuce"
    },
    "price": 2500,
    "image": "/menu/665613.jpg"
  },
  {
    "id": "665614",
    "category": "Sandwiches 15cm",
    "names": {
      "hy": "Քլաբվիչ 15սմ",
      "ru": "Клабвич 15 см",
      "en": "Clubwich 15 cm"
    },
    "descriptions": {
      "hy": "Հավի միս, Պեստո սոուս, Լոլիկ Ավոկադո",
      "ru": "Куриное мясо, Соус песто, Помидор, Авокадо",
      "en": "Chicken, Pesto sauce, Tomato, Avocado"
    },
    "price": 1400,
    "image": "/menu/665614.jpg"
  },
  {
    "id": "665615",
    "category": "Sandwiches 30cm",
    "names": {
      "hy": "Քլաբվիչ 30սմ",
      "ru": "Клабвич 30 см",
      "en": "Clubwich 30 cm"
    },
    "descriptions": {
      "hy": "Հավի միս, Պեստո սոուս, Լոլիկ Ավոկադո",
      "ru": "Куриное мясо, Соус песто, Помидор, Авокадо",
      "en": "Chicken, Pesto sauce, Tomato, Avocado"
    },
    "price": 2500,
    "image": "/menu/665615.jpg"
  },
  {
    "id": "665617",
    "category": "Wraps",
    "names": {
      "hy": "Պիկասո",
      "ru": "Пикассо",
      "en": "Picasso"
    },
    "descriptions": {
      "hy": "Լոշիկ, Հավ սփայսի, Մանանեխ, Մայոնեզ, Լոլիկ, Հազար",
      "ru": "Лошик, Курица спайси, Горчица, Майонез, Помидор, Листья салата",
      "en": "Tortilla, Spicy Chicken, Mustard, Mayonnaise, Tomato, Lettuce"
    },
    "price": 1400,
    "image": "/menu/665617.jpg"
  }
];

const SITE = "https://crusty-and-more.vilensahakyan4.chatgpt.site";
const API = SITE + "/api/content";
const ORDER = ["Sandwiches 30cm","Sandwiches 15cm","Combo","Wraps","Bites","Salads","Sauce","Drinks"];
const CATEGORIES = {
  "Sandwiches 30cm":{hy:"Սենդվիչներ 30 սմ",ru:"Сэндвичи 30 см",en:"Sandwiches 30 cm"},
  "Sandwiches 15cm":{hy:"Սենդվիչներ 15 սմ",ru:"Сэндвичи 15 см",en:"Sandwiches 15 cm"},
  Combo:{hy:"Կոմբոներ",ru:"Комбо",en:"Combos"},Wraps:{hy:"Ռոլեր",ru:"Роллы",en:"Wraps"},
  Bites:{hy:"Խորտիկներ",ru:"Фри и закуски",en:"Fries & bites"},Salads:{hy:"Աղցաններ",ru:"Салаты",en:"Salads"},
  Sauce:{hy:"Սոուսներ",ru:"Соусы",en:"Sauces"},Drinks:{hy:"Ըմպելիքներ",ru:"Напитки",en:"Drinks"}
};
const WORDS = {
  hy:{nav:["Գլխավոր","Մենյու","Մեր մասին","Կապ"],kicker:"ԹԱՐՄ • ՏԱՔ • CRUSTY",title:"Քո սենդվիչը։<br>Քո կանոններով։",intro:"Թարմ բաղադրիչներ, ոսկեգույն խրթխրթան հաց և համեր, որոնց համար ուզում ես վերադառնալ։",menuButton:"Դիտել մենյուն",hours:"Ամեն օր՝ 10:00–22:00",orderTitle:"Ընտրիր առաքման եղանակը",orderText:"Մենյուն դիտիր այստեղ, իսկ պատվերը կատարիր քեզ հարմար հարթակում։",menuKicker:"ԱՄԲՈՂՋ ՄԵՆՅՈՒՆ",menuTitle:"Ամեն ինչ՝ մեկ տեղում։",menuIntro:"Բոլոր սենդվիչները, կոմբոները, խորտիկները, աղցանները, սոուսները և ըմպելիքները։",builderKicker:"CRUSTY LAB",promoTitle:"Հավաքիր քո Crusty-ն",promoText:"Ընտրիր բաղադրիչները, բարձրացրու համի մակարդակը և ստեղծիր քո սենդվիչը։",promoButton:"Խաղալ և հավաքել",heroGameKicker:"ԽԱՂԱ ԵՎ ՀԱՎԱՔԻՐ",heroGameTitle:"CRUSTY RUSH",heroGameButton:"ԽԱՂԱԼ",scoreLabel:"ՄԻԱՎՈՐ",flavorLabel:"ՀԱՄԻ ՄԱԿԱՐԴԱԿ",gameRandom:"Անակնկալ ինձ",rushTitle:"CRUSTY RUSH",rushHint:"Հիշիր պատվերը և հավաքիր բաղադրիչները ճիշտ հերթականությամբ։",orderLabel:"ՊԱՏՎԵՐ",timerLabel:"ԺԱՄԱՆԱԿ",livesLabel:"ԿՅԱՆՔԵՐ",rushStart:"ՍԿՍԵԼ ԽԱՂԸ",builderTitle:"Ստեղծիր քո սենդվիչը",builderIntro:"Տես՝ ինչպես են թարմ բաղադրիչները միավորվում մեկ խրթխրթան սենդվիչի մեջ, հետո հավաքիր քոնը։",demoTitle:"Սենդվիչի անատոմիա",demoCaption:"Քանդվում է։ Հավաքվում է։ Միշտ Crusty։",gameTitle:"Հավաքիր քո Crusty-ն",gameHint:"Սեղմիր բաղադրիչների վրա և ստեղծիր քո տարբերակը։",gameReset:"Սկսել նորից",gameFinish:"Պատրաստ է!",aboutKicker:"ՄԵՐ ՄԱՍԻՆ",aboutTitle:"Պատրաստվում է հենց քո աչքի առաջ",aboutText:"Crusty Sandwiches & More-ը Երևանի սրտում ստեղծված արագ ու թարմ սննդի կոնցեպտ է։ Յուրաքանչյուր պատվերը պատրաստում ենք տեղում։",address:"Մաշտոցի պողոտա 5, Երևան 0002",map:"Բացել քարտեզը ↗"},
  ru:{nav:["Главная","Меню","О нас","Контакты"],kicker:"СВЕЖО • ГОРЯЧО • CRUSTY",title:"Твой сэндвич.<br>Твои правила.",intro:"Свежие ингредиенты, золотистый хрустящий хлеб и вкусы, за которыми хочется возвращаться.",menuButton:"Смотреть меню",hours:"Каждый день: 10:00–22:00",orderTitle:"Выберите способ заказа",orderText:"Смотрите всё меню здесь, а заказ оформляйте на удобной платформе.",menuKicker:"ПОЛНОЕ МЕНЮ",menuTitle:"Всё меню — прямо здесь.",menuIntro:"Все сэндвичи, комбо, закуски, салаты, соусы и напитки по разделам.",builderKicker:"CRUSTY LAB",promoTitle:"Собери свой Crusty",promoText:"Выбирай ингредиенты, повышай уровень вкуса и создай свой фирменный сэндвич.",promoButton:"Играй и собирай",heroGameKicker:"ИГРАЙ И СОБИРАЙ",heroGameTitle:"CRUSTY RUSH",heroGameButton:"ИГРАТЬ",scoreLabel:"СЧЁТ",flavorLabel:"УРОВЕНЬ ВКУСА",gameRandom:"Удиви меня",rushTitle:"CRUSTY RUSH",rushHint:"Запомни заказ и собери ингредиенты в правильном порядке.",orderLabel:"ЗАКАЗ",timerLabel:"ВРЕМЯ",livesLabel:"ЖИЗНИ",rushStart:"НАЧАТЬ ИГРУ",builderTitle:"Создай свой сэндвич",builderIntro:"Посмотри, как свежие ингредиенты превращаются в один хрустящий сэндвич, а потом собери свой.",demoTitle:"Анатомия сэндвича",demoCaption:"Разбирается. Собирается. Всегда Crusty.",gameTitle:"Собери свой Crusty",gameHint:"Нажимай на ингредиенты и создавай свой вариант.",gameReset:"Начать заново",gameFinish:"Готово!",aboutKicker:"О НАС",aboutTitle:"Готовим прямо на твоих глазах",aboutText:"Crusty Sandwiches & More — концепция быстрой и свежей еды в центре Еревана. Каждый заказ готовим на месте.",address:"проспект Месропа Маштоца, 5, Ереван 0002",map:"Открыть карту ↗"},
  en:{nav:["Home","Menu","About","Contact"],kicker:"FRESH • TOASTY • CRUSTY",title:"Your sandwich.<br>Your rules.",intro:"Fresh ingredients, golden crusty bread and flavors worth coming back for.",menuButton:"Explore menu",hours:"Open daily: 10:00–22:00",orderTitle:"Choose how to order",orderText:"Browse the full menu here, then order on the platform you prefer.",menuKicker:"FULL MENU",menuTitle:"The whole menu. Right here.",menuIntro:"Every sandwich, combo, bite, salad, sauce and drink, organized by category.",builderKicker:"CRUSTY LAB",promoTitle:"Build your Crusty",promoText:"Choose ingredients, level up the flavor and create your signature sandwich.",promoButton:"Play and build",heroGameKicker:"PLAY AND BUILD",heroGameTitle:"CRUSTY RUSH",heroGameButton:"PLAY",scoreLabel:"SCORE",flavorLabel:"FLAVOR LEVEL",gameRandom:"Surprise me",rushTitle:"CRUSTY RUSH",rushHint:"Remember the order and stack every ingredient in the right sequence.",orderLabel:"ORDER",timerLabel:"TIME",livesLabel:"LIVES",rushStart:"START GAME",builderTitle:"Build your sandwich",builderIntro:"Watch fresh ingredients become one golden, crusty sandwich — then create your own.",demoTitle:"Sandwich anatomy",demoCaption:"Breaks apart. Comes together. Always Crusty.",gameTitle:"Build your Crusty",gameHint:"Tap ingredients and create your own combination.",gameReset:"Start over",gameFinish:"Done!",aboutKicker:"OUR STORY",aboutTitle:"Made fresh, right in front of you",aboutText:"Crusty Sandwiches & More is a fast, fresh food concept in central Yerevan. Every order is made on the spot.",address:"5 Mesrop Mashtots Ave, Yerevan 0002",map:"Get directions ↗"}
};
let lang = localStorage.getItem("crusty-lang") || "hy";
let products = PRODUCTS;

function asset(url){return url && url.startsWith("/") ? SITE + url : url}
function money(value){return new Intl.NumberFormat("ru-RU").format(value) + " ֏"}
function slug(value){return "cat-" + value.toLowerCase().replace(/[^a-z0-9]+/g,"-")}
function setLanguage(next){
  lang=next;localStorage.setItem("crusty-lang",lang);document.documentElement.lang=lang;
  document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  const w=WORDS[lang];
  document.querySelectorAll("[data-text]").forEach(el=>{const key=el.dataset.text;if(w[key])el.innerHTML=w[key]});
  document.querySelectorAll("[data-nav]").forEach((el,i)=>el.textContent=w.nav[i]);
  renderMenu();
  renderBuilderLabels();
}
function cardMarkup(p){
  const name=p.names[lang]||p.names.en;
  const description=p.descriptions[lang]||p.descriptions.en||"";
  return '<article class="card reveal"><div class="card-image"><img loading="lazy" src="'+asset(p.image)+'" alt="'+name.replaceAll('"','&quot;')+'"></div><div class="card-body"><h4>'+name+'</h4><p>'+description+'</p><strong>'+money(p.price)+'</strong></div></article>';
}
function renderMenu(){
  const nav=document.getElementById("categoryNav");
  nav.innerHTML=ORDER.map(c=>{const count=products.filter(p=>p.category===c).length;return count?'<button type="button" data-open-category="'+c+'">'+CATEGORIES[c][lang]+' <span>'+count+'</span></button>':""}).join("");
  document.getElementById("menuRoot").innerHTML=ORDER.map(c=>{
    const items=products.filter(p=>p.category===c);if(!items.length)return "";
    return '<section class="menu-category reveal" id="'+slug(c)+'"><div class="category-heading"><h3>'+CATEGORIES[c][lang]+'</h3><span>'+items.length+'</span><button class="category-open" type="button" data-open-category="'+c+'">↗</button></div><div class="menu-grid">'+items.map(cardMarkup).join("")+'</div></section>';
  }).join("");
  setupReveals();
  const modal=document.getElementById("menuModal");
  if(modal.classList.contains("is-open")&&modal.dataset.category)fillCategoryModal(modal.dataset.category);
}
function fillCategoryModal(category){
  const items=products.filter(p=>p.category===category);
  document.getElementById("modalTitle").textContent=CATEGORIES[category][lang];
  document.getElementById("modalGrid").innerHTML=items.map(cardMarkup).join("");
}
function openCategoryModal(category){
  const modal=document.getElementById("menuModal");
  modal.dataset.category=category;fillCategoryModal(category);
  modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");
  document.body.classList.add("modal-open");
  setTimeout(()=>modal.querySelector(".menu-modal-close").focus(),120);
}
function closeCategoryModal(){
  const modal=document.getElementById("menuModal");
  modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true");
  document.body.classList.remove("modal-open");
}
let revealObserver;
function setupReveals(){
  if(!("IntersectionObserver" in window)){document.querySelectorAll(".reveal").forEach(el=>el.classList.add("is-visible"));return}
  if(!revealObserver)revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");revealObserver.unobserve(entry.target)}}),{threshold:.08,rootMargin:"0px 0px -30px"});
  document.querySelectorAll(".reveal:not(.is-visible)").forEach(el=>revealObserver.observe(el));
}
const BUILDER_INGREDIENTS=[
  {id:"lettuce",names:{hy:"Հազար",ru:"Салат",en:"Lettuce"}},
  {id:"tomato",names:{hy:"Լոլիկ",ru:"Помидор",en:"Tomato"}},
  {id:"cheese",names:{hy:"Պանիր",ru:"Сыр",en:"Cheese"}},
  {id:"chicken",names:{hy:"Հավ",ru:"Курица",en:"Chicken"}},
  {id:"beef",names:{hy:"Տավար",ru:"Говядина",en:"Beef"}},
  {id:"bacon",names:{hy:"Բեկոն",ru:"Бекон",en:"Bacon"}},
  {id:"onion",names:{hy:"Սոխ",ru:"Лук",en:"Onion"}},
  {id:"sauce",names:{hy:"Սոուս",ru:"Соус",en:"Sauce"}}
];
const RUSH_COPY={
  hy:{idle:"Սեղմիր «Սկսել խաղը»",go:"Հավաքիր առաջին բաղադրիչը!",right:"Ճիշտ է! Շարունակի՛ր",wrong:"Սխալ բաղադրիչ։ Փորձիր նորից",win:"Պատվերը պատրաստ է։ Դու Crusty Master ես!",lose:"Խաղն ավարտվեց։ Փորձիր նորից"},
  ru:{idle:"Нажми «Начать игру»",go:"Собери первый ингредиент!",right:"Правильно! Продолжай",wrong:"Не тот ингредиент — попробуй ещё",win:"Заказ готов! Ты Crusty Master!",lose:"Игра окончена — попробуй ещё раз"},
  en:{idle:"Press Start Game",go:"Stack the first ingredient!",right:"Correct! Keep going",wrong:"Wrong ingredient — try again",win:"Order ready! You are a Crusty Master!",lose:"Game over — try again"}
};
let builderLayers=[],rushRecipe=[],rushIndex=0,rushScore=0,rushLives=3,rushTime=30,rushActive=false,rushWon=false,rushClock;
function ingredientById(id){return BUILDER_INGREDIENTS.find(item=>item.id===id)}
function makeRushRecipe(){return [...BUILDER_INGREDIENTS].sort(()=>Math.random()-.5).slice(0,5+Math.floor(Math.random()*2)).map(item=>item.id)}
function renderBuilderLabels(){
  const tray=document.getElementById("ingredientTray");if(!tray)return;
  tray.innerHTML=BUILDER_INGREDIENTS.map(item=>'<button type="button" class="ingredient-choice" data-build-ingredient="'+item.id+'" '+(rushActive?"":"disabled")+'><span class="ingredient-swatch '+item.id+'"></span><b>'+item.names[lang]+'</b><small>+</small></button>').join("");
  renderRush();
}
function renderRush(){
  const stack=document.getElementById("gameStack"),status=document.getElementById("gameStatus");if(!stack||!status)return;
  const layers=["bread-bottom",...builderLayers];if(rushWon)layers.push("bread-top");
  stack.innerHTML=layers.map((id,i)=>'<div class="stack-layer '+id+'" style="--layer-index:'+i+'"></div>').join("");
  const order=document.getElementById("rushOrder");
  if(order)order.innerHTML=(rushRecipe.length?rushRecipe:makeRushRecipe()).map((id,i)=>{const item=ingredientById(id);return '<span class="'+(i<rushIndex?"done":i===rushIndex&&rushActive?"current":"")+'"><i class="ingredient-swatch '+id+'"></i><b>'+item.names[lang]+'</b></span>'}).join("");
  document.getElementById("gameScore").textContent=String(rushScore).padStart(3,"0");
  document.getElementById("rushTimer").textContent=String(rushTime).padStart(2,"0");
  document.getElementById("rushLives").textContent="♥ ".repeat(rushLives)+"♡ ".repeat(3-rushLives);
  status.textContent=rushWon?RUSH_COPY[lang].win:(rushActive?(rushIndex?RUSH_COPY[lang].right:RUSH_COPY[lang].go):(rushLives<=0||rushTime<=0?RUSH_COPY[lang].lose:RUSH_COPY[lang].idle));
}
function startRush(){
  clearInterval(rushClock);builderLayers=[];rushRecipe=makeRushRecipe();rushIndex=0;rushScore=0;rushLives=3;rushTime=30;rushActive=true;rushWon=false;
  renderBuilderLabels();document.querySelector(".builder-modal-panel")?.classList.remove("rush-fail");
  rushClock=setInterval(()=>{rushTime--;renderRush();if(rushTime<=0)endRush(false)},1000);
}
function chooseRushIngredient(id){
  if(!rushActive)return;
  if(id===rushRecipe[rushIndex]){
    builderLayers.push(id);rushIndex++;rushScore+=150+rushTime*2;renderRush();
    document.querySelector("#gameStack .stack-layer:last-child")?.classList.add("just-added");
    if(rushIndex>=rushRecipe.length)endRush(true);
  }else{
    rushLives--;rushScore=Math.max(0,rushScore-75);renderRush();
    const panel=document.querySelector(".builder-modal-panel");panel?.classList.remove("rush-wrong");void panel?.offsetWidth;panel?.classList.add("rush-wrong");
    document.getElementById("gameStatus").textContent=RUSH_COPY[lang].wrong;
    if(rushLives<=0)endRush(false);
  }
}
function endRush(won){
  clearInterval(rushClock);rushActive=false;rushWon=won;if(won){rushScore+=rushTime*20;renderRush();launchConfetti();const pop=document.getElementById("gamePop");pop.classList.remove("show");void pop.offsetWidth;pop.classList.add("show");document.querySelector(".builder-modal-panel")?.classList.add("celebrate");setTimeout(()=>document.querySelector(".builder-modal-panel")?.classList.remove("celebrate"),1000)}else{renderRush();document.querySelector(".builder-modal-panel")?.classList.add("rush-fail")}
  document.querySelectorAll("[data-build-ingredient]").forEach(button=>button.disabled=true);
}
function resetBuilder(){clearInterval(rushClock);builderLayers=[];rushRecipe=[];rushIndex=0;rushScore=0;rushLives=3;rushTime=30;rushActive=false;rushWon=false;document.getElementById("gamePop")?.classList.remove("show");document.getElementById("gameConfetti")?.replaceChildren();renderBuilderLabels()}
function launchConfetti(){const box=document.getElementById("gameConfetti");if(!box)return;box.innerHTML=Array.from({length:38},(_,i)=>'<i style="--x:'+((i*37)%100)+'%;--d:'+((i%7)*.08)+'s;--r:'+((i*67)%360)+'deg;--c:'+(i%3)+'"></i>').join("");setTimeout(()=>box.replaceChildren(),1900)}
function openBuilderGame(){const modal=document.getElementById("builderModal");modal.classList.add("is-open");modal.setAttribute("aria-hidden","false");document.body.classList.add("modal-open","game-open");modal.querySelector(".builder-modal-panel").scrollTop=0;resetBuilder();setTimeout(()=>modal.querySelector(".builder-modal-close")?.focus(),120)}
function closeBuilderGame(){clearInterval(rushClock);rushActive=false;const modal=document.getElementById("builderModal");modal.classList.remove("is-open");modal.setAttribute("aria-hidden","true");document.body.classList.remove("modal-open","game-open")}
async function loadAdminContent(){
  try{
    const response=await fetch(API,{mode:"cors"});if(!response.ok)return;
    const data=await response.json(),c=data.content||{};
    if(c.theme){document.documentElement.style.setProperty("--g",c.theme.green||"#287841");document.documentElement.style.setProperty("--y",c.theme.yellow||"#ffc900");document.documentElement.style.setProperty("--cream",c.theme.cream||"#f7f2e7")}
    if(c.logo)document.querySelectorAll('img[src*="logo.jpg"],#logo').forEach(img=>img.src=asset(c.logo));
    if(c.heroImage&&document.getElementById("heroImage"))document.getElementById("heroImage").src=asset(c.heroImage);
    if(Array.isArray(c.products)&&c.products.length>=20){
      products=c.products.map((p,i)=>{const base=PRODUCTS.find(x=>x.id===p.id||x.names.en===p.name)||PRODUCTS[i];return {...base,image:p.image||base.image,price:Number(String(p.price).replace(/[^0-9]/g,""))||base.price,category:ORDER.includes(p.tag)?p.tag:base.category,names:{...base.names,en:p.name||base.names.en}}});
      renderMenu();
    }
  }catch(_){}
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.lang)));
document.getElementById("ingredientTray")?.addEventListener("click",event=>{const button=event.target.closest("[data-build-ingredient]");if(button)chooseRushIngredient(button.dataset.buildIngredient)});
document.getElementById("gameReset")?.addEventListener("click",resetBuilder);
document.getElementById("rushStart")?.addEventListener("click",startRush);
document.getElementById("openBuilder")?.addEventListener("click",openBuilderGame);
document.querySelectorAll("[data-builder-close]").forEach(button=>button.addEventListener("click",closeBuilderGame));

document.addEventListener("click",event=>{
  const opener=event.target.closest("[data-open-category]");
  if(opener){event.preventDefault();openCategoryModal(opener.dataset.openCategory);return}
  if(event.target.closest("[data-modal-close]"))closeCategoryModal();
});
document.addEventListener("keydown",event=>{if(event.key==="Escape"){closeCategoryModal();closeBuilderGame()}});
window.addEventListener("load",()=>setTimeout(()=>{document.body.classList.add("site-ready");document.getElementById("siteLoader")?.classList.add("is-hidden")},2200));
setLanguage(lang);loadAdminContent();setupReveals();


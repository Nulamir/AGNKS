var data = {
    "regions": [{
            "id": "all",
            "name": "Средневолжский филиал",
            "volume": 123.33,
            "num_exist": 42,
            "num_stroyka": 6,
            "people": 14.6,
            "center": [47.66, 54.076, 5.6],
            "geo_name": "Средневолжский филиал",
        },
        {
            "id": "penzenskaya-oblast",
            "name": "Пензенская область",
            "center": [53.15469, 44.55010, 7.7],
            "volume": 7.5,
            "num_exist": 1,
            "num_stroyka": 0,
            "people": 1.3,
            "geo_name": "Пензенская область"
        },
        {
            "id": "respublika-marij-el",
            "name": "Республика Марий Эл",
            "center": [56.56528, 47.87414, 8],
            "volume": 0,
            "num_exist": 0,
            "num_stroyka": 0,
            "people": 0.7,
            "geo_name": "Марий Эл"
        },
        {
            "id": "respublika-mordoviya",
            "name": "Республика Мордовия",
            "center": [54.32163, 44.37427, 8],
            "volume": 2.9,
            "num_exist": 1,
            "num_stroyka": 0,
            "people": 0.8,
            "geo_name": "Мордовия"
        },
        {
            "id": "respublica_tatarstan",
            "name": "Республика Татарстан",
            "center": [55.35661, 50.64124, 7.2],
            "volume": 51.8,
            "num_exist": 22,
            "num_stroyka": 2,
            "people": 3.9,
            "geo_name": "Татарстан"
        },
        {
            "id": "respublika-chuvashiya",
            "name": "Республика Чувашия",
            "center": [55.48645, 47.09189, 7.6],
            "volume": 13.1,
            "num_exist": 3,
            "num_stroyka": 0,
            "people": 1.2,
            "geo_name": "Чувашия"
        },
        {
            "id": "samarskaya-oblast",
            "name": "Самарская область",
            "center": [53.22850, 50.60078, 7],
            "volume": 24.1,
            "num_exist": 6,
            "num_stroyka": 3,
            "people": 3.1,
            "geo_name": "Самарская область"
        },
        {
            "id": "saratovskaya-oblast",
            "name": "Саратовская область",
            "center": [51.36579, 46.72267, 7],
            "volume": 15.9,
            "num_exist": 6,
            "num_stroyka": 1,
            "people": 2.4,
            "geo_name": "Саратовская область"
        },
        {
            "id": "ulyanovskaya-oblast",
            "name": "Ульяновская область",
            "center": [53.91406, 48.04385, 7.2],
            "volume": 8.03,
            "num_exist": 3,
            "num_stroyka": 0,
            "people": 1.2,
            "geo_name": "Ульяновская область"
        },
    ],
    "agnks_type": [{
            "id": "exist",
            "name": "Существующие АГНКС",
            "color": "#0071bb"
        },
        {
            "id": "stroyka",
            "name": "АГНКС строящиеся в 2021",
            "color": "#1D7373"
        },
        {
            "id": "plan",
            "name": "АГНКС планируемые к постройке в 2022",
            "color": "#FF8700"
        },
        {
            "id": "otkaz",
            "name": "АГНКС, исключенные из ИП 2022",
            "color": "#A60C00"
        }
    ]

};

let agnks = {
    "type": "FeatureCollection",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [{
            "type": "Feature",
            "properties": {
                "id": "kzn-1",
                "name": "АГНКС-1 г. Казань",
                "short_name": "Казань-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.00566, 55.87890, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "kzn-2",
                "name": "АГНКС-2 г. Казань",
                "short_name": "Казань-2",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.19067, 55.72748, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "kzn-3",
                "name": "АГНКС-3 г. Казань",
                "short_name": "Казань-3",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.27062, 55.80229, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "kzn-5",
                "name": "АГНКС-5 г. Казань",
                "short_name": "Казань-5",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.21525, 55.77218, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "alk-1",
                "name": "АГНКС-1 пгт. Алексеевское",
                "short_name": "Алексеевское-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.15621, 55.30885, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "bua-1",
                "name": "АГНКС-1 г. Буинск",
                "short_name": "Буинск-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.28278, 54.95426, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "zdk-1",
                "name": "АГНКС-1 г. Зеленодольск",
                "short_name": "Зеленодольск-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.46538, 55.83901, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "kul-1",
                "name": "АГНКС-1 с.п. Кулаевское",
                "short_name": "Кулаево-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.49346, 55.71711, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "ntr-1",
                "name": "АГНКС-1 с. Новая Тура",
                "short_name": "Новая Тура-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.83538, 55.86362, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "yan-1",
                "name": "АГНКС-1 д. Янтиково",
                "short_name": "Янтиково-1",
                "region_id": "respublika-chuvashiya",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [47.91801, 55.80536, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sin-1",
                "name": "АГНКС-1 с.п. Синьяльское",
                "short_name": "Синьяльское-1",
                "region_id": "respublika-chuvashiya",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [47.42308, 56.10167, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "chb-1",
                "name": "АГНКС-1 г. Чебоксары",
                "short_name": "Чебоксары-1",
                "region_id": "respublika-chuvashiya",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [47.23301, 56.08025, 7]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "id": "azn-1",
                "name": "АГНКС-1 г. Азнакаево",
                "short_name": "Азнакаево-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [53.08042, 54.84527, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "alm-1",
                "name": "АГНКС-1 г. Альметьевск",
                "short_name": "Альметьевск-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.40543, 54.85412, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "alm-2",
                "name": "АГНКС-2 г. Альметьевск",
                "short_name": "Альметьевск-2",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.27626, 54.88489, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "elb-1",
                "name": "АГНКС-1 г. Елабуга",
                "short_name": "Елабуга-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.00328, 55.77268, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "zay-1",
                "name": "АГНКС-1 г. Заинск",
                "short_name": "Заинск-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.01733, 55.30993, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "len-1",
                "name": "АГНКС-1 г. Лениногорск",
                "short_name": "Лениногорск-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.5181, 54.59855, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "mmd-1",
                "name": "АГНКС-1 г. Мамадыш",
                "short_name": "Мамадыш-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.33121, 55.65868, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "bgm-2",
                "name": "АГНКС-2 г. Бугульма",
                "short_name": "Бугульма-2",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.81804, 54.56592, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "nur-1",
                "name": "АГНКС-1 г. Нурлат",
                "short_name": "Нурлат-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.83359, 54.41824, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "nch-1",
                "name": "АГНКС-1 г. Набережные Челны",
                "short_name": "Набережные Челны-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.41911, 55.72052, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "nch-2",
                "name": "АГНКС-2 г. Набережные Челны",
                "short_name": "Набережные Челны-2",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.3370, 55.67453, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "nzk-1",
                "name": "АГНКС-1 г. Нижнекамск",
                "short_name": "Нижнекамск-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.89742, 55.61888, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "nzk-2",
                "name": "АГНКС-2 г. Нижнекамск",
                "short_name": "Нижнекамск-2",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.81708, 55.60916, 7]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "id": "dmt-1",
                "name": "АГНКС-1 г. Димитровград",
                "short_name": "Димитровград-1",
                "region_id": "ulyanovskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.5348, 54.2126, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "uln-1",
                "name": "АГНКС-1 г. Ульяновск",
                "short_name": "Ульяновск-1",
                "region_id": "ulyanovskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.2984, 54.2312, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "uln-2",
                "name": "АГНКС-2 г. Ульяновск",
                "short_name": "Ульяновск-2",
                "region_id": "ulyanovskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.26163, 54.29269, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "szr-1",
                "name": "АГНКС-1 г. Сызрань",
                "short_name": "Сызрань-1",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.50773, 53.20571, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "tlt-1",
                "name": "АГНКС-1 г. Тольятти",
                "short_name": "Тольятти-1",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.3920, 53.5386, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "tlt-2",
                "name": "АГНКС-2 г. Тольятти",
                "short_name": "Тольятти-2",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.26151, 53.53907, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "chp-1",
                "name": "АГНКС-1 г. Чапаевск",
                "short_name": "Чапаевск-1",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.74185, 53.00504, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "smr-1",
                "name": "АГНКС-1 г. Самара",
                "short_name": "Самара-1",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.18488, 53.12527, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "smr-2",
                "name": "АГНКС-2 г. Самара",
                "short_name": "Самара-2",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.28388, 53.25967, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "srn-1",
                "name": "АГНКС-1 г. Саранск",
                "short_name": "Саранск-1",
                "region_id": "respublika-mordoviya",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.23866, 54.2437, 7]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "id": "alg-1",
                "name": "АГНКС-1 с. Александров Гай",
                "short_name": "Александров Гай-1",
                "region_id": "saratovskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.62611, 50.13725, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "bal-1",
                "name": "АГНКС-1 г. Балашов",
                "short_name": "Балашов-1",
                "region_id": "saratovskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [43.22550, 51.55254, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "pen-1",
                "name": "АГНКС-1 г. Пенза",
                "short_name": "Пенза-1",
                "region_id": "penzenskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [44.9632, 53.14309, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "pet-1",
                "name": "АГНКС-1 г. Петровск",
                "short_name": "Петровск-1",
                "region_id": "saratovskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.40343, 52.2820, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-1",
                "name": "АГНКС-1 г. Саратов",
                "short_name": "Саратов-1",
                "region_id": "saratovskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.94547, 51.61892, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-2",
                "name": "АГНКС-2 г. Саратов",
                "short_name": "Саратов-2",
                "region_id": "saratovskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.92944, 51.44512, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-3",
                "name": "АГНКС-3 г. Саратов",
                "short_name": "Саратов-3",
                "region_id": "saratovskaya-oblast",
                "agnks_type_id": "exist"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.92768, 51.60609, 7]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "id": "kzn-krio-1",
                "name": "КриоАЗС-1 г. Елабуга",
                "short_name": "Елабуга-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "stroyka"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.11058, 55.81502, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "kzn-4",
                "name": "АГНКС-4 г. Казань",
                "short_name": "Казань-4",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "stroyka"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.02630, 55.8361, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "kzn-6",
                "name": "АГНКС-6 г. Казань",
                "short_name": "Казань-6",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "stroyka"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.1326, 55.72951, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "nkb-1",
                "name": "АГНКС-1 г. Новокуйбышевск",
                "short_name": "Новокуйбышевск-1",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "stroyka"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.93053, 53.11426, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "blk-1",
                "name": "АГНКС-1 г. Балаково",
                "short_name": "Балаково-1",
                "region_id": "saratovskaya-oblast",
                "agnks_type_id": "stroyka"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [47.8203, 52.00412, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "yar-1",
                "name": "АГНКС-1 с. Красный Яр",
                "short_name": "Красный Яр-1",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "stroyka"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.13015, 53.48442, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "kyr-1",
                "name": "АГНКС-1 с.п. Курумоч",
                "short_name": "Курумоч-1",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "stroyka"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.13571, 53.48165, 7]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "id": "pen-2",
                "name": "АГНКС-2 г. Пенза",
                "short_name": "Пенза-2",
                "region_id": "penzenskaya-oblast",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [44.92951, 53.23614, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sam-3",
                "name": "АГНКС-3 г. Самара",
                "short_name": "Самара-3",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.22472, 53.18438, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "szr-2",
                "name": "АГНКС-2 г. Сызрань",
                "short_name": "Сызрань-2",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.35420, 53.11201, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "shd-1",
                "name": "АГНКС-1 пгт. Суходол",
                "short_name": "Суходол-1",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.16038, 53.86003, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "eng-1",
                "name": "АГНКС-1 г. Энгельс",
                "short_name": "Энгельс-1",
                "region_id": "saratovskaya-oblast",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [46.23157, 51.51223, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-4",
                "name": "АГНКС-4 г. Саратов",
                "short_name": "Саратов-4",
                "region_id": "saratovskaya-oblast",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.78303, 51.62515, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "mel-1",
                "name": "АГНКС-1 с.п. Мелекес",
                "short_name": "Мелекес-1",
                "region_id": "respublica_tatarstan",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.16329, 55.59850, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "uln-3",
                "name": "АГНКС-3 г. Ульяновск",
                "short_name": "Ульяновск-3",
                "region_id": "ulyanovskaya-oblast",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.66767, 54.36781, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "inz-1",
                "name": "АГНКС-1 г. Инза",
                "short_name": "Инза-1",
                "region_id": "ulyanovskaya-oblast",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [46.36267, 53.87377, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "trn-1",
                "name": "АГНКС-1 пгт. Тереньга",
                "short_name": "Тереньга-1",
                "region_id": "ulyanovskaya-oblast",
                "agnks_type_id": "plan"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.34886, 53.71919, 7]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "id": "nlm-1",
                "name": "АГНКС-1 г. Нижний Ломов",
                "short_name": "Нижний Ломов-1",
                "region_id": "penzenskaya-oblast",
                "agnks_type_id": "otkaz"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [43.54685, 53.58857, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sam-4",
                "name": "АГНКС-4 г. Самара",
                "short_name": "Самара-4",
                "region_id": "samarskaya-oblast",
                "agnks_type_id": "otkaz"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.26493, 53.23925, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "kan-1",
                "name": "АГНКС-1 г. Канаш",
                "short_name": "Канаш-1",
                "region_id": "respublika-chuvashiya",
                "agnks_type_id": "otkaz"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [47.45724, 55.51112, 7]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "chb-2",
                "name": "АГНКС-2 г. Чебоксары",
                "short_name": "Чебоксары-2",
                "region_id": "respublika-chuvashiya",
                "agnks_type_id": "otkaz"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [47.35718, 56.12049, 7]
            }
        },
    ]
};

let c_agnks = {
    "type": "FeatureCollection",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [{
            "type": "Feature",
            "properties": {
                "id": "ioshk-1",
                "name": "АГНКС (МЕТАН) ЙОШКАР-ОЛА",
                "short_name": "АГНКС (МЕТАН) ЙОШКАР-ОЛА",
                "region_id": "respublika-marij-el",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [47.970742, 56.584206]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "shemord-1",
                "name": "АГНКС (МЕТАН) ШЕМОРДАН",
                "short_name": "АГНКС (МЕТАН) ШЕМОРДАН",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [50.446129, 56.175948]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "munaika-1",
                "name": "ПАГЗ МЕТАН МУНАЙКА 'РАРИТЭК'",
                "short_name": "ПАГЗ МЕТАН МУНАЙКА 'РАРИТЭК'",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.247833, 55.892861]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "nchrari-1",
                "name": "АГНКС (МЕТАН) НАБЕРЕЖНЫЕ ЧЕЛНЫ 'РАРИТЭК'",
                "short_name": "АГНКС (МЕТАН) НАБЕРЕЖНЫЕ ЧЕЛНЫ 'РАРИТЭК'",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.378815, 55.699949]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "urtovo-1",
                "name": "АГНКС МЕТАН МЕНЗЕЛИНСК (ЮРТОВО) ",
                "short_name": "АГНКС МЕТАН МЕНЗЕЛИНСК (ЮРТОВО) ",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [53.053496, 55.708347]
            }
        },

        {
            "type": "Feature",
            "properties": {
                "id": "actyan-1",
                "name": "МАЗС МЕТАН, СТАРОЕ БАЙСАРОВО, АКТАНЫШСКИЙ РАЙОН 'КАМАТРАНСНЕФТЬ'",
                "short_name": "МАЗС МЕТАН, СТАРОЕ БАЙСАРОВО, АКТАНЫШСКИЙ РАЙОН 'КАМАТРАНСНЕФТЬ'",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [53.874649, 55.487726]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "pohvistnevo-1",
                "name": "АГНКС (МЕТАН) ПОХВИСТНЕВО 'ГАЗПРОМ'",
                "short_name": "АГНКС (МЕТАН) ПОХВИСТНЕВО 'ГАЗПРОМ'",
                "region_id": "samarskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.193698, 53.644333]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "novospasskoe-1",
                "name": "МАЗС (МЕТАН) НОВОСПАССКОЕ 'ЦЕНТРОТЕХ'",
                "short_name": "МАЗС (МЕТАН) НОВОСПАССКОЕ 'ЦЕНТРОТЕХ'",
                "region_id": "ulyanovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [47.718803, 53.157082]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "u-1",
                "name": "МАЗС (МЕТАН) УЛЬЯНОВСК 'РОСНЕФТЬ'",
                "short_name": "МАЗС (МЕТАН) УЛЬЯНОВСК 'РОСНЕФТЬ'",
                "region_id": "ulyanovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.584719, 54.351390]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "u-2",
                "name": "МАЗС (МЕТАН) УЛЬЯНОВСК 'РОСНЕФТЬ'",
                "short_name": "МАЗС (МЕТАН) УЛЬЯНОВСК 'РОСНЕФТЬ'",
                "region_id": "ulyanovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.482534, 54.321576]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "u-3",
                "name": "МАЗС (МЕТАН) УЛЬЯНОВСК 'РОСНЕФТЬ'",
                "short_name": "МАЗС (МЕТАН) УЛЬЯНОВСК 'РОСНЕФТЬ'",
                "region_id": "ulyanovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.348706, 54.322872]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-1",
                "name": "МАЗС (МЕТАН) САРАНСК 'ГАЗПРОМНЕФТЬ'",
                "short_name": "МАЗС (МЕТАН) САРАНСК 'ГАЗПРОМНЕФТЬ'",
                "region_id": "respublika-mordoviya",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [ 45.225419, 54.168609]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "eka-1",
                "name": "АГНКС (МЕТАН) ЕКАТЕРИНОВКА",
                "short_name": "АГНКС (МЕТАН) ЕКАТЕРИНОВКА",
                "region_id": "saratovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [ 44.325843, 51.957347]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "eka-1",
                "name": "АГНКС (МЕТАН) ЕКАТЕРИНОВКА",
                "short_name": "АГНКС (МЕТАН) ЕКАТЕРИНОВКА",
                "region_id": "saratovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [ 44.325843, 51.957347]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-2",
                "name": "МАЗС (МЕТАН) САРАТОВ 'ТОРЭКО'",
                "short_name": "МАЗС (МЕТАН) САРАТОВ 'ТОРЭКО'",
                "region_id": "saratovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.997870, 51.658874]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-3",
                "name": "МАЗС (МЕТАН) САРАТОВ 'РОСНЕФТЬ'",
                "short_name": "МАЗС (МЕТАН) САРАТОВ 'РОСНЕФТЬ'",
                "region_id": "saratovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.895516, 51.610829]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-4",
                "name": "МАЗС (МЕТАН) САРАТОВ 'РОСНЕФТЬ'",
                "short_name": "МАЗС (МЕТАН) САРАТОВ 'РОСНЕФТЬ'",
                "region_id": "saratovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [46.042938, 51.556908]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-5",
                "name": "МАЗС (МЕТАН) САРАТОВ 'РОСНЕФТЬ'",
                "short_name": "МАЗС (МЕТАН) САРАТОВ 'РОСНЕФТЬ'",
                "region_id": "saratovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [45.903968,  51.488580]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "sar-6",
                "name": "АГНКС (МЕТАН) ЭНГЕЛЬС 'ТОРЭКO'",
                "short_name": "АГНКС (МЕТАН) ЭНГЕЛЬС 'ТОРЭКO'",
                "region_id": "saratovskaya-oblast",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [46.141219, 51.457964]
            }
        }



    ]
};




let c_new_agnks = {
    "type": "FeatureCollection",
    "crs": {
        "type": "name",
        "properties": {
            "name": "urn:ogc:def:crs:OGC:1.3:CRS84"
        }
    },
    "features": [
		{
            "type": "Feature",
            "properties": {
                "id": "mendeleevsk-1",
                "name": "АГНКС (МЕТАН) Менделеевск",
                "short_name": "АГНКС (МЕТАН) Менделеевск",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.25980, 55.90085]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "naberezhniechelni-1",
                "name": "АГНКС (МЕТАН) Набережные Челны",
                "short_name": "АГНКС (МЕТАН) Набережные Челны",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [52.44299, 55.69418]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "bolshekokuzoskoe-1",
                "name": "АГНКС (МЕТАН) Большекокузское с.п.",
                "short_name": "АГНКС (МЕТАН) Большекокузско с.п.",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [48.59265 , 55.26914]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "aleshkinsaplikskoe-1",
                "name": "АГНКС (МЕТАН) Алешкин-Саплыкское с.п.",
                "short_name": "АГНКС (МЕТАН) Алешкин-Саплыкское с.п.",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [47.65774, 54.77178]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "usadi-1",
                "name": "АГНКС (МЕТАН) с. Усады",
                "short_name": "АГНКС (МЕТАН) с. Усады",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.17755,  55.70211]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "nizhnekamsk-1",
                "name": "АГНКС (МЕТАН) Нижнекамск 1",
                "short_name": "АГНКС (МЕТАН) Нижнекамск 1",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.98697, 55.61383]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "830kmM7-1",
                "name": "АГНКС (МЕТАН) 830-й км М-7",
                "short_name": "АГНКС (МЕТАН) 830-й км М-7",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [49.34284 , 55.797161]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "id": "nizhnekamsk-2",
                "name": "АГНКС (МЕТАН) Нижнекамск 2",
                "short_name": "АГНКС (МЕТАН) Нижнекамск 2",
                "region_id": "respublica_tatarstan",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [51.8605715, 55.63757]
            }
        },
    ]
};
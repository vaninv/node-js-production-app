# Nodejs Real World application
## Установка
Для установки зависимостей запустите 
`npm instal`

Укажите настройки для доступа к БД в файле `./config/config.json`
```
{
  // Environment
  "development": {
    // Пользовтеля
    "username": "root",
    // Пароль
    "password": null,
    // Имя БД
    "database": "ship",
    // Хост
    "host": "127.0.0.1",
    // Диалект (подробнее https://sequelize.org/master/manual/dialects.html)
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "ship",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "ship",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

Далее необходимо инициализировать структуру БД
`npm run db-migrate`

Добавить немного данных в БД
`npm run db-seed`

## Запуск приложения
Для запуска в dev-режиме

`npm run start-dev` 

Для запуска в production-режиме

`npm run start`

## API

### Получить все записи
`GET /v1/ship`

Либо с поиском
`/v1/ship?title=Aurora`

### Добавить новый корабль
`POST /v1/ship`

Пример payload
```
{
	"title": "Zodiac"
}
```

### Добавить лайк
`POST /v1/ship/1/like`

Пример payload
```
{
  // Только 1 или -1
	"value": 1
}
```

## Ссылки
* [Sequelize](https://sequelize.org/master/)
* [Undefined Twitter](https://twitter.com/undefnd)
* [Undefined VK](https://vk.com/undefinedspb)
* [Undefined Telegram](https://t.me/undefined_community)
* [Василий Ванин Telegram](https://t.me/vaninv)
* [Василий Ванин Twitter](https://twitter.com/vaninv47)

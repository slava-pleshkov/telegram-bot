<p align="center">
    <a href="https://telegram.org/" target="_blank">
        <img src="https://telegram.org/img/t_logo.png" height="100px">
    </a>
    <a href="https://t.me/SlavaPleshkovBot" target="_blank">
        <img src="https://github.com/slava-pleshkov/telegram-bot/blob/master/public/images/telegram-bot.png?raw=true" height="100px">
    </a>
    <h1 align="center">Telegram bot @SlavaPleshkovBot</h1>
    <br>
</p>
<p align="center">The telegram bot was created using Node.js</p>

## Deploying to Heroku

1. Clone the repo and `cd` into it
1. Run this command `heroku create`
1. Run this command `heroku buildpacks:set heroku/nodejs`
1. Run this command `heroku addons:create heroku-postgresql:hobby-dev`
1. Run this command `heroku config:set API_TOKEN=secret`
1. Run this command `heroku config:set DB_HOST=secret`
1. Run this command `heroku config:set DB_PORT=secret`
1. Run this command `heroku config:set DB_DATABASE=secret`
1. Run this command `heroku config:set DB_USERNAME=secret`
1. Run this command `heroku config:set DB_PASSWORD=secret`
1. Run this command `git push heroku master`
1. Run this command `heroku open`

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)
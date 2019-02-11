require('dotenv').config()
const Telegraf = require('telegraf')
const express = require('express');
const expressApp = express();

const API_TOKEN = process.env.API_TOKEN || '';
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || 'https://your-heroku-app.herokuapp.com';

const bot = new Telegraf(API_TOKEN);
bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
expressApp.use(bot.webhookCallback(`/bot${API_TOKEN}`));

bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.hears('hi', (ctx) => ctx.reply('Hello'))
bot.hears('author', (ctx) => ctx.reply('Slava Pleshkov <mail@slavapleshkov.com>'))
bot.hears('mysite', (ctx) => ctx.reply('https://slavapleshkov.com/'))
bot.launch()

expressApp.get('/', (req, res) => {
    res.send('@SlavaPleshkovBot');
  });
  expressApp.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
const { MessageType } = require('@adiwajshing/baileys')
const PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
    contacts: [{
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN: XYNDYKATZ-bot;Owner;;;\nFN:+62 877-1347-8472\nitem1.TEL;waid=6282210190420:6289612698583\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET: katteciracas1928@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:https://hardianto.xyz/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Indonesia 🇮🇩\nitem5.X-ABLabel:───────[ XYNDYKATZ ]───────\nEND:VCARD"
  }, {
    "displayName": "ᴏᴡɴᴇʀ",
      "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Run;Jasa;;;\nFN:+62 882-3383-2771\nitem1.TEL;waid=6288233832771:6288233832771\nitem1.X-ABLabel:📍 Owner\nitem2.EMAIL;type=INTERNET:mursidmulo@gmail.com\nitem2.X-ABLabel:💌 Email\nitem3.URL:saweria.co/mursid25/\nitem3.X-ABLabel:📮 Rest Api\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:ac\nitem4.X-ABLabel:🌍 Region | Yogyakarta 🇮🇩\nitem5.X-ABLabel:───────[ XYNDYKATZ ]───────\nEND:VCARD"
  }]
  }, MessageType.contactsArray, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
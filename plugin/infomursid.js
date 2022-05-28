let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : KATE AR RAWAWIE
│ ✎ _Sekolah_ : UDAH LULUS
│ ✎ _Umur_ : 24
│ ✎ _Asal_ : X'DERES, JAKARTA BARAT
│ ✎ _Status_ : PEKERJA
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/LPFQ2X1cnihB0fb8F8cZau
│ ✎ _Official Grup 2_ :
│    https://chat.whatsapp.com/HjRHck1G3WRHOx97fJkdMN
│ ✎ _Official Grup 3_ :
│    https://chat.whatsapp.com/HcGcIB09sIvKrGytO8yfFn
│ ✎ _My Channel YouTube_ : 
│    Https://youtube.com/c/KATEARRAWAWIE 
│ ✎ _WhatsApp_ :
│    wa.me/6282210190420
╰───────────────────
`.trim(), m)
}

handler.help = ['infomursid']
handler.tags = ['main', 'utama']
handler.command = /^(infomursid)$/i

handler.exp = 150

module.exports = handler

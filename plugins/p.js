import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stiker = await sticker(null, global.API(`${pickRandom(stikerhuuu)}`), global.packname, global.author)
conn.fakeReply(m.chat, stiker, '0@s.whatsapp.net', '*YAEMIKO-BOTZ🗿*', 'status@broadcast')
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    throw stiker.toString()
    
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
let stikerhuuu = [

"https://telegra.ph/file/9fcb3be52fbc9ea266e3e.jpg",
]

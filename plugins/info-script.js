import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {

let stc = 'https://telegra.ph/file/aca096d7a5e34487b6725.png'
let stiker = await sticker(false, stc, global.stickpack, global.stickauth)
conn.fakeReply(m.chat, stiker, '0@s.whatsapp.net', '*DAH GEDE MASIH NYARI SC🗿*', 'status@broadcast')
}

handler.customPrefix = /^(sc|.sc)$/i
handler.command = new RegExp

export default handler

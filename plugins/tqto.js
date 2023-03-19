import { createHash } from 'crypto'
import fetch from 'node-fetch'

let handler = async function (m, { text, usedPrefix, command }) {
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let cap = `*BIG THANKS TO*
    
Terutama Terimakasih Teruntuk:
➸ Aldi Lesmana dan King of Bear

Terimakasih Juga Untuk Kang Banned:
➸ Mark Zuckerberg 

─────────────────────
• God
• My ortu
• King Of Bear
• Aldi lesmana
• Zykobotz (Kabul)
• PutraModz (Me)
• WH MODS DEV
• Nurutomo
• Adiwajshing
• Ariffb
• Amel 
• IrwanX
• Dawnfrosty
• Rteam1
• Beniismael
• Raditya 
• AlyaaXzy 
• Haori 
• David
• Rozi
• Letta
• Yanzz
• Furqan
• Elyas
• Rasel
• Xteam
• Khael
• Atenabot
• Baka Botz
• ZeeoneOfc
• Zeks
• Rendycraft  
• Krizynofc
• Nadin
• NexEp
• Jarot
• Tio
• Aca Mirabel
• Ramdani
• Penyedia Layanan API
• Orang-orang yang Berdonasi
─────────────────────`
  let buttonMessage= {
'document':{'url':'https://youtu.be/dTNrtQagzmc'},
'mimetype':global.ddocx,
'fileName':'ʏᴀᴇᴍɪᴋᴏ-ʙᴏᴛᴢ',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://lynk.id/na_offical',
'mediaType':2,
'previewType':'pdf',
'title':`LansOfc 🎧: ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
'body':`By ʏᴀᴇᴍɪᴋᴏ-ʙᴏᴛᴢ`,
'thumbnail':await(await fetch('https://telegra.ph/file/fb6ed7b403be07c191060.jpg')).buffer(),
'sourceUrl':'https://lynk.id/na_offical'}},
'caption':cap,
'footer':`Ini Ucapan Terima Kasih Untuk Orang Yang Telah Berpatisipasi

${botdate}`,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'MenuBot'},'type':1},
{'buttonId':'.donasi','buttonText':{'displayText':'Donasi'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}
handler.tags = ['xp']

handler.command = /^(tqto|credits|credit)$/i

export default handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

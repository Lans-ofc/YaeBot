import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'creator') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; LansModz\nNICKNAME:👑 Owner Yaemiko Bot\nORG: Na_Devlopers\nTITLE:soft\nitem1.TEL;waid=628313249084:+62 831-3274-9084\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://lynk.id/na_offical\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: achmadmaulanaamirudin@gmail.com\nitem3.X-ABLabel:💌 Mail Owner\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 ,02 Juni 2007\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
let caption = `Halo *@${who.split("@")[0]}*, Nih Pemilik/creator bot nya`
    await conn.sendButton(m.chat, caption, author, null, [['Sapa Owner', 'Huuu']], m, { quoted: fkontak, mentions: conn.parseMention(caption) })
}
if (command == 'own') {
  let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;${author};;;\nFN:${author}\nORG:${author}\nTITLE:\nitem1.TEL;waid=628313249084:+62 831-3274-9084\nitem1.X-ABLabel:${author}\nX-WA-BIZ-DESCRIPTION:${htjava} Nih pengembang ku kack yg mengaktifkan aq.\nX-WA-BIZ-NAME:${author}\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
await conn.reply(m.chat, `Halo kak @${m.sender.split(`@`)[0]} Jika ingin ada yang di tanyakan bisa chat , No spam  `,m)
  }
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(creator|own)$/i

export default handler

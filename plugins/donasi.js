import fetch from 'node-fetch'
let handler = async(m, { conn }) => {
    let teks = `
${conn.top('Donasi')}
├ Biar bot nya jalan terus hehe
├ Dana: -
├ OVO: -
├ GoPay: -
├ Pulsa: 6287719424487
│
${conn.bottom('Haruno')}`.trim()
    const message = {
        image: { url: image},
        jpegThumbnail: await(await fetch(image)).buffer(),
        caption: teks,
        footer: watermark,
        templateButtons: [
            {
                urlButton: {
                    displayText: 'Saweria',
                    url: 'Ga Punya'
                }
            }, {
                quickReplyButton: {
                    displayText: 'Owner',
                    id: '.owner'
                }
            }
        ]
    }
    return await conn.sendMessage(m.chat, message, { quoted: m })
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler

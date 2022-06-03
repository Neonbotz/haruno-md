let handler = async(m, { conn }) => {
    let caption = `
*Kebijakan Privasi, Syarat Ketentuan dan Peraturan Haruno Bot*
Kebijakan Privasi
1. Sachi-Botzz え tidak akan merekam data riwayat chat user.
2. Sachi-Botzz え tidak akan menyebarkan nomor users.
3. Sachi-Botzz え tidak akan menyimpan media yang dikirimkan oleh users.
4. Sachi-Botzz え tidak akan menyalah gunakan data data users.
5. Owner Sachi-Botzz え berhak melihat data riwayat chat users.
6. Owner Sachi-Botzz え berhak melihat status users.
7. Owner Sachi-Botzz え dapat melihat riwayat chat, dan media yang dikirimkan users.

Peraturan Sachi-Botzz え
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.

Syarat Ketentuan Sachi-Botzz え
1. Harunobot dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
2. Harunobot *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
3. Harunobot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
Request fitur, kritik saran, atau laporan bug silahkan chat ke owner.

Kebijakan Peraturan per: 20 April 2022
${watermark}`.trim()
    await conn.reply(m.chat, caption, m, { contextInfo: {
        externalAdReply: {
            sourceUrl: 'xnxx.co',
            title: 'Rules',
            body: 'Haruno',
            thumbnailUrl: image
        }
    }})
}
handler.command = /^(rules|snk|peraturan)$/i
handler.tags = ['main']
handler.help = ['rules']
export default handler

// Web3Forms integration - no SMTP/environment variables needed
const WEB3FORMS_ACCESS_KEY = 'af4ada9f-beb9-4a10-8995-cf1ff3236478';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, hukukAlani, gorusmeTuru, tarih, saatAraligi, mesaj } = req.body;

  // Format date for display
  const formattedDate = tarih
    ? new Date(tarih + 'T00:00:00').toLocaleDateString('tr-TR', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      })
    : 'Belirtilmedi';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `🗓️ Yeni Randevu Talebi: ${name} - ${formattedDate}`,
        from_name: name,
        replyto: email,
        message: `
━━━━━━━━━━━━━━━━━━━━━━━━━━━
YENİ RANDEVU TALEBİ
━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Müvekkil Adayı : ${name}
📞 Telefon         : ${phone}
📧 E-posta         : ${email || 'Belirtilmedi'}

⚖️  Hukuk Alanı    : ${hukukAlani || 'Belirtilmedi'}
💼 Görüşme Türü   : ${gorusmeTuru}
📅 Tercih Edilen   : ${formattedDate}
🕐 Saat Aralığı   : ${saatAraligi ? `${saatAraligi} - ${(parseInt(saatAraligi.split(':')[0]) + 1).toString().padStart(2, '0')}:00` : 'Belirtilmedi'}

💬 Mesaj:
${mesaj || 'Mesaj girilmedi'}

━━━━━━━━━━━━━━━━━━━━━━━━━━━
        `.trim(),
      }),
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true, message: 'Randevu talebi başarıyla alındı.' });
    } else {
      throw new Error(data.message || 'Web3Forms hatası');
    }
  } catch (error) {
    console.error('Randevu mail gönderme hatası:', error);
    return res.status(500).json({ error: `Randevu talebi iletilirken hata oluştu: ${error.message}` });
  }
}

const WEB3FORMS_ACCESS_KEY = 'af4ada9f-beb9-4a10-8995-cf1ff3236478';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `İletişim Formu: ${subject || 'Yeni Mesaj'} - ${name}`,
        from_name: name,
        replyto: email,
        message: `
Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone || 'Belirtilmedi'}
Konu: ${subject || 'Belirtilmedi'}

Mesaj:
${message}
        `.trim(),
      }),
    });

    const data = await response.json();

    if (data.success) {
      return res.status(200).json({ success: true, message: 'Mesaj başarıyla iletildi.' });
    } else {
      throw new Error(data.message || 'Web3Forms hatası');
    }
  } catch (error) {
    console.error('İletişim mail gönderme hatası:', error);
    return res.status(500).json({ error: `Mail gönderilirken hata oluştu: ${error.message}` });
  }
}

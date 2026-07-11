import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, phone, email, hukukAlani, gorusmeTuru, tarih, saatAraligi, mesaj } = req.body;

  // If SMTP environment variables are not configured, simulate success (demo mode)
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('SMTP configuration is missing. Simulating success for appointment form:', req.body);
    return res.status(200).json({ 
      success: true, 
      message: 'Randevu talebi simüle edildi. SMTP ayarları yapılınca mail olarak iletilecektir.' 
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE !== 'false', // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.RECEIVER_EMAILS || 'ahmetnurullaherkan@gmail.com',
      subject: `Yeni Randevu Talebi: ${name}`,
      html: `
        <h3>Yeni Randevu Talebi Detayları</h3>
        <p><strong>Müvekkil Adayı:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>E-posta:</strong> ${email || 'Belirtilmedi'}</p>
        <p><strong>Hukuk Alanı:</strong> ${hukukAlani || 'Belirtilmedi'}</p>
        <p><strong>Görüşme Türü:</strong> ${gorusmeTuru}</p>
        <p><strong>Tarih:</strong> ${tarih}</p>
        <p><strong>Saat Aralığı:</strong> ${saatAraligi}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${mesaj || 'Mesaj yok'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Randevu talebi başarıyla alındı.' });
  } catch (error) {
    console.error('Randevu mail gönderme hatası:', error);
    return res.status(500).json({ error: `Randevu talebi iletilirken hata oluştu: ${error.message}` });
  }
}

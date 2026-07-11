import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = req.body;

  // If SMTP environment variables are not configured, simulate success (demo mode)
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('SMTP configuration is missing. Simulating success for contact form:', req.body);
    return res.status(200).json({ 
      success: true, 
      message: 'Mesaj simüle edildi. SMTP ayarları yapılınca mail olarak iletilecektir.' 
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
      subject: `İletişim Formu: ${subject || 'Yeni Mesaj'}`,
      html: `
        <h3>Yeni İletişim Formu Mesajı</h3>
        <p><strong>Gönderen:</strong> ${name}</p>
        <p><strong>E-posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || 'Belirtilmedi'}</p>
        <p><strong>Konu:</strong> ${subject || 'Belirtilmedi'}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Mesaj başarıyla iletildi.' });
  } catch (error) {
    console.error('İletişim mail gönderme hatası:', error);
    return res.status(500).json({ error: 'Mesaj iletilirken bir sunucu hatası oluştu.' });
  }
}

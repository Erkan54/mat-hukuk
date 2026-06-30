export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, hukukAlani, gorusmeTuru, tarih, saatAraligi, mesaj } = req.body;

    // Here you would integrate with an email service like Resend, SendGrid, or Nodemailer.
    // Example with Resend:
    // const { data, error } = await resend.emails.send({
    //   from: 'Acme <onboarding@resend.dev>',
    //   to: ['your-email@example.com'],
    //   subject: `Yeni Randevu Talebi: ${name}`,
    //   html: `<p><strong>Ad Soyad:</strong> ${name}</p>...`,
    // });

    // Simulating API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Logging the request data for demonstration
    console.log('Randevu Talebi Alındı:', {
      name, phone, email, hukukAlani, gorusmeTuru, tarih, saatAraligi, mesaj
    });

    return res.status(200).json({ success: true, message: 'Randevu talebi başarıyla alındı.' });
  } catch (error) {
    console.error('Randevu kaydı hatası:', error);
    return res.status(500).json({ error: 'Sunucu hatası oluştu.' });
  }
}

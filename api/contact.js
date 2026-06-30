export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    // Simulating API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('İletişim Formu Mesajı Alındı:', { name, email, phone, subject, message });

    return res.status(200).json({ success: true, message: 'Mesaj başarıyla alındı.' });
  } catch (error) {
    console.error('İletişim formu hatası:', error);
    return res.status(500).json({ error: 'Sunucu hatası oluştu.' });
  }
}

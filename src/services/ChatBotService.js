// ini buat system prompt nya

export const CAMPUS_CIBIRU_SYSTEM_PROMPT = `
Kamu adalah Blue.ai, virtual assistant resmi untuk sistem Virtual Campus Tour Kampus UPI Cibiru.
Kamu dibuat untuk membantu calon mahasiswa, mahasiswa aktif, orang tua, dan masyarakat umum untuk mendapatkan informasi tentang Kampus UPI Cibiru secara cepat dan akurat.

## IDENTITAS
- Nama: Blue.ai
- Platform: Virtual Campus Tour WebXR Kampus UPI Cibiru
- Bahasa utama: Bahasa Indonesia (gunakan bahasa Inggris hanya jika pengguna memulai dengan bahasa Inggris)
- Nada bicara: ramah, informatif, dan antusias seperti customer service yang senang membantu

## PENGETAHUAN KAMPUS UPI CIBIRU

### Profil Umum
- Nama lengkap: Kampus UPI Cibiru, Universitas Pendidikan Indonesia (UPI)
- Alamat: Jalan Raya Cibiru No.1 KM. 15, Cibiru, Kec. Cibiru, Kota Bandung, Jawa Barat 40625
- Website resmi: https://kd-cibiru.upi.edu/
- Induk universitas: Universitas Pendidikan Indonesia (UPI) di Bandung
- Konsep unggulan: Green Campus kampus ramah lingkungan dengan ruang terbuka hijau yang luas
- Lokasi: Kawasan timur Kota Bandung yang mudah diakses dari Jalan Soekarno-Hatta maupun pintu tol Cileunyi

### Program Studi
UPI Cibiru menyelenggarakan beberapa program studi di bawah Fakultas Ilmu Pendidikan (FIP):
1. PGSD (Pendidikan Guru Sekolah Dasar) - S1
2. PGPAUD (Pendidikan Guru Pendidikan Anak Usia Dini) - S1
3. Pendidikan Multimedia (PMM) - S1
4. Rekayasa Perangkat Lunak (RPL) - S1
5. Teknik Komputer (TEKKOM) - S1
6. Pendidikan Profesi Guru PGSD (PPG PGSD) - Profesi
7. Pendidikan Guru Sekolah Dasar - S2

Untuk informasi lengkap dan terbaru mengenai kurikulum, akreditasi, dan jalur masuk,
kunjungi https://kd-cibiru.upi.edu/ atau langsung hubungi bagian akademik kampus.

### Fasilitas & Gedung Utama
- Gedung Biru : Gedung utama yang menajdi ikonik kampus. Gedung ini menjadi area perkantoran dan administrasi dari Kampus UPI Cibiru. Oleh karena itu kamu bisa melakukan pengurusan akademik melalui staff yang ada di gedung ini. Pada gedung ini terdapat beberapa laboratorium juga mulai dari laboratorium komputer multimedia, laboratorium fotografi, laboratorium audio dan laboratorium komputer PGPAUD. Selain itu pada gedung ini terdapat Aula yang biasa digunakan dalam acara-acara besar 
- Gedung Baru : Gedung perkuliahan yang berisi ruang kelas baik kelas kecil maupun kelas besar. Pada gedung ini juga terdapat perpustakaan, ruang audio visual, laboratorium microteaching hingga laboratorium bahasa. Pada gedung ini terdapat kantor program studi S1 Pendidikan Multimedia, S1 Rekayasa Perangkat Lunak dan S1 Teknik Komputer.
- Gedung I : Gedung perkuliahan yang berisi ruang kelas standar. Gedung ini memiliki beberapa laboratorium diantaranya laboratorium komputer RPL, laboratorium komputer PGSD dan laboratorium robotika pendidikan. Gedung ini juga memiliki Aula cukup besar untuk kegiatan rapat hingga konferensi.
- Gedung Asrama : Gedung asrama diperuntukan untuk mahasiswi dengan total 4 lantai. Fasilitas asrama meliputi ranjang tidur, lemari hingga meja belajar. s
- Kantin Kampus : UPI Food Fest merupakan nama populer dari area kantin kampus kami yang didalamnya terdapat berbagai pilihan makanan dan minuman terjangkau, mulai dari harga 12.000 Rupiah saja.
- Perpustakaan : Perpustakaan berlokasi di dalam Gedung baru. Di dalamnya terdapat koleksi buku pendidikan, jurnal, dan akses e-library UPI maupun Jurnal Internasional (Scopus, Elsevier dll)
- Lapangan & Taman : Ruang terbuka hijau untuk berolahraga bahkan untuk belajar yang mendukung konsep Green Campus
- Masjid : Merupakan fasilitas ibadah umat muslim yang ada di dalam area kampus
- Area Parkir : Tersedia area parkir untuk kendaraan roda dua dan roda empat

### Fitur Virtual Campus Tour (Platform Ini)
Platform ini memiliki tiga fitur utama yang bisa diakses pengunjung:
1. AR Green Metric - lihat informasi indikator Green Campus UPI Cibiru
   menggunakan teknologi Augmented Reality langsung di lingkungan nyata
2. 3D VR Campus Tour - jelajahi kampus secara virtual 360° melalui browser,
   tidak perlu install aplikasi khusus, tersedia di berbagai perangkat
3. Galeri - kumpulan foto dan video area kampus UPI Cibiru

### Penerimaan Mahasiswa Baru
- Jalur masuk UPI mengikuti skema Kemendikbud: SNBP, SNBT dan Seleksi Mandiri UPI (Mandiri Prestasi dan International Undergraduate Program)
- Informasi resmi dan terbaru: https://pmb.upi.edu/
- Biaya kuliah menggunakan sistem UKT (Uang Kuliah Tunggal) berbasis kemampuan ekonomi orang tua

### Kontak & Informasi
- Website: https://kd-cibiru.upi.edu/
- UPI Pusat: https://upi.edu/
- Untuk informasi akademik, administrasi, dan kunjungan langsung,
  disarankan menghubungi kantor kampus via website resmi

## ATURAN MENJAWAB

1. **Fokus pada kampus**: Utamakan pertanyaan seputar UPI Cibiru, virtual tour, fasilitas,
   program studi, dan penerimaan mahasiswa. Untuk topik di luar itu, jawab singkat
   lalu arahkan kembali ke topik kampus.

2. **Jujur soal keterbatasan**: Jika tidak yakin dengan detail spesifik
   (misal jam operasional terkini, nama dosen, jadwal), katakan dengan jujur dan
   arahkan ke website resmi atau bagian yang berwenang.

3. **Respons ringkas**: Berikan jawaban yang padat dan jelas. Gunakan poin-poin
   jika membantu. Hindari paragraf panjang yang membingungkan.

4. **Sambut pertama kali**: Jika ini pesan pertama pengguna, sambut dengan hangat
   dan tanya apakah mereka calon mahasiswa, mahasiswa aktif, atau sekedar ingin
   mengenal kampus - lalu sesuaikan responsmu.

5. **Arahkan ke fitur VR/AR**: Ketika relevan, anjurkan pengguna mencoba fitur
   3D VR Campus Tour atau AR Green Metric yang tersedia di platform ini.

6. **Bahasa**: Gunakan Bahasa Indonesia yang lugas dan bersahabat. Boleh sedikit
   informal (tidak kaku), tapi tetap profesional dan sopan.
`.trim();

// ini buat konfigurasi API
const API_CONFIG = {
  endpoint: "https://projectwebxr-production.up.railway.app/api/chat",
  // endpoint: "http://localhost:3000/api/chat",

  // maksimum histori yang dikirim ke api dari sisi user dan assistant, supaya token ga terlalu terbuang banyak
  maxHistoryTurns: 10,
};

// ini buat fungsi utamanya
// percakapan pertama yang dari user

/**
 * Kirim pesan ke Claude API dan dapatkan respons asisten.
 *
 * @param {Array<{role: 'user'|'assistant', content: string}>} messages
 *   Riwayat percakapan lengkap termasuk pesan terbaru dari pengguna.
 *   Pesan pertama dalam array HARUS dari role 'user'.
 *
 * @returns {Promise<string>} Teks respons dari asisten.
 * @throws {ChatbotError} Jika terjadi error jaringan atau API.
 */

export async function sendChatMessages(messages) {
  // pastiin array terisi sama role user pertama kali
  const sanitized = sanitizeMessages(messages);

  // buat batasin history biar ga overload
  const trimmed = trimHistory(sanitized, API_CONFIG.maxHistoryTurns);

  const payload = {
    system: CAMPUS_CIBIRU_SYSTEM_PROMPT,
    messages: trimmed,
  };

  let response;
  try {
    response = await fetch(API_CONFIG.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (networkError) {
    throw new ChatbotError(
      "Kamu tidak dapat terhubung ke server. Silakan cek koneksi internet kamu!",
      "NETWORK_ERROR",
      networkError,
    );
  }

  if (!response.ok) {
    const detail = await safeParseError(response);
    throw new ChatbotError(
      buildApiErrorMessage(response.status),
      "API_ERROR",
      detail,
    );
  }

  const data = await response.json();

  // mengambil teks dari respons Anthropic (content[0].text)
  const text = data?.content?.[0]?.text;
  if (!text) {
    throw new ChatbotError(
      "Respon server tidak valid. Silakan coba lagi!",
      "INVALID_RESPONSE",
      data,
    );
  }

  return text;
}

// buat pesan welcomenya
export function getWelcomeMessage() {
  return (
    "Halo! Selamat datang di **Virtual Campus Tour UPI Cibiru**!\n\n" +
    "Saya **Blue.ai**, virtual assistant yang siap membantu kamu mengenal kampus ini. " +
    "Kamu bisa bertanya tentang:\n" +
    "- Fasilitas & gedung kampus\n" +
    "- Program studi yang tersedia\n" +
    "- Informasi penerimaan mahasiswa baru\n" +
    "- Konsep Green Campus UPI Cibiru\n" +
    "- Cara menggunakan fitur VR & AR di platform ini\n\n" +
    "Ada yang bisa saya bantu?"
  );
}

// buat helper functions
function sanitizeMessages(messages) {
  // memfilter pesan yang kosong
  const filtered = messages.filter(
    (m) => m && m.role && typeof m.content === "string" && m.content.trim(),
  );

  if (filtered.length === 0) {
    throw new ChatbotError(
      "Tidak ada pesan yang valid untuk dikirim",
      "EMPTY_MESSAGES",
    );
  }

  // pesan pertama harus dari user
  const firstUserIndex = filtered.findIndex((m) => m.role === "user");
  if (firstUserIndex === -1) {
    throw new ChatbotError(
      "Percakapan harus dimulai dengan pesan dari pengguna.",
      "INVALID_MESSAGE_ORDER",
    );
  }

  return filtered.slice(firstUserIndex);
}

/**
 * Potong histori percakapan agar tidak melebihi maxTurns.
 * Selalu pertahankan pesan terakhir (yang baru dikirim pengguna).
 *
 * @param {Array} messages
 * @param {number} maxTurns — jumlah pasangan user/assistant yang disimpan
 * @returns {Array}
 */
function trimHistory(messages, maxTurns) {
  const maxMessages = maxTurns * 2; // setiap turn = 1 user + 1 assistant
  if (messages.length <= maxMessages) return messages;
  return messages.slice(messages.length - maxMessages);
}

// Coba parse body error dari response sebagai JSON, fallback ke teks.

async function safeParseError(response) {
  try {
    return await response.json();
  } catch {
    try {
      return await response.text();
    } catch {
      return null;
    }
  }
}

// Buat pesan error berdasarkan HTTP status code.

function buildApiErrorMessage(status) {
  switch (status) {
    case 401:
      return "Autentikasi gagal. Hubungi administrator sistem.";
    case 429:
      return "Terlalu banyak permintaan. Tunggu beberapa saat lalu coba lagi.";
    case 500:
    case 502:
    case 503:
      return "Server sedang bermasalah. Silakan coba beberapa saat lagi.";
    default:
      return `Terjadi kesalahan (kode ${status}). Silakan coba lagi.`;
  }
}

// buat custom error
/**
 * Error khusus untuk Chatbot, membawa kode error agar bisa di-handle berbeda
 * di komponen UI (misal: tampilkan pesan berbeda untuk NETWORK_ERROR vs API_ERROR).
 */
export class ChatbotError extends Error {
  /**
   * @param {string} message — Pesan ramah untuk ditampilkan ke pengguna
   * @param {string} code    — Kode error: NETWORK_ERROR | API_ERROR | EMPTY_MESSAGES | dll
   * @param {*} [cause]      — Error asli atau detail tambahan (untuk debugging)
   */
  constructor(message, code, cause = null) {
    super(message);
    this.name = "ChatbotError";
    this.code = code;
    this.cause = cause;
  }
}

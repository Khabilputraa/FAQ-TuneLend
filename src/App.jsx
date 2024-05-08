import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'Bagaimana cara pemilik alat musik untuk menyewakan alat musik mereka?',
      answer: 'Pemilik alat musik dapat mendaftar ke TuneLend secara gratis serta menambahkan daftar alat musik yang mereka miliki, dan menetapkan harga sewa. Setelah diverifikasi, alat musik mereka akan tersedia untuk disewakan.',
    },
    {
      id: 2,
      question: 'Apa manfaat bagi penyewa alat musik yang menggunakan TuneLend?',
      answer: 'Penyewa dapat dengan mudah menemukan berbagai alat musik yang mereka butuhkan dengan harga yang lebih terjangkau.',
    },
    {
      id: 3,
      question: 'Bagaimana TuneLend menjaga keamanan dan privasi informasi pengguna?',
      answer: 'TuneLend mengutamakan keamanan dan privasi informasi pengguna dengan menerapkan berbagai langkah perlindungan, termasuk enkripsi data, verifikasi pengguna, dan pemantauan aktivitas. Selain itu, TuneLend tidak akan membagikan informasi pribadi pengguna kepada pihak ketiga tanpa persetujuan mereka, sesuai dengan kebijakan privasi yang ketat.',
    },
  ]);

  const [selectedQuestionId, setSelectedQuestionId] = useState(null);

  const handleQuestionClick = (id) => {
    setSelectedQuestionId(id);
  };

  return (
    <div className="faq-container">
      <nav className="navbar">
        <div className="logo">
          <img src="/logo-TuneLend.png" alt="Logo" />
        </div>
        <ul className="menu">
          <li><a href="/Beranda">Beranda</a></li>
          <li><a href="/Tentang Kami">Tentang Kami</a></li>
          <li><a href="/Pertanyaan Umum">Pertanyaan Umum</a></li>
          <li>
            <div className="login-box">
              <a href="/login">Login</a>
            </div>
          </li>
        </ul>
      </nav>

      <div className="faq-content">
        <div className="faq-banner">
          <img src="/pict-1.png" alt="Banner FAQ" />
        </div>
        <div className="faq-questions">
          <h2>Pertanyaan Umum</h2>
          <ul className="questions">
            {questions.map((question) => (
              <li key={question.id} className={selectedQuestionId === question.id ? 'active' : ''}>
                <button onClick={() => handleQuestionClick(question.id)}>
                  {question.question}
                </button>
                {selectedQuestionId === question.id && <div className='answer'> <p classnName="answer">{question.answer}</p></div>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import { useState } from "react";

export default function Natal() {
  const [form, setForm] = useState({ name: "", date: "", time: "", city: "", email: "", comment: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#1a1535",
    border: "var(--border)",
    borderColor: "rgba(232,224,255,0.3)",
    color: "var(--dark)",
    padding: "14px 16px",
    fontSize: "15px",
    fontFamily: "inherit",
    outline: "none",
    transition: "0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "rgba(232,224,255,0.6)",
    fontSize: "12px",
    fontWeight: 800,
    textTransform: "uppercase",
    marginBottom: "8px",
    letterSpacing: "1px",
  };

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo"><a href="/" style={{ textDecoration: "none", color: "inherit" }}>ASTRO*SPHERE</a></div>
        <nav>
          <a href="/horoscopes">Гороскопы</a>
          <a href="/lunar">Луна</a>
          <a href="/blog">Блог</a>
          <a href="/natal">Услуги</a>
        </nav>
        <a href="/horoscopes"><button className="btn-cta">Гороскопы</button></a>
      </header>

      <main>
        <section style={{ padding: "60px 20px", maxWidth: "700px", margin: "0 auto" }}>

          {!sent ? (
            <>
              <h1 className="section-title" style={{ marginBottom: "12px" }}>НАТАЛЬНАЯ<br />КАРТА</h1>
              <p style={{ color: "rgba(232,224,255,0.6)", marginBottom: "50px", lineHeight: 1.7 }}>
                Заполни форму — астролог составит твою персональную натальную карту и пришлёт подробную расшифровку на почту в течение 24 часов.
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px",
                marginBottom: "30px",
                padding: "24px",
                background: "#1a1535",
                border: "var(--border)",
                borderColor: "rgba(232,224,255,0.2)",
              }}>
                {[["🌟", "Полная карта", "Все планеты и аспекты"], ["💜", "Личный разбор", "Комментарий астролога"], ["📧", "24 часа", "Результат на почту"]].map(([icon, title, sub]) => (
                  <div key={title} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "32px", marginBottom: "8px" }}>{icon}</div>
                    <div style={{ color: "var(--dark)", fontWeight: 800, fontSize: "13px", textTransform: "uppercase", marginBottom: "4px" }}>{title}</div>
                    <div style={{ color: "rgba(232,224,255,0.4)", fontSize: "12px" }}>{sub}</div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <label style={labelStyle}>Ваше имя *</label>
                  <input
                    style={inputStyle}
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Как вас зовут?"
                    required
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div>
                    <label style={labelStyle}>Дата рождения *</label>
                    <input
                      style={inputStyle}
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Время рождения</label>
                    <input
                      style={inputStyle}
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={handleChange}
                      placeholder="Если известно"
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Город рождения *</label>
                  <input
                    style={inputStyle}
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Например: Москва, Санкт-Петербург"
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email для отправки *</label>
                  <input
                    style={inputStyle}
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>Ваш запрос (необязательно)</label>
                  <textarea
                    style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    placeholder="Что вас больше всего интересует? Карьера, любовь, здоровье, предназначение..."
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
                  <div>
                    <div style={{ color: "var(--accent)", fontFamily: "'Unbounded', sans-serif", fontSize: "28px", fontWeight: 800 }}>990 ₽</div>
                    <div style={{ color: "rgba(232,224,255,0.4)", fontSize: "12px" }}>Единоразовый платёж</div>
                  </div>
                  <button
                    type="submit"
                    className="btn-cta"
                    style={{ background: "var(--primary)", color: "white", borderColor: "var(--primary)", fontSize: "15px", padding: "16px 40px" }}
                  >
                    Заказать карту ✨
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "80px 20px" }}>
              <div style={{ fontSize: "80px", marginBottom: "24px" }}>🌟</div>
              <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "40px", fontWeight: 800, color: "var(--dark)", marginBottom: "16px" }}>
                ЗАЯВКА ПРИНЯТА!
              </h2>
              <p style={{ color: "rgba(232,224,255,0.6)", lineHeight: 1.8, fontSize: "17px", marginBottom: "40px" }}>
                Спасибо, {form.name}! Астролог получил твой запрос и пришлёт натальную карту на <strong style={{ color: "var(--accent)" }}>{form.email}</strong> в течение 24 часов.
              </p>
              <a href="/">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white", borderColor: "var(--primary)" }}>
                  На главную
                </button>
              </a>
            </div>
          )}
        </section>
      </main>

      <footer style={{ padding: "40px 20px", background: "#0a0818", borderTop: "var(--border)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div className="footer-logo">ASTRO*SPHERE</div>
          <span style={{ color: "rgba(232,224,255,0.4)", fontSize: "14px" }}>© 2024 — Звёзды расскажут всё ✨</span>
        </div>
      </footer>
    </>
  );
}
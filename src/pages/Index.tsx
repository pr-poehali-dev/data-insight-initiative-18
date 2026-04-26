import { useState } from "react";

const SIGNS_SHORT = [
  { name: "Овен", emoji: "♈", text: "Сегодня звёзды благоволят смелым решениям. Не откладывай разговор, который давно зреет. В делах финансов — осторожность, но в личной жизни можно рискнуть и выиграть." },
  { name: "Телец", emoji: "♉", text: "День благоприятен для финансовых дел и подписания договоров. Венера дарит обаяние — используй это в переговорах. Вечер проведи в уюте и отдыхе." },
  { name: "Близнецы", emoji: "♊", text: "Энергия общения зашкаливает! Идеальный день для презентаций, переписки и переговоров. Твоё красноречие убедит даже скептиков." },
  { name: "Рак", emoji: "♋", text: "Интуиция сегодня — твой главный компас. Доверяй первым ощущениям в новых знакомствах. Домашние дела потребуют внимания, но принесут удовлетворение." },
  { name: "Лев", emoji: "♌", text: "Солнце наделяет тебя харизмой и магнетизмом. Любое публичное выступление пройдёт блестяще. Самое время заявить о своих амбициях." },
  { name: "Дева", emoji: "♍", text: "Детали и порядок — твоя суперсила. Сегодня можно разобраться с отложенными делами и навести порядок во всём. Будь мягче в критике близких." },
  { name: "Весы", emoji: "♎", text: "Гармония и красота — твои союзники. День хорош для творчества, встреч с приятными людьми и принятия важных решений через диалог." },
  { name: "Скорпион", emoji: "♏", text: "Плутон усиливает твою проницательность. Ты видишь скрытые мотивы и истинные намерения. Используй это преимущество мудро." },
  { name: "Стрелец", emoji: "♐", text: "Юпитер открывает горизонты! День для смелых идей, путешествий и философских разговоров. Удача сопутствует тем, кто действует с оптимизмом." },
  { name: "Козерог", emoji: "♑", text: "Сатурн требует дисциплины, но и щедро награждает за неё. Трудный день обернётся победой, если не отступать. Вечер порадует заслуженным отдыхом." },
  { name: "Водолей", emoji: "♒", text: "Уран провоцирует неожиданные повороты — будь готов к переменам и радуйся им. Нестандартное решение сегодня принесёт лучший результат." },
  { name: "Рыбы", emoji: "♓", text: "Нептун дарит вдохновение и мечты. Твоя интуиция сегодня безупречна. Позволь себе творить, медитировать и слушать тихий голос души." },
];

export default function Index() {
  const [selectedSign, setSelectedSign] = useState<null | typeof SIGNS_SHORT[0]>(null);

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ASTRO*SPHERE</div>
        <nav>
          <a href="/horoscopes">Гороскопы</a>
          <a href="/lunar">Луна</a>
          <a href="/blog">Блог</a>
          <a href="/natal">Услуги</a>
        </nav>
        <a href="/natal"><button className="btn-cta">Мой гороскоп</button></a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              ЗВЁЗДЫ
              <br />
              НЕ <span>ВРУТ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed" style={{ color: "rgba(232,224,255,0.7)" }}>
              Персональные гороскопы, астрологические прогнозы и расшифровка натальной карты. Узнай, что уготовили тебе планеты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a href="/horoscopes">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white", borderColor: "var(--primary)" }}>
                  Узнать прогноз
                </button>
              </a>
              <a href="/natal">
                <button className="btn-cta" style={{ background: "transparent", color: "var(--dark)", borderColor: "var(--dark)" }}>
                  Натальная карта
                </button>
              </a>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: `url('https://cdn.poehali.dev/projects/89cad37f-4387-4543-a469-193e6fb99911/files/e395ed21-cee1-4e6e-8f3f-3b5300f8f1ab.jpg')` }}>
            <div className="sticker">
              ПРОГНОЗ
              <br />
              НА СЕГОДНЯ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              ✨ РЕТРОГРАДНЫЙ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              МЕРКУРИЙ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ОВЕН * ТЕЛЕЦ * БЛИЗНЕЦЫ * РАК * ЛЕВ * ДЕВА * ВЕСЫ * СКОРПИОН * СТРЕЛЕЦ * КОЗЕРОГ * ВОДОЛЕЙ * РЫБЫ *
            ОВЕН * ТЕЛЕЦ * БЛИЗНЕЦЫ * РАК * ЛЕВ * ДЕВА * ВЕСЫ * СКОРПИОН * СТРЕЛЕЦ * КОЗЕРОГ * ВОДОЛЕЙ * РЫБЫ
          </div>
        </div>

        {/* Today's Horoscope Block */}
        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">СЕГОДНЯ</h2>
            <a href="/horoscopes" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Все прогнозы
            </a>
          </div>
          <p style={{ color: "rgba(232,224,255,0.5)", marginBottom: "32px", marginTop: "-20px" }}>
            Выбери свой знак и читай прогноз на сегодня
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px", marginBottom: "32px" }}>
            {SIGNS_SHORT.map((sign) => (
              <button
                key={sign.name}
                onClick={() => setSelectedSign(selectedSign?.name === sign.name ? null : sign)}
                style={{
                  background: selectedSign?.name === sign.name ? "var(--primary)" : "#1a1535",
                  border: "var(--border)",
                  borderColor: selectedSign?.name === sign.name ? "var(--primary)" : "rgba(232,224,255,0.2)",
                  padding: "14px 8px",
                  cursor: "pointer",
                  transition: "0.2s",
                  boxShadow: selectedSign?.name === sign.name ? "var(--shadow)" : "none",
                  transform: selectedSign?.name === sign.name ? "translate(-3px,-3px)" : "none",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "24px", marginBottom: "4px" }}>{sign.emoji}</div>
                <div style={{ color: "var(--dark)", fontWeight: 800, fontSize: "11px", textTransform: "uppercase" }}>{sign.name}</div>
              </button>
            ))}
          </div>

          {selectedSign && (
            <div style={{
              border: "var(--border)",
              borderColor: "var(--primary)",
              background: "#1a1535",
              padding: "30px",
              boxShadow: "var(--shadow)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
                <span style={{ fontSize: "48px" }}>{selectedSign.emoji}</span>
                <h3 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "28px", fontWeight: 800, color: "var(--dark)", textTransform: "uppercase" }}>
                  {selectedSign.name}
                </h3>
              </div>
              <p style={{ color: "rgba(232,224,255,0.8)", lineHeight: 1.8, fontSize: "16px", marginBottom: "20px" }}>
                {selectedSign.text}
              </p>
              <a href="/horoscopes">
                <button className="btn-cta" style={{ background: "transparent", color: "var(--accent)", borderColor: "var(--accent)", fontSize: "13px" }}>
                  Полный прогноз на неделю →
                </button>
              </a>
            </div>
          )}
        </section>

        <section className="section-padding" style={{ borderTop: "var(--border)" }}>
          <div className="section-header">
            <h2 className="section-title">УСЛУГИ</h2>
            <a href="/natal" className="text-sm md:text-base" style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}>
              Заказать
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Популярное</span>
              <img src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Гороскоп на неделю" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3 style={{ color: "var(--dark)" }}>Гороскоп на неделю</h3>
                  <span className="price">Бесплатно</span>
                </div>
                <p style={{ fontSize: "14px", color: "rgba(232,224,255,0.6)" }}>
                  Подробный прогноз на 7 дней для каждого знака зодиака. Деньги, любовь, карьера.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>Хит</span>
              <img src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Натальная карта" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3 style={{ color: "var(--dark)" }}>Натальная карта</h3>
                  <span className="price">990 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "rgba(232,224,255,0.6)" }}>
                  Полная расшифровка вашей натальной карты с личным комментарием астролога.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "#0d0b1e" }}>Новинка</span>
              <img src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Совместимость" />
              <div className="menu-card-body">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                  <h3 style={{ color: "var(--dark)" }}>Совместимость</h3>
                  <span className="price">590 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "rgba(232,224,255,0.6)" }}>
                  Астрологический анализ совместимости двух знаков. Любовь, дружба, бизнес.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">КОСМОС ВНУТРИ ТЕБЯ.</h2>
            <p className="vibe-text">
              Астрология — это не судьба, это карта возможностей. Мы помогаем читать звёзды так, чтобы каждый день становился осознанным выбором. Более 10 000 человек уже нашли свой путь с нами.
            </p>
            <a href="/natal">
              <button className="btn-cta" style={{ background: "var(--dark)", color: "#0d0b1e", borderColor: "var(--dark)" }}>
                Заказать натальную карту
              </button>
            </a>
          </div>
          <div className="vibe-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}></div>
        </section>

        {/* Reviews */}
        <section className="section-padding" style={{ borderTop: "var(--border)" }}>
          <h2 className="section-title" style={{ marginBottom: "12px", textAlign: "center" }}>ОТЗЫВЫ</h2>
          <p style={{ color: "rgba(232,224,255,0.5)", textAlign: "center", marginBottom: "48px" }}>Что говорят наши клиенты</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
            {[
              { name: "Анна К.", sign: "♍ Дева", stars: "★★★★★", text: "Натальная карта перевернула моё представление о себе. Астролог точно описал мои страхи и таланты — как будто знала меня всю жизнь. Рекомендую всем!" },
              { name: "Михаил Р.", sign: "♏ Скорпион", stars: "★★★★★", text: "Скептически относился к астрологии, но прогноз на неделю совпал настолько точно, что теперь читаю каждый день. Сайт стал частью утреннего ритуала." },
              { name: "Елена В.", sign: "♓ Рыбы", stars: "★★★★☆", text: "Заказала анализ совместимости с партнёром — очень глубокий разбор. Многое объяснил в наших отношениях. Буду заказывать прогноз на год." },
              { name: "Дарья М.", sign: "♌ Лев", stars: "★★★★★", text: "Обожаю гороскопы на этом сайте — они живые, не шаблонные. Чувствуется, что написано с душой и знанием дела. Подписала всех подруг!" },
            ].map((r) => (
              <div key={r.name} style={{ background: "#1a1535", border: "var(--border)", borderColor: "rgba(232,224,255,0.15)", padding: "28px", transition: "0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow)"; (e.currentTarget as HTMLDivElement).style.transform = "translate(-4px,-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; }}
              >
                <div style={{ color: "var(--accent)", fontSize: "20px", marginBottom: "14px", letterSpacing: "2px" }}>{r.stars}</div>
                <p style={{ color: "rgba(232,224,255,0.8)", lineHeight: 1.7, fontSize: "15px", marginBottom: "20px" }}>«{r.text}»</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "var(--dark)", fontWeight: 800, fontSize: "14px", textTransform: "uppercase" }}>{r.name}</span>
                  <span style={{ color: "var(--primary)", fontSize: "13px", fontWeight: 700 }}>{r.sign}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ASTRO.SPHERE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Астрология 1" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Астрология 2" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Астрология 3" />
            </div>
            <div className="social-item">
              <img src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Астрология 4" />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ASTRO*SPHERE</div>
          <p style={{ color: "rgba(232,224,255,0.5)", lineHeight: 1.6 }}>
            Твой персональный астролог онлайн. Гороскопы, натальные карты и астрологические прогнозы с 2024 года.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li><a href="/horoscopes" style={{ color: "inherit", textDecoration: "none" }}>Гороскопы</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Знаки зодиака</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>О нас</a></li>
            <li><a href="#" style={{ color: "inherit", textDecoration: "none" }}>Политика</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Услуги</h4>
          <ul>
            <li><a href="/natal" style={{ color: "inherit", textDecoration: "none" }}>Натальная карта</a></li>
            <li><a href="/natal" style={{ color: "inherit", textDecoration: "none" }}>Совместимость</a></li>
            <li><a href="/natal" style={{ color: "inherit", textDecoration: "none" }}>Прогноз на год</a></li>
            <li><a href="/natal" style={{ color: "inherit", textDecoration: "none" }}>Консультация</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2024 ASTRO*SPHERE — Все права защищены</span>
          <span>Звёзды расскажут всё ✨</span>
        </div>
      </footer>
    </>
  );
}
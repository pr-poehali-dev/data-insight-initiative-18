export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ASTRO*SPHERE</div>
        <nav>
          <a href="#">Гороскопы</a>
          <a href="#">Знаки</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Мой гороскоп</button>
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
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white", borderColor: "var(--primary)" }}>
                Узнать прогноз
              </button>
              <button className="btn-cta" style={{ background: "transparent", color: "var(--dark)", borderColor: "var(--dark)" }}>
                Все знаки зодиака
              </button>
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

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ГОРОСКОПЫ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все прогнозы
            </a>
          </div>

          <div className="menu-grid">
            {/* Card 1 */}
            <div className="menu-card">
              <span className="menu-tag">Популярное</span>
              <img
                src="https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Гороскоп на неделю"
              />
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

            {/* Card 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Хит
              </span>
              <img
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Натальная карта"
              />
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

            {/* Card 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "#0d0b1e" }}>
                Новинка
              </span>
              <img
                src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Совместимость"
              />
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
            <button className="btn-cta" style={{ background: "var(--dark)", color: "#0d0b1e", borderColor: "var(--dark)" }}>
              Наша история
            </button>
          </div>
          <div className="vibe-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')" }}></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @ASTRO.SPHERE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Астрология 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Астрология 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Астрология 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Астрология 4"
              />
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
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Гороскопы
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Знаки зодиака
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Услуги</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Натальная карта
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Совместимость
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Прогноз на год
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Консультация
              </a>
            </li>
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

const MONTH_DAYS = Array.from({ length: 30 }, (_, i) => i + 1);

const MOON_PHASES = [
  { day: 1, phase: "🌑", name: "Новолуние", energy: "Начало", tip: "Идеальное время для новых намерений и постановки целей." },
  { day: 2, phase: "🌒", name: "Растущий серп", energy: "Рост", tip: "Начинай новые проекты, сажай семена планов." },
  { day: 3, phase: "🌒", name: "Растущий серп", energy: "Рост", tip: "Энергия нарастает — действуй активнее." },
  { day: 4, phase: "🌒", name: "Растущий серп", energy: "Рост", tip: "Хорошее время для обучения и накопления знаний." },
  { day: 5, phase: "🌒", name: "Растущий серп", energy: "Рост", tip: "Социальная активность принесёт пользу." },
  { day: 6, phase: "🌓", name: "Первая четверть", energy: "Действие", tip: "Преодолей первые препятствия — сейчас есть силы." },
  { day: 7, phase: "🌓", name: "Первая четверть", energy: "Действие", tip: "Принимай решения смело — интуиция обострена." },
  { day: 8, phase: "🌔", name: "Прибывающая луна", energy: "Сила", tip: "Финансовые дела идут в гору. Время для инвестиций." },
  { day: 9, phase: "🌔", name: "Прибывающая луна", energy: "Сила", tip: "Творческая энергия на пике. Создавай и вдохновляйся." },
  { day: 10, phase: "🌔", name: "Прибывающая луна", energy: "Сила", tip: "Отношения расцветают. Хорошее время для свиданий." },
  { day: 11, phase: "🌔", name: "Прибывающая луна", energy: "Сила", tip: "Продвигай идеи — тебя услышат и поддержат." },
  { day: 12, phase: "🌔", name: "Прибывающая луна", energy: "Сила", tip: "Физическая активность приносит максимум пользы." },
  { day: 13, phase: "🌔", name: "Прибывающая луна", energy: "Сила", tip: "Всё чего хочешь — притягивается. Визуализируй мечты." },
  { day: 14, phase: "🌕", name: "Полнолуние", energy: "Пик", tip: "Кульминация! Эмоции сильны. Завершай начатое." },
  { day: 15, phase: "🌕", name: "Полнолуние", energy: "Пик", tip: "День для благодарности и осмысления пройденного пути." },
  { day: 16, phase: "🌖", name: "Убывающая луна", energy: "Отпускание", tip: "Начни избавляться от лишнего — в делах и мыслях." },
  { day: 17, phase: "🌖", name: "Убывающая луна", energy: "Отпускание", tip: "Завершай проекты, не начинай новых." },
  { day: 18, phase: "🌖", name: "Убывающая луна", energy: "Отпускание", tip: "Время для анализа и подведения итогов." },
  { day: 19, phase: "🌖", name: "Убывающая луна", energy: "Отпускание", tip: "Очищение пространства и мыслей идёт легко." },
  { day: 20, phase: "🌖", name: "Убывающая луна", energy: "Отпускание", tip: "Прощай обиды — луна помогает отпустить прошлое." },
  { day: 21, phase: "🌗", name: "Последняя четверть", energy: "Покой", tip: "Снизь темп. Отдых сейчас даёт силы на следующий цикл." },
  { day: 22, phase: "🌗", name: "Последняя четверть", energy: "Покой", tip: "Интроверсия полезна — побудь наедине с собой." },
  { day: 23, phase: "🌘", name: "Убывающий серп", energy: "Покой", tip: "Медитация и сны особенно информативны." },
  { day: 24, phase: "🌘", name: "Убывающий серп", energy: "Покой", tip: "Осторожно с важными решениями — подожди новолуния." },
  { day: 25, phase: "🌘", name: "Убывающий серп", energy: "Покой", tip: "Прощение и принятие — главные темы этих дней." },
  { day: 26, phase: "🌘", name: "Убывающий серп", energy: "Покой", tip: "Береги энергию — она понадобится для нового цикла." },
  { day: 27, phase: "🌘", name: "Убывающий серп", energy: "Покой", tip: "Тело просит отдыха и заботы — прислушайся." },
  { day: 28, phase: "🌘", name: "Убывающий серп", energy: "Покой", tip: "Составляй список желаний для следующего новолуния." },
  { day: 29, phase: "🌑", name: "Тёмная луна", energy: "Тишина", tip: "Самое тёмное время — для глубокого внутреннего диалога." },
  { day: 30, phase: "🌑", name: "Новолуние", energy: "Начало", tip: "Цикл завершён. Новые намерения снова готовы к посеву." },
];

const ENERGY_COLORS: Record<string, string> = {
  "Начало": "#9b5de5",
  "Рост": "#00bbf9",
  "Действие": "#fee440",
  "Сила": "#f15bb5",
  "Пик": "#ff9f1c",
  "Отпускание": "#9b5de5",
  "Покой": "#4cc9f0",
  "Тишина": "#555",
};

const today = new Date().getDate();

export default function Lunar() {
  const currentDay = MOON_PHASES.find(d => d.day === today) || MOON_PHASES[0];

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
        <a href="/natal"><button className="btn-cta">Натальная карта</button></a>
      </header>

      <main>
        <section style={{ padding: "40px 20px 0", borderBottom: "var(--border)" }}>
          <h1 className="section-title" style={{ marginBottom: "8px" }}>ЛУННЫЙ<br />КАЛЕНДАРЬ</h1>
          <p style={{ color: "rgba(232,224,255,0.5)", marginBottom: "40px" }}>Апрель 2026 — фазы луны и их влияние</p>

          {/* Today's moon */}
          <div style={{
            background: "#1a1535",
            border: "var(--border)",
            borderColor: "var(--primary)",
            padding: "32px",
            marginBottom: "48px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "center",
            boxShadow: "var(--shadow)",
          }}>
            <div style={{ fontSize: "80px", lineHeight: 1 }}>{currentDay.phase}</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: "rgba(232,224,255,0.5)", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "2px", marginBottom: "6px" }}>
                Сегодня · {today} апреля
              </div>
              <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "28px", fontWeight: 800, color: "var(--dark)", marginBottom: "8px" }}>
                {currentDay.name}
              </h2>
              <span style={{
                background: ENERGY_COLORS[currentDay.energy],
                color: currentDay.energy === "Действие" ? "#0d0b1e" : "white",
                padding: "4px 14px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase",
              }}>
                {currentDay.energy}
              </span>
              <p style={{ color: "rgba(232,224,255,0.75)", marginTop: "14px", lineHeight: 1.7, fontSize: "16px" }}>
                {currentDay.tip}
              </p>
            </div>
          </div>

          {/* Calendar grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "0",
            border: "var(--border)",
            marginBottom: "0",
          }}>
            {MOON_PHASES.map((day) => (
              <div
                key={day.day}
                title={`${day.name} — ${day.tip}`}
                style={{
                  padding: "16px 8px",
                  textAlign: "center",
                  borderRight: "var(--border)",
                  borderBottom: "var(--border)",
                  background: day.day === today ? "var(--primary)" : day.day % 2 === 0 ? "#1a1535" : "#120f2e",
                  cursor: "default",
                  transition: "0.15s",
                }}
              >
                <div style={{ fontSize: "22px", marginBottom: "4px" }}>{day.phase}</div>
                <div style={{ color: "var(--dark)", fontWeight: 800, fontSize: "13px" }}>{day.day}</div>
                <div style={{
                  fontSize: "9px", fontWeight: 800, textTransform: "uppercase",
                  color: day.day === today ? "white" : ENERGY_COLORS[day.energy],
                  marginTop: "4px", letterSpacing: "0.5px",
                }}>
                  {day.energy}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legend */}
        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "32px" }}>ФАЗЫ ЛУНЫ</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
            {[
              ["🌑", "Новолуние", "Начало нового цикла. Сей намерения."],
              ["🌒", "Растущий серп", "Набирай обороты и действуй."],
              ["🌓", "Первая четверть", "Преодолевай препятствия."],
              ["🌔", "Прибывающая", "Максимальная созидательная сила."],
              ["🌕", "Полнолуние", "Пик энергии. Завершай и праздную."],
              ["🌖", "Убывающая", "Отпускай ненужное."],
              ["🌗", "Последняя четверть", "Рефлексия и отдых."],
              ["🌘", "Убывающий серп", "Тишина и подготовка к новому."],
            ].map(([emoji, title, desc]) => (
              <div key={title} style={{ background: "#1a1535", border: "var(--border)", borderColor: "rgba(232,224,255,0.15)", padding: "20px" }}>
                <div style={{ fontSize: "32px", marginBottom: "10px" }}>{emoji}</div>
                <div style={{ color: "var(--dark)", fontWeight: 800, fontSize: "13px", textTransform: "uppercase", marginBottom: "6px" }}>{title}</div>
                <div style={{ color: "rgba(232,224,255,0.5)", fontSize: "13px", lineHeight: 1.6 }}>{desc}</div>
              </div>
            ))}
          </div>
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

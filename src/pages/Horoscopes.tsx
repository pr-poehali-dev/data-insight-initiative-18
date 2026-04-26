import { useState } from "react";

const SIGNS = [
  {
    name: "Овен",
    emoji: "♈",
    dates: "21 марта — 19 апреля",
    element: "Огонь",
    planet: "Марс",
    today: "Сегодня звёзды благоволят смелым решениям. Не откладывай разговор, который давно зреет. В делах финансов — осторожность, но в личной жизни можно рискнуть и выиграть.",
    week: "Неделя принесёт неожиданные знакомства. Меркурий в твоём секторе общения активизирует переговоры. К пятнице придёт ясность в затяжном вопросе.",
    love: "★★★★☆",
    career: "★★★☆☆",
    health: "★★★★★",
  },
  {
    name: "Телец",
    emoji: "♉",
    dates: "20 апреля — 20 мая",
    element: "Земля",
    planet: "Венера",
    today: "День благоприятен для финансовых дел и подписания договоров. Венера дарит обаяние — используй это в переговорах. Вечер проведи в уюте и отдыхе.",
    week: "Стабильная неделя с акцентом на материальное. Возможно неожиданное пополнение бюджета. В отношениях — тепло и гармония.",
    love: "★★★★★",
    career: "★★★★☆",
    health: "★★★☆☆",
  },
  {
    name: "Близнецы",
    emoji: "♊",
    dates: "21 мая — 20 июня",
    element: "Воздух",
    planet: "Меркурий",
    today: "Энергия общения зашкаливает! Идеальный день для презентаций, переписки и переговоров. Твоё красноречие убедит даже скептиков. Не распыляйся — выбери одну главную цель.",
    week: "Множество контактов и предложений. Важно не упустить главное среди информационного шума. Четверг — ключевой день для принятия решений.",
    love: "★★★☆☆",
    career: "★★★★★",
    health: "★★★★☆",
  },
  {
    name: "Рак",
    emoji: "♋",
    dates: "21 июня — 22 июля",
    element: "Вода",
    planet: "Луна",
    today: "Интуиция сегодня — твой главный компас. Доверяй первым ощущениям в новых знакомствах. Домашние дела потребуют внимания, но принесут удовлетворение.",
    week: "Луна усиливает эмоциональный фон. Семейные вопросы выходят на первый план. Середина недели — время для заботы о себе.",
    love: "★★★★☆",
    career: "★★★☆☆",
    health: "★★★★☆",
  },
  {
    name: "Лев",
    emoji: "♌",
    dates: "23 июля — 22 августа",
    element: "Огонь",
    planet: "Солнце",
    today: "Солнце наделяет тебя харизмой и магнетизмом. Любое публичное выступление пройдёт блестяще. Самое время заявить о своих амбициях — тебя услышат.",
    week: "Неделя триумфа и признания. Коллеги и партнёры замечают твои усилия. В личной жизни — страсть и яркие эмоции.",
    love: "★★★★★",
    career: "★★★★★",
    health: "★★★☆☆",
  },
  {
    name: "Дева",
    emoji: "♍",
    dates: "23 августа — 22 сентября",
    element: "Земля",
    planet: "Меркурий",
    today: "Детали и порядок — твоя суперсила. Сегодня можно разобраться с отложенными делами и навести порядок во всём. Будь мягче в критике близких.",
    week: "Продуктивная неделя для планирования и анализа. Появится возможность улучшить рабочий процесс. Пятница порадует приятным сюрпризом.",
    love: "★★★☆☆",
    career: "★★★★★",
    health: "★★★★☆",
  },
  {
    name: "Весы",
    emoji: "♎",
    dates: "23 сентября — 22 октября",
    element: "Воздух",
    planet: "Венера",
    today: "Гармония и красота — твои союзники. День хорош для творчества, встреч с приятными людьми и принятия важных решений через диалог. Компромисс — твоя победа.",
    week: "Венера активирует зону отношений. Романтика и новые знакомства не заставят ждать. В делах — удачные партнёрства.",
    love: "★★★★★",
    career: "★★★☆☆",
    health: "★★★★☆",
  },
  {
    name: "Скорпион",
    emoji: "♏",
    dates: "23 октября — 21 ноября",
    element: "Вода",
    planet: "Плутон",
    today: "Плутон усиливает твою проницательность. Ты видишь скрытые мотивы и истинные намерения. Используй это преимущество мудро. Финансовые интуиции сегодня точны.",
    week: "Трансформационная неделя. Что-то заканчивается — и это хорошо, ведь освобождается место для нового. Не держись за прошлое.",
    love: "★★★★☆",
    career: "★★★★☆",
    health: "★★★★★",
  },
  {
    name: "Стрелец",
    emoji: "♐",
    dates: "22 ноября — 21 декабря",
    element: "Огонь",
    planet: "Юпитер",
    today: "Юпитер открывает горизонты! День для смелых идей, путешествий и философских разговоров. Удача сопутствует тем, кто действует с оптимизмом и широко мыслит.",
    week: "Расширение во всех сферах. Новые знания, дальние поездки или вдохновляющие знакомства. Финансовый сектор под защитой Юпитера.",
    love: "★★★☆☆",
    career: "★★★★★",
    health: "★★★★☆",
  },
  {
    name: "Козерог",
    emoji: "♑",
    dates: "22 декабря — 19 января",
    element: "Земля",
    planet: "Сатурн",
    today: "Сатурн требует дисциплины, но и щедро награждает за неё. Трудный день обернётся победой, если не отступать. Вечер порадует заслуженным отдыхом.",
    week: "Неделя усилий и результатов. Карьерные вопросы решаются в твою пользу. Авторитет и репутация растут.",
    love: "★★★☆☆",
    career: "★★★★★",
    health: "★★★★☆",
  },
  {
    name: "Водолей",
    emoji: "♒",
    dates: "20 января — 18 февраля",
    element: "Воздух",
    planet: "Уран",
    today: "Уран провоцирует неожиданные повороты — будь готов к переменам и радуйся им. Нестандартное решение сегодня принесёт лучший результат. Общайся, объединяй людей.",
    week: "Революционные идеи и технологические прорывы. Идеальная неделя для стартапов и смелых экспериментов. Социальная активность принесёт плоды.",
    love: "★★★★☆",
    career: "★★★★☆",
    health: "★★★☆☆",
  },
  {
    name: "Рыбы",
    emoji: "♓",
    dates: "19 февраля — 20 марта",
    element: "Вода",
    planet: "Нептун",
    today: "Нептун дарит вдохновение и мечты. Твоя интуиция сегодня безупречна. Позволь себе творить, медитировать и слушать тихий голос души. Он знает ответ.",
    week: "Духовная и творческая неделя. Музыка, живопись, поэзия — всё даётся легко. Любовная сфера наполнена нежностью и тайными чувствами.",
    love: "★★★★★",
    career: "★★★☆☆",
    health: "★★★★☆",
  },
];

export default function Horoscopes() {
  const [selected, setSelected] = useState(SIGNS[0]);
  const [tab, setTab] = useState<"today" | "week">("today");

  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo"><a href="/" style={{ textDecoration: "none", color: "inherit" }}>ASTRO*SPHERE</a></div>
        <nav>
          <a href="/horoscopes">Гороскопы</a>
          <a href="#">Знаки</a>
          <a href="#">О нас</a>
          <a href="#">Контакты</a>
        </nav>
        <a href="/natal"><button className="btn-cta">Натальная карта</button></a>
      </header>

      <main>
        <section style={{ padding: "40px 20px", borderBottom: "var(--border)" }}>
          <h1 className="section-title" style={{ marginBottom: "10px" }}>ВСЕ ЗНАКИ</h1>
          <p style={{ color: "rgba(232,224,255,0.6)", marginBottom: "40px" }}>Выбери свой знак зодиака и читай прогноз</p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            marginBottom: "50px",
          }}>
            {SIGNS.map((sign) => (
              <button
                key={sign.name}
                onClick={() => setSelected(sign)}
                style={{
                  background: selected.name === sign.name ? "var(--primary)" : "#1a1535",
                  border: "var(--border)",
                  borderColor: selected.name === sign.name ? "var(--primary)" : "rgba(232,224,255,0.3)",
                  padding: "16px 8px",
                  cursor: "pointer",
                  transition: "0.2s",
                  boxShadow: selected.name === sign.name ? "var(--shadow)" : "none",
                  transform: selected.name === sign.name ? "translate(-3px,-3px)" : "none",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "6px" }}>{sign.emoji}</div>
                <div style={{ color: "var(--dark)", fontWeight: 800, fontSize: "12px", textTransform: "uppercase" }}>{sign.name}</div>
              </button>
            ))}
          </div>

          {/* Selected Sign Detail */}
          <div style={{
            border: "var(--border)",
            background: "#1a1535",
            padding: "40px",
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "flex-start", marginBottom: "30px" }}>
              <div style={{ fontSize: "80px", lineHeight: 1 }}>{selected.emoji}</div>
              <div>
                <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "48px", fontWeight: 800, color: "var(--dark)", textTransform: "uppercase", lineHeight: 1 }}>
                  {selected.name}
                </h2>
                <p style={{ color: "rgba(232,224,255,0.5)", marginTop: "8px", fontSize: "14px" }}>{selected.dates}</p>
                <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                  <span style={{ background: "var(--primary)", color: "white", padding: "4px 12px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", border: "2px solid var(--primary)" }}>
                    {selected.element}
                  </span>
                  <span style={{ background: "transparent", color: "var(--accent)", padding: "4px 12px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase", border: "2px solid var(--accent)" }}>
                    {selected.planet}
                  </span>
                </div>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", flexDirection: "column", gap: "8px", minWidth: "160px" }}>
                {[["Любовь", selected.love], ["Карьера", selected.career], ["Здоровье", selected.health]].map(([label, stars]) => (
                  <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px" }}>
                    <span style={{ color: "rgba(232,224,255,0.5)", fontSize: "13px", fontWeight: 700 }}>{label}</span>
                    <span style={{ color: "var(--accent)", fontSize: "14px" }}>{stars}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: "0", marginBottom: "24px", borderBottom: "var(--border)" }}>
              {(["today", "week"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  style={{
                    background: tab === t ? "var(--primary)" : "transparent",
                    color: "var(--dark)",
                    border: "none",
                    borderBottom: tab === t ? "3px solid var(--primary)" : "3px solid transparent",
                    padding: "12px 24px",
                    fontWeight: 800,
                    fontSize: "14px",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "0.2s",
                  }}
                >
                  {t === "today" ? "На сегодня" : "На неделю"}
                </button>
              ))}
            </div>

            <p style={{ color: "rgba(232,224,255,0.8)", lineHeight: 1.8, fontSize: "17px" }}>
              {tab === "today" ? selected.today : selected.week}
            </p>
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

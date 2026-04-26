import { useState } from "react";

const ARTICLES: { id: number; tag: string; tagColor: string; tagTextColor?: string; title: string; date: string; readTime: string; preview: string; content: string; img: string }[] = [
  {
    id: 1,
    tag: "Планеты",
    tagColor: "var(--secondary)",
    title: "Ретроградный Меркурий: что это значит и как не сойти с ума",
    date: "15 апреля 2026",
    readTime: "7 мин",
    preview: "Три-четыре раза в год Меркурий «разворачивается» назад — и всё вокруг будто идёт наперекосяк. Техника ломается, договорённости срываются, письма теряются. Но так ли всё страшно на самом деле?",
    content: `Ретроградный Меркурий — один из самых пугающих терминов в астрологии. Но давайте разберёмся, что происходит на самом деле.

**Что такое ретроградность?**

Планеты не останавливаются и не разворачиваются назад — это оптическая иллюзия, возникающая из-за разной скорости орбит Земли и других планет. Когда мы «обгоняем» Меркурий, он кажется движущимся в обратном направлении.

**Что происходит в жизни?**

Меркурий управляет общением, транспортом, торговлей и технологиями. В ретроградный период эти сферы действительно работают «медленнее» — не потому что планета злится, а потому что энергия уходит внутрь, на переосмысление.

**Что делать:**
— Перечитывай договоры дважды
— Делай резервные копии файлов
— Не запускай новые проекты — лучше завершай старые
— Встречайся со старыми знакомыми
— Исправляй недоразумения прошлого

**Что не делать:**
— Не подписывай важные документы в первые дни ретро
— Не покупай технику без крайней необходимости
— Не принимай импульсивных решений

Ретроградный Меркурий — это не наказание, а возможность замедлиться и оглянуться назад. Используй это время мудро.`,
    img: "https://images.unsplash.com/photo-1464802686167-b939a6910659?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    tag: "Обучение",
    tagColor: "var(--accent)",
    tagTextColor: "#0d0b1e",
    title: "Как читать натальную карту: руководство для начинающих",
    date: "8 апреля 2026",
    readTime: "12 мин",
    preview: "Натальная карта — это астрологический «паспорт» человека, составленный на момент его рождения. В ней зашифрованы таланты, слабые места, жизненные уроки и судьбоносные встречи.",
    content: `Натальная карта выглядит как круг, разделённый на 12 секторов — домов. В каждом доме могут находиться планеты, а сам дом управляется определённым знаком зодиака.

**Три кита натальной карты:**

1. **Знак Солнца** — твоя суть, эго, жизненная цель. То, к чему ты стремишься.
2. **Знак Луны** — эмоции, интуиция, детские паттерны. То, что чувствуешь.
3. **Асцендент (знак восхода)** — маска для мира, первое впечатление, тело.

**12 домов и их значения:**

- 1-й дом: личность, внешность
- 2-й дом: деньги, ценности
- 3-й дом: общение, братья/сёстры
- 4-й дом: дом, семья, корни
- 5-й дом: творчество, дети, романы
- 6-й дом: здоровье, работа, рутина
- 7-й дом: партнёрство, брак
- 8-й дом: трансформация, наследство
- 9-й дом: философия, путешествия
- 10-й дом: карьера, репутация
- 11-й дом: друзья, мечты
- 12-й дом: тайны, кармические уроки

**С чего начать чтение?**

Начни с «большой тройки»: Солнце, Луна, Асцендент. Потом изучи, в каких домах они стоят. Затем найди планеты в значимых домах. И только потом переходи к аспектам — углам между планетами.

Не пытайся охватить всё сразу — натальная карта раскрывается постепенно, иногда годами.`,
    img: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    tag: "Совместимость",
    tagColor: "var(--primary)",
    title: "Совместимость знаков: мифы и реальность",
    date: "1 апреля 2026",
    readTime: "9 мин",
    preview: "«Скорпионы и Водолеи несовместимы» — слышали такое? На самом деле совместимость в астрологии намного сложнее, чем просто сравнение знаков Солнца. Разбираемся в деталях.",
    content: `Популярная астрология часто сводит совместимость к одной формуле: «Овен + Лев = огонь, Рак + Козерог = катастрофа». Но это слишком упрощённо.

**Почему знак Солнца — это только верхушка айсберга?**

В синастрии (астрологии совместимости) анализируют десятки факторов:
— Знаки и дома Луны (эмоциональная совместимость)
— Венера и Марс (романтика и сексуальность)
— Меркурий (стиль общения)
— Аспекты между картами партнёров

**Классические «несовместимые» пары, которые прекрасно уживаются:**

Скорпион и Водолей — оба имеют глубину и нестандартное мышление. Телец и Стрелец — один даёт стабильность, другой — приключения. Рак и Козерог — классика «противоположности притягиваются».

**Что действительно важно в синастрии:**

1. Аспекты Луна-Луна: как вы чувствуете друг друга
2. Аспекты Венера-Марс: химия и влечение
3. Дом Солнца партнёра: какую роль он играет в твоей жизни
4. Аспекты к Асценденту: первое впечатление и долгосрочная динамика

**Вывод:** Любая пара может быть гармоничной — важно не какие у вас знаки, а насколько вы готовы работать над отношениями. Астрология лишь показывает, где будут трения и где — поддержка.`,
    img: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Blog() {
  const [openId, setOpenId] = useState<number | null>(null);
  const openArticle = ARTICLES.find(a => a.id === openId);

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
        {openArticle ? (
          <section style={{ padding: "40px 20px", maxWidth: "720px", margin: "0 auto" }}>
            <button
              onClick={() => setOpenId(null)}
              style={{ background: "transparent", border: "none", color: "var(--primary)", fontWeight: 800, fontSize: "14px", textTransform: "uppercase", cursor: "pointer", marginBottom: "32px", padding: 0 }}
            >
              ← Назад к блогу
            </button>
            <img src={openArticle.img} alt={openArticle.title} style={{ width: "100%", height: "320px", objectFit: "cover", border: "var(--border)", marginBottom: "32px" }} />
            <span style={{ background: openArticle.tagColor, color: openArticle.tagTextColor || "white", padding: "4px 12px", fontSize: "12px", fontWeight: 800, textTransform: "uppercase" }}>
              {openArticle.tag}
            </span>
            <h1 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(24px, 4vw, 40px)", fontWeight: 800, color: "var(--dark)", marginTop: "20px", marginBottom: "12px", lineHeight: 1.2, textTransform: "uppercase" }}>
              {openArticle.title}
            </h1>
            <div style={{ color: "rgba(232,224,255,0.4)", fontSize: "13px", marginBottom: "32px" }}>
              {openArticle.date} · {openArticle.readTime} чтения
            </div>
            <div style={{ color: "rgba(232,224,255,0.8)", lineHeight: 1.9, fontSize: "16px" }}>
              {openArticle.content.split("\n").map((line, i) => {
                if (line.startsWith("**") && line.endsWith("**")) {
                  return <h3 key={i} style={{ color: "var(--dark)", fontWeight: 800, fontSize: "18px", margin: "28px 0 10px", textTransform: "uppercase" }}>{line.replace(/\*\*/g, "")}</h3>;
                }
                if (line.startsWith("— ")) {
                  return <div key={i} style={{ paddingLeft: "16px", borderLeft: "3px solid var(--primary)", marginBottom: "8px" }}>{line.slice(2)}</div>;
                }
                if (/^\d+\./.test(line)) {
                  return <div key={i} style={{ marginBottom: "8px", color: "rgba(232,224,255,0.8)" }}>{line}</div>;
                }
                if (line === "") return <br key={i} />;
                return <p key={i} style={{ marginBottom: "12px" }}>{line}</p>;
              })}
            </div>
            <div style={{ marginTop: "48px", padding: "28px", background: "#1a1535", border: "var(--border)", borderColor: "var(--primary)" }}>
              <p style={{ color: "var(--dark)", fontWeight: 800, fontSize: "16px", marginBottom: "12px" }}>
                Хочешь узнать больше о своей карте?
              </p>
              <a href="/natal">
                <button className="btn-cta" style={{ background: "var(--primary)", color: "white", borderColor: "var(--primary)" }}>
                  Заказать натальную карту
                </button>
              </a>
            </div>
          </section>
        ) : (
          <section style={{ padding: "40px 20px" }}>
            <h1 className="section-title" style={{ marginBottom: "8px" }}>БЛОГ</h1>
            <p style={{ color: "rgba(232,224,255,0.5)", marginBottom: "48px" }}>Статьи об астрологии — понятно и без воды</p>

            <div style={{ display: "grid", gap: "32px" }}>
              {ARTICLES.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setOpenId(article.id)}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    border: "var(--border)",
                    borderColor: "rgba(232,224,255,0.15)",
                    background: "#1a1535",
                    cursor: "pointer",
                    transition: "0.2s",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "var(--shadow)"; (e.currentTarget as HTMLDivElement).style.transform = "translate(-4px,-4px)"; (e.currentTarget as HTMLDivElement).style.borderColor = "var(--primary)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(232,224,255,0.15)"; }}
                >
                  <img src={article.img} alt={article.title} style={{ width: "100%", height: "240px", objectFit: "cover", borderBottom: "var(--border)" }} />
                  <div style={{ padding: "28px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                      <span style={{ background: article.tagColor, color: article.tagTextColor || "white", padding: "4px 12px", fontSize: "11px", fontWeight: 800, textTransform: "uppercase" }}>
                        {article.tag}
                      </span>
                      <span style={{ color: "rgba(232,224,255,0.35)", fontSize: "12px" }}>{article.date} · {article.readTime}</span>
                    </div>
                    <h2 style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(18px, 2.5vw, 26px)", fontWeight: 800, color: "var(--dark)", marginBottom: "14px", lineHeight: 1.25, textTransform: "uppercase" }}>
                      {article.title}
                    </h2>
                    <p style={{ color: "rgba(232,224,255,0.6)", lineHeight: 1.7, fontSize: "15px", marginBottom: "20px" }}>
                      {article.preview}
                    </p>
                    <span style={{ color: "var(--primary)", fontWeight: 800, fontSize: "13px", textTransform: "uppercase" }}>
                      Читать статью →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
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
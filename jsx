// src/components/Home.jsx
import { useLang } from "../context/LangContext";
import { T } from "../utils/translations";
import { TASK_COLORS, QUICK_COLORS } from "../utils/constants";

export default function Home({ openTask }) {
  const lang = useLang();
  const t = T[lang];
  const tasks = t.tasks;
  
  const daysLeft = (d) => {
    const today = new Date("2026-03-10");
    return Math.ceil((new Date(d) - today) / 86400000);
  };

  return (
    <div className="screen">
      <div className="hero">
        <div className="hero-greeting">{t.greeting}</div>
        <div className="hero-name">
          {lang === "hi" ? "रमेश" : "Ramesh"} 
          <span>{lang === "hi" ? "कुमार" : "Kumar"}</span>
        </div>
        <div className="hero-card">
          <div className="hero-card-icon">⚠️</div>
          <div className="hero-card-text">
            <div className="hero-card-title">
              {t.heroCardTitle(daysLeft("2026-07-31"))}
            </div>
            <div className="hero-card-sub">{t.heroCardSub}</div>
          </div>
          <button 
            className="hero-card-action" 
            onClick={() => openTask({ ...tasks[0], bg: TASK_COLORS[0] })}
          >
            {t.heroCardBtn}
          </button>
        </div>
      </div>

      <div className="alerts-container">
        <div className="alert alert-red">
          <div className="alert-icon">⚠️</div>
          <div>
            <div className="alert-title">{t.alertITR}</div>
            <div className="alert-sub">{t.alertITRSub}</div>
          </div>
        </div>
        <div className="alert alert-yellow">
          <div className="alert-icon">🔔</div>
          <div>
            <div className="alert-title">{t.alertPassport}</div>
            <div className="alert-sub">{t.alertPassportSub}</div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-hdr">
          <div className="section-title">{t.quickActions}</div>
        </div>
        <div className="quick-grid">
          {t.quick.map((q, i) => {
            const QUICK_TASK_MAP = [2, 0, 1, 3, null, null, null, null];
            const taskIdx = QUICK_TASK_MAP[i];
            return (
              <button 
                className="quick-btn" 
                key={i} 
                onClick={() => taskIdx !== null && openTask({ ...tasks[taskIdx], bg: TASK_COLORS[taskIdx] })}
                aria-label={q.label}
              >
                <div 
                  className="quick-icon" 
                  style={{ background: QUICK_COLORS[i].color }}
                >
                  {q.icon}
                </div>
                <div className="quick-label">{q.label}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="active-tasks-section">
        <div className="section-hdr">
          <div className="section-title">{t.activeTasks}</div>
          <div className="section-link">{t.seeAll}</div>
        </div>
        <div className="task-scroll">
          {tasks.map((task, i) => (
            <div 
              className="task-card" 
              key={i} 
              style={{ background: TASK_COLORS[i], animationDelay: `${i * 0.07}s` }} 
              onClick={() => openTask({ ...task, bg: TASK_COLORS[i] })}
              role="button"
              tabIndex="0"
              onKeyDown={(e) => e.key === 'Enter' && openTask({ ...task, bg: TASK_COLORS[i] })}
            >
              <div className="task-tag">{task.tag}</div>
              <div className="task-title">{task.title}</div>
              <div className="task-due">
                {task.due === "Ongoing" || task.due === "जारी" 
                  ? t.ongoing 
                  : `${t.due} ${task.due}`}
              </div>
              <div className="task-progress-bar">
                <div 
                  className="task-progress-fill" 
                  style={{ width: `${task.pct}%` }}
                />
              </div>
              <div className="task-pct">{task.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

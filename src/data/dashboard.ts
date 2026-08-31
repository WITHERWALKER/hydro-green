export const productionYear = {
  totalKg: 1840,
  goalKg: 2600,
  delta: "+8% vs año pasado",
  eta: "en ritmo para 12 Nov",
  get pct() {
    return Math.round((this.totalKg / this.goalKg) * 100);
  },
  months: [
    { label: "ENE", h: 46 },
    { label: "FEB", h: 62 },
    { label: "MAR", h: 52 },
    { label: "ABR", h: 74 },
    { label: "MAY", h: 70 },
    { label: "JUN", h: 88 },
    { label: "JUL", h: 84 },
    { label: "AGO", h: 104, accent: true },
  ],
};

export const cropStages = {
  total: 107,
  critical: 12,
  stages: [
    { label: "Germinación", count: 42, w: 86, color: "#7FB89A" },
    { label: "Vegetativo", count: 31, w: 64, color: "#7FB89A" },
    { label: "Floración", count: 19, w: 42, color: "#1B7A4D" },
    { label: "Fructificación", count: 9, w: 22, color: "#1B7A4D" },
    { label: "Cosecha", count: 6, w: 16, color: "#111413" },
  ],
};

export const todayAgenda = [
  { time: "09:30", dot: "#1B7A4D", title: "Riego · Sector A2", sub: "Automatizado · confirmado" },
  { time: "11:00", dot: "#C8C5BA", title: "Calibración pH · Inv. 3", sub: "Técnico en sitio" },
  {
    time: "13:30",
    dot: "#C94A2E",
    title: "Inspección · Módulo #4B",
    sub: "Ventana crítica · vence viernes",
  },
  {
    time: "16:00",
    dot: "#C8C5BA",
    title: "Muestreo nutrientes · R. Ortiz",
    sub: "Aprobación dosificación",
  },
];

export const criticalLot = {
  variety: "Fresa Albión",
  lot: "B3 · Torre 2",
  detail: "Hidropónico · NFT · 90–110 días",
  alert: "94% riesgo",
  ec: "EC 2.4 mS/cm",
  ph: "pH 6.8",
  desc: "3 brotes nuevos en 24h, crecimiento a 15cm. Riego hoy a las 9:30 — revisa EC y lleva reporte del módulo A2 y el plan de cosecha B3.",
};

export const lotsInProduction = [
  {
    kg: "890 kg",
    lot: "Módulo A3 · Albión",
    prog: 4,
    status: "Cerca de cosecha · 8/12",
    tone: "green" as const,
  },
  {
    kg: "542 kg",
    lot: "Módulo B1 · San Andreas",
    prog: 3,
    status: "En floración · 8/21",
    tone: "muted" as const,
  },
  {
    kg: "1,020 kg",
    lot: "Módulo C2 · Monterrey",
    prog: 2,
    status: "Déficit NK · 9/8",
    tone: "red" as const,
  },
  {
    kg: "38 kg/m²",
    lot: "Módulo D1 · Sweet Sensation",
    prog: 3,
    status: "Densidad óptima · 9/1",
    tone: "muted" as const,
  },
];

export const opsTasks = {
  overdue: 2,
  tasks: [
    {
      title: "Revisar pH · Sector C2",
      sub: "Cosecha expira esta noche",
      due: "2d atraso",
      overdue: true,
    },
    {
      title: "Reponer nutrientes · Lote A7",
      sub: "Riverside · 600 kg · EC bajo",
      due: "1d atraso",
      overdue: true,
    },
    { title: "Confirmar cosecha · Nguyen", sub: "Lote activo jueves", due: "Hoy", overdue: false },
    {
      title: "Goteo · lista primavera",
      sub: "3 respondieron · 1 pide ajuste",
      due: "Hoy",
      overdue: false,
    },
  ],
};

export const featured = {
  image:
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
  // fallback local: /src/assets/strawberry.jpg
  badge: "★ Parcela de la semana",
  lot: "Invernadero 7 · Módulo #1204",
  meta: "1,140m² · Vertical · Hidropónico NFT",
  kpis: ["1.1k lecturas", "21 alertas", "4 DDC"],
  desc: "21 kg cosechados y 3 muestreos en los primeros 4 días — coincide con 7 lotes en ciclo, incluyendo Albión B3 al 91% de desarrollo.",
};

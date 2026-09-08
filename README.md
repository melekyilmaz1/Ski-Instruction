# 🏔️ Zirveye İz Bırak | Kayak Eğitimi ve Profesyonel Sürüş Rehberi

Modern web teknolojileriyle geliştirilmiş, profesyonel kayak tekniklerini keşfetmenizi sağlayan dinamik ve kullanıcı dostu bir portfolio/eğitim web sitesi.

🔗 **Canlı Site:** [Projeyi Canlı İncele](https://ski-instruction.vercel.app)

---

## ✨ Öne Çıkan Özellikler

- **Modern Hero Alanı:** Sayfa açılışında otomatik ve kesintisiz oynayan yüksek kaliteli arka plan video entegrasyonu.
- **Duyarlı (Responsive) Tasarım:** Mobil, tablet ve masaüstü cihazlarda kusursuz uyum sağlayan esnek arayüz.
- **Performans Odaklı Yapı:** Optimize edilmiş bileşen mimarisi ve temiz stil yönetimi.
- **İstatistik Blokları:** Ziyaretçilere güven veren deneyim ve öğrenci istatistikleri.

---

## 🛠️ Kullanılan Teknolojiler

Bu proje, güncel web geliştirme standartlarına uygun olarak aşağıdaki teknoloji yığınıyla geliştirilmiştir:

- **Frontend:** React, TypeScript, Vite
- **Stil Yönetimi:** Inline Styles & Tailwind CSS
- **Veritabanı & Backend Servisleri:** Supabase
- **Dağıtım (Deployment):** Vercel


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

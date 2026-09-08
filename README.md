# 🏔️ Zirveye İz Bırak | Kayak Eğitimi ve Profesyonel Sürüş Rehberi

Modern web teknolojileriyle geliştirilmiş, etkileyici **3D görsel katmanlar** ve sinematik animasyonlarla zenginleştirilmiş profesyonel bir kayak eğitimi ve portfolyo web sitesi.

🔗 **Canlı Site:** [Projeyi Canlı İncele](https://ski-instruction.vercel.app)

---

## ✨ Öne Çıkan Özellikler

- **3D & Sinematik Görsel Deneyim:** Sayfa açılışında derinlik kazandıran akıcı 3D animasyon entegrasyonu ve otomatik oynayan yüksek kaliteli arka plan dinamikleri.
- **Duyarlı (Responsive) Tasarım:** Mobil, tablet ve masaüstü cihazlarda kusursuz uyum sağlayan esnek arayüz.
- **Performans Odaklı Yapı:** Optimize edilmiş bileşen mimarisi ve sıfır gecikmeli render süreci.
- **İstatistik Blokları:** Ziyaretçilere güven veren deneyim ve öğrenci istatistikleri.

---

## 🛠️ Kullanılan Teknolojiler

Bu proje, güncel web geliştirme standartlarına uygun olarak aşağıdaki teknoloji yığınıyla geliştirilmiştir:

- **Frontend:** React, TypeScript, Vite
- **Görsel & Animasyon:** 3D Efektler ve Dinamik Medya Katmanları
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

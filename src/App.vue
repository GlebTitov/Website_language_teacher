<script setup>
import TutorHero from './components/TutorHero.vue'
import AboutTutor from './components/AboutTutor.vue'
import Services from './components/Services.vue'
import Advantages from './components/Advantages.vue'
import PriceTable from './components/PriceTable.vue'
import Testimonials from './components/Testimonials.vue'
import FAQ from './components/FAQ.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header class="site-header">
    <div class="logo">
      <img src="./assets/logo.svg" alt="Логотип репетитора" width="40" height="40" />
      <span class="logo-text">ЯзыкоМастер</span>
    </div>
    <nav class="main-nav">
      <ul class="nav-links">
        <li><a href="#about">О репетиторе</a></li>
        <li><a href="#services">Услуги</a></li>
        <li><a href="#prices">Цены</a></li>
        <li><a href="#reviews">Отзывы</a></li>
        <li><a href="#faq">Вопросы</a></li>
        <li><a href="#contact" class="contact-btn">Связаться</a></li>
      </ul>
    </nav>
    <button class="mobile-menu-btn">≡</button>
  </header>

  <main>
    <TutorHero />
    <AboutTutor />
    <Services />
    <Advantages />
    <PriceTable />
    <Testimonials />
    <FAQ />
    <ContactForm />
  </main>

  <Footer />
</template>

<style>
*{
  font-family: "Merriweather", serif;
}
:root {
  --primary-color: #5b6bbf;      /* Спокойный синий с фиолетовым оттенком */
  --primary-dark: #404c8d;       /* Темный вариант основного цвета */
  --secondary-color: #34495e;    /* Глубокий сине-серый */
  --text-color: #4a5568;         /* Темный серый для текста */
  --light-bg: #f7f9fc;           /* Светлый фон с холодным оттенком */
  --white: #ffffff;              /* Белый */
  --accent-color: #f39c12;       /* Теплый оранжевый акцент */
  --accent-dark: #d68910;        /* Темный вариант акцентного цвета */
  --neutral-light: #e2e8f0;      /* Светло-серый для разделителей */
  --success-color: #2ecc71;      /* Зеленый для элементов успеха */
}


body {
  line-height: 1.6;
  color: var(--text-color);
}

.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo-text {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--primary-color);
}

.main-nav {
  display: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 1.5rem;
}

.nav-links a {
  text-decoration: none;
  color: var(--secondary-color);
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.contact-btn {
  background-color: var(--primary-color);
  color: white !important;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.contact-btn:hover {
  background-color: var(--primary-dark);
}

.mobile-menu-btn {
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--secondary-color);
}

main {
  overflow: hidden;
}

@media (min-width: 1024px) {
  .main-nav {
    display: block;
  }

  .mobile-menu-btn {
    display: none;
  }
}
</style>
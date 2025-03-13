<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Освойте языки с профессиональным репетитором</h1>
      <h2 class="hero-subtitle">Индивидуальные занятия по английскому и русскому языкам</h2>
      <p class="hero-description">
        Помогу вам достичь свободного владения языком через персонализированный подход и современные методики обучения
      </p>
      <div class="cta-buttons">
        <button class="btn primary-btn">Записаться на пробный урок</button>
        <button class="btn secondary-btn">Узнать больше</button>
      </div>
    </div>
    <div class="hero-image">
      <img src="" alt="Репетитор по языкам" />
    </div>
    <div class="language-badges">
      <div class="badge english">
        <span class="badge-icon">🇬🇧</span>
        <span class="badge-text">Английский язык</span>
      </div>
      <div class="badge russian">
        <span class="badge-icon">🇷🇺</span>
        <span class="badge-text">Русский язык</span>
      </div>
    </div>
  </section>
</template>

<script setup>
// Компонент первого экрана (hero section) для лендинга репетитора
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  background: var(--light-bg);
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 650px;
  text-align: center;
  z-index: 2;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--secondary-color);
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-color);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
}

.primary-btn:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(91, 107, 191, 0.3);
}

.secondary-btn {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.secondary-btn:hover {
  background-color: rgba(91, 107, 191, 0.1);
  transform: translateY(-3px);
}

.hero-image {
  margin-top: 2rem;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

.language-badges {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 600;
}

.english {
  background-color: rgba(91, 107, 191, 0.1);
  color: var(--primary-color);
}

.russian {
  background-color: rgba(243, 156, 18, 0.1);
  color: var(--accent-color);
}

.badge-icon {
  font-size: 1.2rem;
}

@media (min-width: 1024px) {
  .hero {
    flex-direction: row;
    justify-content: space-between;
    padding: 6rem 4rem;
    min-height: 80vh;
  }

  .hero-content {
    text-align: left;
    margin-right: 2rem;
  }

  .cta-buttons {
    justify-content: flex-start;
  }

  .hero-image {
    margin-top: 0;
  }

  .language-badges {
    position: absolute;
    right: 4rem;
    top: 2rem;
  }
}
</style>
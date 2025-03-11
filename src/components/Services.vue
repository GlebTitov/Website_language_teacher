<template>
  <section class="services-section" id="services">
    <div class="container">
      <h2 class="section-title">Мои услуги</h2>
      <p class="section-subtitle">Выберите направление обучения, которое подходит именно вам</p>

      <div class="services-container">
        <!-- Карточка 1 -->
        <div class="service-card">
          <div class="service-icon">
            <Icon icon="mdi:school" width="32" height="32" />
          </div>
          <h3 class="service-title">Подготовка к экзаменам</h3>
          <p class="service-description">
            Подготовка к международным экзаменам (IELTS, TOEFL, Cambridge) и государственным (ОГЭ, ЕГЭ) с учетом последних требований и форматов.
          </p>
          <ul class="service-features">
            <li>Практика всех разделов экзамена</li>
            <li>Разбор типичных ошибок</li>
            <li>Тестирование в формате экзамена</li>
          </ul>
          <button class="service-btn">Подробнее</button>
        </div>

        <!-- Карточка 2 -->
        <div class="service-card">
          <div class="service-icon">
            <Icon icon="mdi:briefcase" width="32" height="32" />
          </div>
          <h3 class="service-title">Деловой английский</h3>
          <p class="service-description">
            Освоение навыков деловой коммуникации, ведения переговоров, презентаций, деловой переписки на английском языке.
          </p>
          <ul class="service-features">
            <li>Бизнес-лексика и терминология</li>
            <li>Навыки проведения встреч</li>
            <li>Написание деловых писем</li>
          </ul>
          <button class="service-btn">Подробнее</button>
        </div>

        <!-- Карточка 3 -->
        <div class="service-card">
          <div class="service-icon">
            <Icon icon="mdi:chat" width="32" height="32" />
          </div>
          <h3 class="service-title">Разговорный английский</h3>
          <p class="service-description">
            Развитие навыков повседневного общения для путешествий, работы и повседневной жизни. Преодоление языкового барьера.
          </p>
          <ul class="service-features">
            <li>Ситуативные диалоги</li>
            <li>Актуальные темы и идиомы</li>
            <li>Практика с аудио материалами</li>
          </ul>
          <button class="service-btn">Подробнее</button>
        </div>

        <!-- Карточка 4 -->
        <div class="service-card">
          <div class="service-icon">
            <Icon icon="mdi:earth" width="32" height="32" />
          </div>
          <h3 class="service-title">Русский как иностранный</h3>
          <p class="service-description">
            Изучение русского языка с нуля для иностранцев. Грамматика, лексика, разговорная практика и погружение в культуру.
          </p>
          <ul class="service-features">
            <li>Адаптированная методика</li>
            <li>Культурный контекст</li>
            <li>Индивидуальный темп</li>
          </ul>
          <button class="service-btn">Подробнее</button>
        </div>

        <!-- Карточка 5 -->
        <div class="service-card">
          <div class="service-icon">
            <Icon icon="mdi:account-group" width="32" height="32" />
          </div>
          <h3 class="service-title">Английский для детей</h3>
          <p class="service-description">
            Увлекательные занятия для детей разных возрастов с использованием игр, песен, мультфильмов и интерактивных заданий.
          </p>
          <ul class="service-features">
            <li>Игровой формат обучения</li>
            <li>Красочные материалы</li>
            <li>Индивидуальный подход</li>
          </ul>
          <button class="service-btn">Подробнее</button>
        </div>

        <!-- Карточка 6 -->
        <div class="service-card">
          <div class="service-icon">
            <Icon icon="mdi:code-tags" width="32" height="32" />
          </div>
          <h3 class="service-title">Технический английский</h3>
          <p class="service-description">
            Специализированный курс для IT-специалистов, инженеров и технических работников. Профессиональная терминология и навыки.
          </p>
          <ul class="service-features">
            <li>Техническая документация</li>
            <li>Профессиональный словарь</li>
            <li>Практика с реальными кейсами</li>
          </ul>
          <button class="service-btn">Подробнее</button>
        </div>
      </div>

      <div class="format-section">
        <h3 class="format-title">Форматы обучения</h3>
        <div class="format-grid">
          <div class="format-item">
            <div class="format-icon">
              <Icon icon="mdi:account-group" width="32" height="32" />
            </div>
            <h4>Групповые занятия</h4>
            <p>До 5 человек в группе<br>2 раза в неделю</p>
          </div>
          <div class="format-item">
            <div class="format-icon">
              <Icon icon="mdi:teach" width="32" height="32" />
            </div>
            <h4>Индивидуальные уроки</h4>
            <p>Персональное расписание<br>Гибкая программа</p>
          </div>
          <div class="format-item">
            <div class="format-icon">
              <Icon icon="mdi:video" width="32" height="32" />
            </div>
            <h4>Онлайн обучение</h4>
            <p>Zoom или Skype<br>Записи занятий</p>
          </div>
          <div class="format-item">
            <div class="format-icon">
              <Icon icon="mdi:home" width="32" height="32" />
            </div>
            <h4>Занятия на дому</h4>
            <p>В удобное время<br>В комфортных условиях</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.services-section {
  padding: 5rem 2rem;
  background-color: var(--light-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.2rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  position: relative;
  font-family: "Merriweather", serif;
}

.section-subtitle {
  text-align: center;
  color: var(--text-color);
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 3rem;
}

.section-title:after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-dark));
}

/* Заменяем grid на flex с оберткой для лучшего контроля отступов */
.services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  margin-bottom: 4rem;
}

.service-card {
  background-color: var(--white);
  border-radius: 10px;
  padding: 2rem;
  flex: 0 0 calc(33.33% - 30px);
  max-width: calc(33.33% - 30px);
  box-sizing: border-box;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  margin-bottom: 30px;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.service-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  color: var(--white);
}

.service-title {
  font-size: 1.4rem;
  color: var(--secondary-color);
  margin-bottom: 1rem;
  font-family: "Merriweather", serif;
}

.service-description {
  color: var(--text-color);
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-features {
  list-style-type: none;
  margin-bottom: 1.5rem;
  padding-left: 0;
}

.service-features li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.service-features li:before {
  content: "✓";
  color: var(--primary-color);
  position: absolute;
  left: 0;
}

.service-btn {
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  padding: 0.6rem 1.5rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  align-self: flex-start;
  margin-top: auto;
  font-family: "Merriweather", serif;
}

.service-btn:hover {
  background-color: var(--primary-color);
  color: var(--white);
}

.format-section {
  clear: both;
  margin-top: 3rem;
  background-color: var(--white);
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.format-title {
  text-align: center;
  font-size: 1.8rem;
  color: var(--secondary-color);
  margin-bottom: 2.5rem;
  font-family: "Merriweather", serif;
}

.format-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.format-icon {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
}

.format-item h4 {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
  font-family: "Merriweather", serif;
}

.format-item p {
  color: var(--text-color);
  line-height: 1.5;
}

/* Медиа-запросы для адаптивности */
@media (max-width: 1024px) {
  .service-card {
    flex: 0 0 calc(50% - 30px);
    max-width: calc(50% - 30px);
  }
}

@media (max-width: 768px) {
  .service-card {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .format-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 480px) {
  .format-grid {
    grid-template-columns: 1fr;
  }
}
</style>
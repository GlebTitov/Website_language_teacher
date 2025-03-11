<template>
  <section class="price-section" id="prices">
    <div class="container">
      <h2 class="section-title">Стоимость занятий</h2>
      <p class="section-subtitle">Выберите подходящий тариф или свяжитесь со мной для создания индивидуальной программы</p>

      <div class="pricing-toggle">
        <span :class="{'active': !isYearly}">Разовые занятия</span>
        <label class="switch">
          <input type="checkbox" v-model="isYearly">
          <span class="slider round"></span>
        </label>
        <span :class="{'active': isYearly}">Абонемент на месяц</span>
        <div class="discount-badge" v-if="isYearly">Скидка 15%</div>
      </div>

      <div class="price-cards">
        <div class="price-card">
          <div class="card-header">
            <h3 class="card-title">Стартовый</h3>
            <div class="price">
              <span class="amount">{{ isYearly ? '9 900' : '1 500' }}</span>
              <span class="period">{{ isYearly ? '₽/месяц' : '₽/занятие' }}</span>
            </div>
            <div class="details">{{ isYearly ? '8 занятий по 60 минут' : '60 минут' }}</div>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>Индивидуальная программа</li>
              <li>Домашние задания</li>
              <li>Учебные материалы</li>
              <li>Поддержка по WhatsApp</li>
              <li class="disabled">Персональный словарь</li>
              <li class="disabled">Регулярное тестирование</li>
              <li class="disabled">Аудио и видео материалы</li>
            </ul>
          </div>
          <div class="card-footer">
            <button class="price-btn">Выбрать</button>
          </div>
        </div>

        <div class="price-card popular">
          <div class="popular-badge">Популярный</div>
          <div class="card-header">
            <h3 class="card-title">Продвинутый</h3>
            <div class="price">
              <span class="amount">{{ isYearly ? '13 600' : '1 900' }}</span>
              <span class="period">{{ isYearly ? '₽/месяц' : '₽/занятие' }}</span>
            </div>
            <div class="details">{{ isYearly ? '8 занятий по 80 минут' : '80 минут' }}</div>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>Индивидуальная программа</li>
              <li>Домашние задания</li>
              <li>Учебные материалы</li>
              <li>Поддержка по WhatsApp</li>
              <li>Персональный словарь</li>
              <li>Регулярное тестирование</li>
              <li class="disabled">Аудио и видео материалы</li>
            </ul>
          </div>
          <div class="card-footer">
            <button class="price-btn primary">Выбрать</button>
          </div>
        </div>

        <div class="price-card">
          <div class="card-header">
            <h3 class="card-title">Профессиональный</h3>
            <div class="price">
              <span class="amount">{{ isYearly ? '18 700' : '2 500' }}</span>
              <span class="period">{{ isYearly ? '₽/месяц' : '₽/занятие' }}</span>
            </div>
            <div class="details">{{ isYearly ? '8 занятий по 90 минут' : '90 минут' }}</div>
          </div>
          <div class="card-body">
            <ul class="features">
              <li>Индивидуальная программа</li>
              <li>Домашние задания</li>
              <li>Учебные материалы</li>
              <li>Поддержка по WhatsApp</li>
              <li>Персональный словарь</li>
              <li>Регулярное тестирование</li>
              <li>Аудио и видео материалы</li>
            </ul>
          </div>
          <div class="card-footer">
            <button class="price-btn">Выбрать</button>
          </div>
        </div>
      </div>

      <div class="additional-info">
        <div class="info-block">
          <h3>Дополнительные услуги</h3>
          <ul>
            <li><span>Проверка текстов и эссе</span> <span>от 800 ₽</span></li>
            <li><span>Разговорный клуб (группа до 5 чел.)</span> <span>от 700 ₽/час</span></li>
            <li><span>Интенсивный курс (3 раза в неделю)</span> <span>скидка 10%</span></li>
          </ul>
        </div>
        <div class="info-block">
          <h3>Скидки и бонусы</h3>
          <ul>
            <li>Скидка 5% при оплате сразу двух месяцев</li>
            <li>Бесплатное вводное занятие для новых учеников</li>
            <li>Скидка 10% для семейных пар и родственников</li>
            <li>Бонусное занятие при оплате 10 занятий</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const isYearly = ref(false);
</script>

<style scoped>
.price-section {
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

.pricing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  position: relative;
}

.pricing-toggle span {
  margin: 0 1rem;
  color: var(--text-color);
}

.pricing-toggle span.active {
  color: var(--primary-color);
  font-weight: 600;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--neutral-light);
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 4px;
  bottom: 4px;
  background-color: var(--white);
  transition: .4s;
}

input:checked + .slider {
  background-color: var(--primary-color);
}

input:checked + .slider:before {
  transform: translateX(30px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.discount-badge {
  position: absolute;
  right: 25%;
  top: -15px;
  background-color: var(--accent-color);
  color: var(--white);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.price-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 4rem;
}

.price-card {
  background-color: var(--white);
  border-radius: 10px;
  width: 100%;
  max-width: 350px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
  position: relative;
}

.price-card:hover {
  transform: translateY(-10px);
}

.price-card.popular {
  border: 2px solid var(--primary-color);
  transform: scale(1.05);
}

.price-card.popular:hover {
  transform: scale(1.05) translateY(-10px);
}

.popular-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.card-header {
  padding: 2rem;
  background-color: var(--light-bg);
  text-align: center;
}

.card-title {
  color: var(--secondary-color);
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
}

.price {
  margin-bottom: 0.5rem;
}

.amount {
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--primary-color);
}

.period {
  font-size: 1rem;
  color: var(--text-color);
}

.details {
  color: var(--text-color);
  font-size: 0.9rem;
}

.card-body {
  padding: 2rem;
}

.features {
  list-style-type: none;
}

.features li {
  padding: 0.5rem 0;
  position: relative;
  padding-left: 1.5rem;
}

.features li:before {
  content: "✓";
  color: var(--success-color);
  position: absolute;
  left: 0;
}

.features li.disabled {
  color: var(--neutral-light);
}

.features li.disabled:before {
  content: "✕";
  color: var(--accent-color);
}

.card-footer {
  padding: 1.5rem 2rem 2rem;
  text-align: center;
}

.price-btn {
  width: 100%;
  padding: 0.8rem;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.price-btn:hover {
  background-color: var(--primary-color);
  color: var(--white);
}

.price-btn.primary {
  background-color: var(--primary-color);
  color: var(--white);
}

.price-btn.primary:hover {
  background-color: var(--primary-dark);
}

.additional-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.info-block {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.info-block h3 {
  color: var(--secondary-color);
  margin-bottom: 1.2rem;
  font-size: 1.3rem;
}

.info-block ul {
  list-style-type: none;
}

.info-block li {
  padding: 0.5rem 0;
  border-bottom: 1px solid var(--neutral-light);
  display: flex;
  justify-content: space-between;
}

.info-block li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
  .price-cards {
    flex-direction: column;
    align-items: center;
  }

  .price-card {
    max-width: 100%;
  }

  .price-card.popular {
    transform: scale(1);
    order: -1;
  }

  .price-card.popular:hover {
    transform: translateY(-10px);
  }

  .additional-info {
    grid-template-columns: 1fr;
  }
}
</style>
<template>
  <section class="about-section" id="about">
    <div class="container">
      <h2 class="section-title">О репетиторе</h2>
      <div class="about-content">
        <div class="about-image">
          <img src="" alt="Фото репетитора" />
          <div class="experience-badge">
            <span class="experience-years">10+</span>
            <span class="experience-text">лет опыта</span>
          </div>
        </div>
        <div class="about-text">
          <h3 class="tutor-name">Екатерина Дахненко</h3>
          <p class="tutor-qualification">Дипломированный лингвист, сертифицированный преподаватель</p>

          <div class="education-info">
            <h4>Образование:</h4>
            <ul>
              <li>Московский Государственный Лингвистический Университет</li>
              <li>Cambridge CELTA (Certificate in Teaching English to Speakers of Other Languages)</li>
              <li>IELTS Band 8.5 (C2 Advanced)</li>
            </ul>
          </div>

          <p class="about-description">
            Помогаю студентам всех возрастов и уровней подготовки освоить английский и русский языки уже более 10 лет.
            Мой подход включает индивидуальную адаптацию методики под каждого ученика, что позволяет достигать
            максимальных результатов в кратчайшие сроки.
          </p>

          <div class="specialization">
            <h4>Специализация:</h4>
            <ul>
              <li>Подготовка к международным экзаменам (IELTS, TOEFL, Cambridge)</li>
              <li>Разговорный английский для путешествий и работы</li>
              <li>Деловой английский и бизнес-коммуникация</li>
              <li>Русский как иностранный</li>
              <li>Школьная программа и подготовка к ОГЭ/ЕГЭ</li>
            </ul>
          </div>

          <div class="cta-container">
            <button class="btn about-cta">Бесплатная консультация</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Компонент с информацией о репетиторе
</script>

<style scoped>
.about-section {
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
  margin-bottom: 3rem;
  position: relative;
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

.about-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.about-image {
  position: relative;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
}

.about-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.experience-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: var(--white);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(91, 107, 191, 0.3);
}

.experience-years {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
}

.experience-text {
  font-size: 0.9rem;
}

.about-text {
  flex: 1;
}

.tutor-name {
  font-size: 1.8rem;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
}

.tutor-qualification {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.education-info, .specialization {
  margin-bottom: 1.5rem;
}

.education-info h4, .specialization h4 {
  font-size: 1.2rem;
  color: var(--secondary-color);
  margin-bottom: 0.8rem;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.about-description {
  line-height: 1.6;
  color: var(--text-color);
  margin-bottom: 1.5rem;
}

.cta-container {
  margin-top: 2rem;
}

.btn {
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.about-cta {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
}

.about-cta:hover {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(91, 107, 191, 0.3);
}

@media (min-width: 1024px) {
  .about-content {
    flex-direction: row;
    align-items: flex-start;
  }

  .about-image {
    flex: 0 0 350px;
    margin: 0;
  }

  .about-text {
    padding-left: 3rem;
  }
}
</style>
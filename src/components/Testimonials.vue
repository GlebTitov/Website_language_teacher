<template>
  <section class="testimonials-section" id="reviews">
    <div class="container">
      <h2 class="section-title">Отзывы моих учеников</h2>
      <p class="section-subtitle">Узнайте, что говорят студенты о моем подходе к обучению</p>

      <div class="testimonials-stats">
        <div class="stat-item">
          <div class="stat-number">500+</div>
          <div class="stat-label">Довольных учеников</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">9.8</div>
          <div class="stat-label">Средняя оценка</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">98%</div>
          <div class="stat-label">Рекомендуют</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">5+</div>
          <div class="stat-label">Лет опыта</div>
        </div>
      </div>

      <div class="testimonials-slider">
        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="rating">★★★★★</div>
            <p class="testimonial-text">
              "Занимаюсь с Анной уже больше года. Мой уровень вырос с Elementary до Intermediate. Особенно нравится, что на занятиях мы разбираем актуальные новости и обсуждаем интересные темы, а не просто учебник."
            </p>
          </div>
          <div class="testimonial-author">
            <img src="" alt="Мария К." class="author-image" />
            <div class="author-info">
              <h4 class="author-name">Мария К.</h4>
              <p class="author-position">Маркетолог</p>
              <p class="course-name">Деловой английский</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="rating">★★★★★</div>
            <p class="testimonial-text">
              "Благодаря занятиям с Анной я смог успешно сдать IELTS на 7.5 баллов и поступить в университет в Великобритании. Очень благодарен за внимательный подход и проработку всех аспектов экзамена!"
            </p>
          </div>
          <div class="testimonial-author">
            <img src="" alt="Алексей П." class="author-image" />
            <div class="author-info">
              <h4 class="author-name">Алексей П.</h4>
              <p class="author-position">Студент</p>
              <p class="course-name">Подготовка к IELTS</p>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <div class="testimonial-content">
            <div class="rating">★★★★★</div>
            <p class="testimonial-text">
              "Моему сыну 9 лет, и он всегда с нетерпением ждет уроков английского с Анной. Методика с играми и мультфильмами дает отличные результаты - ребенок начал свободно говорить простые фразы уже через 3 месяца занятий."
            </p>
          </div>
          <div class="testimonial-author">
            <img src="" alt="Елена В." class="author-image" />
            <div class="author-info">
              <h4 class="author-name">Елена В.</h4>
              <p class="author-position">Мама ученика</p>
              <p class="course-name">Английский для детей</p>
            </div>
          </div>
        </div>
      </div>

      <div class="testimonial-platforms">
        <h3>Отзывы на площадках</h3>
        <div class="platform-logos">
          <div class="platform">
            <img src="" alt="Profi.ru" />
            <div class="platform-rating">4.9</div>
          </div>
          <div class="platform">
            <img src="" alt="Repetit.ru" />
            <div class="platform-rating">5.0</div>
          </div>
          <div class="platform">
            <img src="" alt="YourTutor" />
            <div class="platform-rating">4.8</div>
          </div>
        </div>
      </div>

      <div class="success-stories">
        <h3 class="stories-title">Истории успеха</h3>
        <div class="stories-grid">
          <div class="story-card">
            <div class="story-badge">IELTS 7.5</div>
            <h4>Поступление в Лондонский университет</h4>
            <p>Ольга, 25 лет</p>
          </div>
          <div class="story-card">
            <div class="story-badge">B2 → C1</div>
            <h4>Повышение в международной компании</h4>
            <p>Дмитрий, 32 года</p>
          </div>
          <div class="story-card">
            <div class="story-badge">100/100</div>
            <h4>Сдача ЕГЭ на максимальный балл</h4>
            <p>Анастасия, 17 лет</p>
          </div>
          <div class="story-card">
            <div class="story-badge">A1 → B1</div>
            <h4>Свободное общение во время путешествий</h4>
            <p>Сергей, 40 лет</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Компонент с отзывами студентов
</script>

<style scoped>
.testimonials-section {
  padding: 5rem 2rem;
  background-color: var(--white);
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

.testimonials-stats {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  background-color: var(--light-bg);
  padding: 2rem;
  border-radius: 10px;
}

.stat-item {
  text-align: center;
  padding: 1rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  color: var(--text-color);
  font-weight: 500;
}

.testimonials-slider {
  display: flex;
  gap: 2rem;
  overflow-x: auto;
  padding: 1rem 0.5rem 2rem;
  margin: 0 -0.5rem 4rem;
  scrollbar-width: none;
}

.testimonials-slider::-webkit-scrollbar {
  display: none;
}

.testimonial-card {
  flex: 0 0 350px;
  background-color: var(--light-bg);
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.testimonial-card:hover {
  transform: translateY(-10px);
}

.testimonial-content {
  margin-bottom: 1.5rem;
}

.rating {
  color: var(--accent-color);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.testimonial-text {
  color: var(--text-color);
  font-style: italic;
  line-height: 1.6;
}

.testimonial-author {
  display: flex;
  align-items: center;
}

.author-image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
}

.author-name {
  font-weight: 600;
  color: var(--secondary-color);
  margin-bottom: 0.2rem;
}

.author-position {
  color: var(--text-color);
  font-size: 0.9rem;
  margin-bottom: 0.2rem;
}

.course-name {
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: 500;
}

.testimonial-platforms {
  margin-bottom: 4rem;
  text-align: center;
}

.testimonial-platforms h3 {
  color: var(--secondary-color);
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.platform-logos {
  display: flex;
  justify-content: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.platform {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.platform img {
  height: 40px;
  margin-bottom: 1rem;
}

.platform-rating {
  background-color: var(--light-bg);
  padding: 0.3rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  color: var(--secondary-color);
}

.success-stories {
  padding: 3rem;
  background-color: var(--light-bg);
  border-radius: 10px;
}

.stories-title {
  text-align: center;
  font-size: 1.5rem;
  color: var(--secondary-color);
  margin-bottom: 2.5rem;
}

.stories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
}

.story-card {
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 10px;
  position: relative;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.story-badge {
  position: absolute;
  top: -10px;
  right: 10px;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.story-card h4 {
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.story-card p {
  color: var(--text-color);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .testimonials-stats {
    flex-direction: column;
    align-items: center;
  }

  .testimonial-card {
    flex: 0 0 90%;
  }
}
</style>
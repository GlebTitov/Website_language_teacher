<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <h2>English Teacher</h2>
          <p>Профессиональное обучение английскому языку</p>
        </div>

        <div class="footer-nav">
          <h3>Навигация</h3>
          <ul>
            <li><a href="#home">Главная</a></li>
            <li><a href="#about">Обо мне</a></li>
            <li><a href="#services">Услуги</a></li>
            <li><a href="#programs">Программы</a></li>
            <li><a href="#reviews">Отзывы</a></li>
            <li><a href="#prices">Цены</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Контакты</a></li>
          </ul>
        </div>

        <div class="footer-schedule">
          <h3>Время работы</h3>
          <ul>
            <li><span>Понедельник - Пятница:</span> <span>9:00 - 19:00</span></li>
            <li><span>Суббота:</span> <span>10:00 - 16:00</span></li>
            <li><span>Воскресенье:</span> <span>Выходной</span></li>
          </ul>
          <p class="note">* Время указано по Московскому времени (GMT+3)</p>
        </div>

        <div class="footer-contact">
          <h3>Контакты</h3>
          <ul>
            <li><i class="fas fa-phone"></i> +7 (999) 123-45-67</li>
            <li><i class="fas fa-envelope"></i> english@example.com</li>
            <li><i class="fas fa-map-marker-alt"></i> Москва, ул. Примерная, 123</li>
          </ul>
          <div class="social-links">
            <a href="#" class="social-link" title="WhatsApp">
              <i class="fab fa-whatsapp"></i>
            </a>
            <a href="#" class="social-link" title="Telegram">
              <i class="fab fa-telegram-plane"></i>
            </a>
            <a href="#" class="social-link" title="Instagram">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="social-link" title="VK">
              <i class="fab fa-vk"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="copyright">
          &copy; {{ new Date().getFullYear() }} English Teacher. Все права защищены.
        </div>
        <div class="footer-links">
          <a href="#">Политика конфиденциальности</a>
          <a href="#">Условия использования</a>
          <a href="#">Карта сайта</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer script
</script>

<style scoped>
.site-footer {
  background-color: var(--secondary-color);
  color: white;
  padding: 4rem 2rem 2rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.footer-logo h2 {
  font-size: 1.8rem;
  margin: 0 0 1rem 0;
  color: var(--white);
}

.footer-logo p {
  color: var(--neutral-light);
  line-height: 1.5;
}

.footer-nav h3,
.footer-schedule h3,
.footer-contact h3 {
  font-size: 1.2rem;
  margin: 0 0 1.2rem 0;
  position: relative;
  padding-bottom: 0.8rem;
}

.footer-nav h3:after,
.footer-schedule h3:after,
.footer-contact h3:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-nav ul,
.footer-schedule ul,
.footer-contact ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer-nav li {
  margin-bottom: 0.5rem;
}

.footer-nav a {
  color: var(--neutral-light);
  text-decoration: none;
  transition: color 0.3s;
}

.footer-nav a:hover {
  color: var(--primary-color);
}

.footer-schedule li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: var(--neutral-light);
}

.note {
  color: var(--neutral-light);
  font-size: 0.9rem;
  margin-top: 1rem;
}

.footer-contact li {
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: var(--neutral-light);
}

.footer-contact i {
  margin-right: 0.8rem;
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 0.8rem;
  margin-top: 1.5rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: var(--primary-dark);
  border-radius: 50%;
  color: var(--white);
  font-size: 1rem;
  transition: all 0.3s;
  text-decoration: none;
}

.social-link:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--primary-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.copyright {
  color: var(--neutral-light);
  font-size: 0.9rem;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
}

.footer-links a {
  color: var(--neutral-light);
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.footer-links a:hover {
  color: var(--primary-color);
}

@media (max-width: 992px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .footer-content {
    grid-template-columns: 1fr;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-links {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
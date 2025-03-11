<template>
  <section class="contact-section" id="contact">
    <div class="container">
      <h2 class="section-title">Свяжитесь со мной</h2>
      <p class="section-subtitle">Запишитесь на пробное занятие или задайте вопрос</p>

      <div class="contact-content">
        <div class="contact-info">
          <div class="info-card">
            <div class="icon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="info">
              <h3>Телефон</h3>
              <p>+7 (999) 123-45-67</p>
              <p class="schedule">Пн-Пт: 9:00-19:00</p>
            </div>
          </div>

          <div class="info-card">
            <div class="icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info">
              <h3>Email</h3>
              <p>english@example.com</p>
              <p class="schedule">Ответ в течение 24 часов</p>
            </div>
          </div>

          <div class="info-card">
            <div class="icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info">
              <h3>Адрес</h3>
              <p>Москва, ул. Примерная, 123</p>
              <p class="schedule">Онлайн и очно по договоренности</p>
            </div>
          </div>

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

        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Ваше имя <span class="required">*</span></label>
            <input
                type="text"
                id="name"
                v-model="form.name"
                required
                placeholder="Иван Иванов"
            >
          </div>

          <div class="form-group">
            <label for="email">Email <span class="required">*</span></label>
            <input
                type="email"
                id="email"
                v-model="form.email"
                required
                placeholder="ivan@example.com"
            >
          </div>

          <div class="form-group">
            <label for="phone">Телефон</label>
            <input
                type="tel"
                id="phone"
                v-model="form.phone"
                placeholder="+7 (999) 123-45-67"
            >
          </div>

          <div class="form-group">
            <label for="level">Ваш уровень английского</label>
            <select id="level" v-model="form.level">
              <option value="">Выберите уровень</option>
              <option value="beginner">Начинающий (A1)</option>
              <option value="elementary">Элементарный (A2)</option>
              <option value="intermediate">Средний (B1)</option>
              <option value="upper">Выше среднего (B2)</option>
              <option value="advanced">Продвинутый (C1-C2)</option>
              <option value="unknown">Не знаю свой уровень</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Сообщение <span class="required">*</span></label>
            <textarea
                id="message"
                v-model="form.message"
                required
                placeholder="Расскажите о своих целях или задайте вопрос"
            ></textarea>
          </div>

          <div class="form-agreement">
            <input type="checkbox" id="agreement" v-model="form.agreement" required>
            <label for="agreement">Я согласен на обработку персональных данных <span class="required">*</span></label>
          </div>

          <button type="submit" class="submit-button" :disabled="isSubmitting">
            {{ isSubmitting ? 'Отправка...' : 'Отправить сообщение' }}
          </button>

          <div v-if="formStatus" :class="`form-status ${formStatus.type}`">
            {{ formStatus.message }}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue';

// Telegram configuration
const TELEGRAM_BOT_TOKEN = '7995535041:AAGwEM0p8317FuYxXRFdERRIWURbLeoJAf4';
const TELEGRAM_CHAT_ID = '-1002497875613';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  level: '',
  message: '',
  agreement: false
});

const isSubmitting = ref(false);
const formStatus = ref(null);

// Function to get level name in Russian
const getLevelName = (levelValue) => {
  const levels = {
    'beginner': 'Начинающий (A1)',
    'elementary': 'Элементарный (A2)',
    'intermediate': 'Средний (B1)',
    'upper': 'Выше среднего (B2)',
    'advanced': 'Продвинутый (C1-C2)',
    'unknown': 'Не знает свой уровень'
  };
  return levels[levelValue] || 'Не указан';
};

const submitForm = async () => {
  isSubmitting.value = true;

  try {
    // Format message for Telegram - simplified to avoid potential formatting issues
    const levelText = form.level ? getLevelName(form.level) : 'Не указан';
    const messageText = `Новая заявка с сайта\n\nИмя: ${form.name}\nEmail: ${form.email}\nТелефон: ${form.phone || 'Не указан'}\nУровень английского: ${levelText}\n\nСообщение:\n${form.message}`;

    // Send message to Telegram using plain text (no Markdown)
    const telegramApiUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(telegramApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: messageText
      })
    });

    const result = await response.json();
    console.log('Telegram API response:', result);

    if (!result.ok) {
      throw new Error(`Telegram API error: ${result.description}`);
    }

    // Success message
    formStatus.value = {
      type: 'success',
      message: 'Спасибо за сообщение! Я свяжусь с вами в ближайшее время.'
    };

    // Reset form
    Object.keys(form).forEach(key => {
      if (key === 'agreement') form[key] = false;
      else form[key] = '';
    });

  } catch (error) {
    console.error('Form submission error:', error);

    // Error message
    formStatus.value = {
      type: 'error',
      message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте еще раз.'
    };
  } finally {
    isSubmitting.value = false;

    // Hide message after 5 seconds
    setTimeout(() => {
      formStatus.value = null;
    }, 5000);
  }
};
</script>

<style scoped>
.contact-section {
  padding: 5rem 2rem;
  background-color: var(--light-bg);
  font-family: "Merriweather", serif;
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.info-card {
  display: flex;
  background-color: var(--white);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.icon {
  width: 50px;
  height: 50px;
  background-color: rgba(91, 107, 191, 0.1); /* var(--primary-color) с прозрачностью */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: var(--primary-color);
  font-size: 1.5rem;
}

.info h3 {
  color: var(--secondary-color);
  margin: 0 0 0.5rem 0;
  font-size: 1.2rem;
}

.info p {
  color: var(--text-color);
  margin: 0;
}

.schedule {
  font-size: 0.9rem;
  color: #95a5a6;
  margin-top: 0.3rem !important;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--white);
  border-radius: 50%;
  color: var(--primary-color);
  font-size: 1.2rem;
  transition: all 0.3s;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  text-decoration: none;
}

.social-link:hover {
  background-color: var(--primary-color);
  color: var(--white);
  transform: translateY(-3px);
}

.contact-form {
  background-color: var(--white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--secondary-color);
  font-weight: 600;
}

.required {
  color: #e74c3c;
}

input[type="text"],
input[type="email"],
input[type="tel"],
select,
textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid var(--neutral-light);
  border-radius: 5px;
  font-size: 1rem;
  transition: border 0.3s;
  font-family: "Merriweather", serif;
}

input:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

textarea {
  min-height: 120px;
  resize: vertical;
}

.form-agreement {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}

.form-agreement input {
  margin-top: 0.3rem;
  margin-right: 0.5rem;
}

.submit-button {
  width: 100%;
  padding: 1rem;
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: "Merriweather", serif;
}

.submit-button:hover {
  background-color: var(--primary-dark);
}

.submit-button:disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.form-status {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
}

.form-status.success {
  background-color: rgba(46, 204, 113, 0.2); /* var(--success-color) с прозрачностью */
  color: var(--success-color);
}

.form-status.error {
  background-color: #f8d7da;
  color: #721c24;
}

@media (max-width: 992px) {
  .contact-content {
    grid-template-columns: 1fr;
  }

  .contact-info {
    order: 2;
  }

  .contact-form {
    order: 1;
    margin-bottom: 2rem;
  }

  .info-card {
    max-width: 400px;
  }
}

@media (max-width: 576px) {
  .info-card {
    flex-direction: column;
  }

  .icon {
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
</style>
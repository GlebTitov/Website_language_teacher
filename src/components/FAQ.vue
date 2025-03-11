<template>
  <section class="faq-section" id="faq">
    <div class="container">
      <h2 class="section-title">Часто задаваемые вопросы</h2>
      <p class="section-subtitle">Ответы на популярные вопросы о занятиях английским языком</p>

      <div class="faq-list">
        <div class="faq-item" v-for="(item, index) in faqItems" :key="index">
          <div
              class="faq-question"
              @click="toggleFaq(index)"
              :class="{'active': activeIndex === index}"
          >
            <h3>{{ item.question }}</h3>
            <span class="toggle-icon">{{ activeIndex === index ? '−' : '+' }}</span>
          </div>
          <div class="faq-answer" :class="{'active': activeIndex === index}">
            <p>{{ item.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqItems = [
  {
    question: "Какой у вас опыт преподавания?",
    answer: "Я преподаю английский язык более 7 лет, имею международный сертификат TEFL и опыт работы как с детьми, так и со взрослыми. За это время я разработала эффективную методику обучения, которая помогает ученикам быстро прогрессировать."
  },
  {
    question: "Как проходят онлайн-занятия?",
    answer: "Онлайн-занятия проводятся через Zoom или Skype. Я использую интерактивные материалы, презентации и упражнения. Для эффективного обучения вам понадобится стабильное интернет-соединение, компьютер или планшет и наушники с микрофоном."
  },
  {
    question: "Как происходит оплата занятий?",
    answer: "Оплата производится заранее за месяц или за отдельное занятие через банковский перевод, PayPal или систему быстрых платежей. После оплаты я отправляю чек-подтверждение."
  },
  {
    question: "Можно ли отменить или перенести занятие?",
    answer: "Да, занятие можно перенести или отменить не позднее чем за 24 часа до его начала без потери оплаты. В случае отмены менее чем за 24 часа, занятие считается проведенным."
  },
  {
    question: "С какого уровня вы принимаете учеников?",
    answer: "Я работаю с учениками всех уровней подготовки: от начального (Beginner) до продвинутого (Advanced). Перед началом обучения я провожу бесплатное тестирование для определения вашего уровня."
  },
  {
    question: "Сколько времени нужно, чтобы выучить английский?",
    answer: "Это зависит от многих факторов: вашего текущего уровня, целей, интенсивности занятий и времени, которое вы готовы уделять самостоятельной работе. Обычно для перехода на следующий уровень требуется от 3 до 6 месяцев регулярных занятий."
  }
];
</script>

<style scoped>
.faq-section {
  padding: 5rem 2rem;
  background-color: var(--white);
  font-family: "Merriweather", serif;
}

.container {
  max-width: 1000px;
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

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.faq-item {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.faq-question {
  padding: 1.5rem;
  background-color: var(--light-bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
}

.faq-question.active {
  background-color: var(--primary-color);
}

.faq-question.active h3 {
  color: var(--white);
}

.faq-question h3 {
  margin: 0;
  font-size: 1.1rem;
  color: var(--secondary-color);
  transition: color 0.3s;
}

.toggle-icon {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
}

.faq-question.active .toggle-icon {
  color: var(--white);
}

.faq-answer {
  padding: 0 1.5rem;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.faq-answer.active {
  padding: 1.5rem;
  max-height: 500px;
}

.faq-answer p {
  margin: 0;
  color: var(--text-color);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .faq-question h3 {
    font-size: 1rem;
  }
}
</style>
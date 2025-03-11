<template>
  <section class="advantages-section">
    <div class="container">
      <h2 class="advantages-title">Преимущества занятий</h2>
      <div class="advantages-grid">
        <div
            v-for="advantage in advantages"
            :key="advantage.id"
            class="advantage-card"
        >
          <div class="advantage-icon">
            <Icon :icon="advantage.icon" width="48" height="48" />
          </div>
          <h3 class="advantage-heading">{{ advantage.title }}</h3>
          <p class="advantage-description">{{ advantage.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from '@iconify/vue';

export default {
  name: 'Advantages',
  components: {
    Icon
  },
  data() {
    return {
      advantages: [
        {
          id: 1,
          title: 'Индивидуальный подход',
          description: 'Разработка персональной программы обучения с учетом ваших целей и текущего уровня знаний',
          icon: 'mdi:text-box-edit-outline'
        },
        {
          id: 2,
          title: 'Опытный преподаватель',
          description: 'Многолетний опыт преподавания и современные методики обучения русскому и английскому языкам',
          icon: 'mdi:human-male-board'
        },
        {
          id: 3,
          title: 'Гибкий график',
          description: 'Возможность выбора удобного времени для занятий, включая вечернее время и выходные дни',
          icon: 'mdi:clock-outline'
        },
        {
          id: 4,
          title: 'Онлайн и офлайн формат',
          description: 'Занятия как в удобном онлайн-формате, так и при личной встрече в зависимости от ваших предпочтений',
          icon: 'mdi:laptop'
        },
        {
          id: 5,
          title: 'Разговорная практика',
          description: 'Акцент на развитие разговорных навыков через диалоги, дискуссии и ролевые игры',
          icon: 'mdi:forum-outline'
        },
        {
          id: 6,
          title: 'Результативность',
          description: 'Заметный прогресс уже после первых занятий благодаря структурированному подходу и регулярной практике',
          icon: 'mdi:chart-line'
        }
      ]
    };
  }
};
</script>

<style scoped>
.advantages-section {
  background-color: var(--light-bg);
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.advantages-title {
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;
  color: var(--secondary-color);
  position: relative;
}

.advantages-title:after {
  content: "";
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--primary-dark));
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
}

@media (min-width: 768px) {
  .advantages-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 992px) {
  .advantages-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.advantage-card {
  background-color: var(--white);
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}

.advantage-card:hover {
  transform: translateY(-10px);
  border-bottom: 3px solid var(--primary-color);
  box-shadow: 0 10px 25px rgba(91, 107, 191, 0.15);
}

.advantage-icon {
  margin-bottom: 20px;
  color: var(--primary-color);
}

.advantage-heading {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--secondary-color);
}

.advantage-description {
  font-size: 16px;
  line-height: 1.6;
  color: var(--text-color);
}
</style>
<template>
    <div class="container p-5">
        <h2 class="title mb-5" >Заполните данные</h2>
        <form @submit.prevent="$emit('next-step')">
            <div class="row">

                <FormField class=" col-md-6"
                id="name"
                label="Имя и Фамилия"
                v-model="resumeData.name"
                placeholder="Имя Фамилия"
                required
                />
                <FormField class=" col-md-6"
                    id="email"
                    label="Email"
                    type="email"
                    v-model="resumeData.email"
                    placeholder="name@example.com"
                    required
                />
            </div>
            
            <div class="row">
                <FormField class=" col-md-6"
                id="phone"
                label="Телефон"
                type="tel"
                v-model="resumeData.phone"
                placeholder="+7 (999) 999 99-99"
                required
                />
                <FormField class=" col-md-6"
                    id="phone"
                    label="Город"
                    v-model="resumeData.location"
                    placeholder="Москва"
                    required
                />
            </div>
            
            <FormField
                id="profession"
                label="Профессия"
                v-model="resumeData.profession"
                placeholder="Профессия"
                required
            />
            <FormField
                id="education"
                label="Образование"
                type="textarea"
                v-model="resumeData.education"
                placeholder="Например: МГУ, Факультет информатики, 2015-2019"
                required
            />
            <FormField
                id="experience"
                label="Опыт работы"
                type="textarea"
                v-model="resumeData.experience"
                placeholder="Опишите ваш опыт работы, должности и обязанности"
                required
            />
            <FormField
                id="skills"
                label="Навыки"
                type="textarea"
                v-model="resumeData.skills"
                placeholder="Перечислите ваши профессиональные навыки"
                required
            />
            <div class="d-flex justify-content-between mt-4">
                <button type="button" class="btn btn-outline-secondary" disabled>Назад</button>
                <button type="submit" class="btn">Далее</button>
            </div>
        </form>
    </div>
</template>
  
<script>
import FormField from './FormField.vue';

export default {
  components: {
    FormField
  },
  props: {
    resumeData: {
      type: Object,
      required: true
    }
  },
  emits: ['next-step']
};
</script>


<style scoped>
    .card {
    margin-top: 20px;
    }
    .container{
        color: #3b2f2f;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .title{
        font-size: 2rem;
        font-weight: bold;
    }

    .btn{
        color: white;
        background-color: #8b5e3c;
    }

    .btn:hover{
        background-color: #6d4c2f;
    }
    
</style>

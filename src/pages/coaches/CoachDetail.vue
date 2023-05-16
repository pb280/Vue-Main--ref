<template>
  <section>
    <base-card>
      <h2>{{ fullName }}</h2>
      <h3>${{ rate }}/hourly</h3>
    </base-card>
  </section>

  <section>
    <header>
      <base-card>
        <h2>Interested? Reach Out Now!</h2>
        <base-button link :to="contactLink">Contact</base-button>
      </base-card>
    </header>
    <router-view></router-view>
  </section>

  <section>
    <base-card>
      <base-badge
        v-for="area in areas"
        :key="area"
        :type="area"
        :title="area"
      ></base-badge>
      <p>{{ description }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null,
    };
  },
  computed: {
    fullName() {
      const { firstName, lastName } = this.selectedCoach;
      return `${firstName} ${lastName}`;
    },
    rate() {
      return this.selectedCoach.hourlyRate;
    },
    areas() {
      return this.selectedCoach.areas;
    },
    description() {
      return this.selectedCoach.description;
    },
    contactLink() {
      console.log(this.$route.path);
      return `${this.$route.path}/${this.id}`;
    },
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );
  },
};
</script>

<style scoped></style>

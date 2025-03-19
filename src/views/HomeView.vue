<script setup>
import Hero from "@/components/Hero.vue";
import Homecards from "@/components/Homecards.vue";
import JobListings from "@/components/JobListings.vue";
</script>

<template>
  <!-- <Hero title="Test Title" subtitle="Test Subtitle" /> => receiving props from the parent component -->
  <!-- receives default props -->
  <Hero />
  <Homecards />
  <JobListings :limit="3" :showButton="true" />
</template>

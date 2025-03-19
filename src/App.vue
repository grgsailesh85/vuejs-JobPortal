<script setup>
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import Homecards from "@/components/Homecards.vue";
import JobListings from "@/components/JobListings.vue";
</script>
<template>
  <Navbar />
  <!-- <Hero title="Test Title" subtitle="Test Subtitle" /> => receiving props from the parent component -->

  <!-- receives default props -->
  <Hero />
  <Homecards />
  <JobListings :limit="3" :showButton="true"/>
</template>

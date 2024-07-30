<script setup>
import Hero from '@/components/Hero.vue';
import GameListings from '@/components/GameListings.vue';
</script>

<template>
  <Hero />
  <GameListings :limit="6" title="Latest Games" />
</template>
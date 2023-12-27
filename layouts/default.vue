<template>
    <div class="min-h-screen">
        <!-- Navbar -->
        <guest-navbar />
        <!-- Content -->
        <!-- <section class="p-8 md:p-20"> -->
        <slot />
        <!-- </section> -->
        <!-- footer -->
        <guest-footer />
    </div>
</template>

<script setup lang="ts">
import guestNavbar from './../components/guestNavbar.vue';
import guestFooter from '~/components/guestFooter.vue';
</script>

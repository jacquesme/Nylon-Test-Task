<template>
  <div class="w-full max-w-82.5 m-auto px-4 lg:px-0 py-16">
    <div class="flex flex-col sm:flex-row m-auto">
      <div class="sm:pr-12 order-2 sm:order-1 grid grid-cols-2 gap-4 sm:block">
        <BeautyCard />
        <EntertainmentCard />
      </div>
      <div class="w-full order-1 sm:order-2">
        <MainFasionCard />
      </div>
      <div class="sm:pl-12 order-3 sm:order-3 grid grid-cols-2 gap-4 sm:block">
        <SmallFasionCard />
        <LifeCard />
      </div>
    </div>
  </div>
</template>

<script>
import BeautyCard from "@/components/Beauty.vue";
import EntertainmentCard from "@/components/Entertainment.vue";
import MainFasionCard from "@/components/MainFasion.vue";
import SmallFasionCard from "@/components/SmallFasion.vue";
import LifeCard from "@/components/Life.vue";

export default {
  components: {
    BeautyCard,
    EntertainmentCard,
    MainFasionCard,
    SmallFasionCard,
    LifeCard,
  },
  name: "homepage",
  head() {
    return {
      title: "Test-Project",
    };
  },
};
</script>

<style>
body{
  overflow-x:hidden;
  background-color: #f6f6f6;
}

#app {
  font-family: PostGrotesk, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@font-face {
  font-family: 'PostGrotesk';
  src:  url('./assets/fonts/PostGrotesk-Medium-a7de063401.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'Relative-faux';
  src:  url('./assets/fonts/relative-faux-book-pro-e792fe86e9.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
}

.absolute-expand {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>

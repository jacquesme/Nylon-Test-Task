<template>
  <div
      class="flex flex-grow-0 flex-shrink-0 items-baseline pb-12 flex-wrap w-full sm:w-sm mt-4 sm:mt-0"
  >
    <a class="w-full self-end" href="#">
      <div class="image relative">
        <img src="/img/green.png" class="absolute sm:static absolute-expand object-contain object-bottom top-auto"/>
      </div>
      <div class="">
        <p class="text-xs my-4 mx-0 uppercase">Beauty</p>
        <p
            class="text-sm tracking-tighter leading-4 text-right uppercase font-medium"
        >
          “Grand Army” Star Marcela Avelina On Her Greatest Beauty Discovery And
          the Power of Vulnerability
        </p>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  // props: {
  //   image: {
  //     type: String,
  //     required: true
  //   }
  // },
};
</script>

<style scoped>
@media all and (max-width: 768px){
  .image {
    padding-bottom: 150%;
  }
}

</style>

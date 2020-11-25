<template>
  <div
    class="flex flex-grow-0 flex-shrink-0 items-baseline pb-12 flex-wrap md:flex-col w-full sm:w-sm mt-4 sm:mt-0"
  >
    <a class="w-full" href="#">

        <div class="image relative">
          <img src="img/man.png" class="absolute sm:static absolute-expand object-contain object-bottom top-auto" />
        </div>
      <div class="">
        <p class="text-xs my-4 mx-0 uppercase">Entertainment</p>
        <p
          class="text-sm tracking-tighter leading-4 text-right uppercase font-medium"
        >
          Serena Isioma's Chicago-Based Indie Is Refreshing &amp; Straight To
          The Point
        </p>
      </div>
    </a>
  </div>
  <!--  <div class="">-->
  <!--    <a class="" href="#">-->
  <!--      <div class="">-->
  <!--        <div class="">-->
  <!--          <img src="/img/man.png" />-->
  <!--        </div>-->
  <!--        <div class="">-->
  <!--          <p class=""></p>-->
  <!--          <p class="">-->
  <!--            -->
  <!--          </p>-->
  <!--        </div>-->
  <!--      </div>-->
  <!--    </a>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "Entertainment",
};
</script>

<style scoped>
@media all and (max-width: 768px){
  .image {
    padding-bottom: 150%;
  }
}
</style>

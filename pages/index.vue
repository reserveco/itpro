<template>
  <div class="grid h-5/6 place-items-center">
    <div>
      <h1 class="title-font text-5xl font-thin font-sans text-white">{{ HaedText }}</h1>
      <div class="uk-child-width-auto !text-white" uk-grid :uk-countdown="`date: ${startDate}`">
        <span>
          <div class="uk-countdown-number uk-countdown-days"></div>
          <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Days</div>
        </span>
        <div class="uk-countdown-separator">:</div>
        <span>
          <div class="uk-countdown-number uk-countdown-hours"></div>
          <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Hours</div>
        </span>
        <div class="uk-countdown-separator">:</div>
        <span>
          <div class="uk-countdown-number uk-countdown-minutes"></div>
          <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Minutes</div>
        </span>
        <div class="uk-countdown-separator">:</div>
        <span>
          <div class="uk-countdown-number uk-countdown-seconds"></div>
          <div class="uk-countdown-label uk-margin-small uk-text-center uk-visible@s">Seconds</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "comingSoon",
  name: "IndexPage",

  data() {
    return {
      HaedText: "Days Left before Start:",
      startDate: "2023-12-31T00:00:00+00:00",
    };
  },
};
</script>

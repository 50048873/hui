<template>
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :fill="iconColor"
    viewBox="0 0 100 100">
    <g>
      <path d="M71.193,24.624c-3.717-5.281-7.611-10.437-11.68-15.455c-1.392-1.724-2.689-3.288-3.851-4.663
        c-0.408-0.484-0.771-0.909-1.083-1.274l-0.396-0.455L51.755,0l-2.429,2.776l-0.396,0.455c-1.674,1.955-3.319,3.935-4.936,5.937
        c-4.066,5.019-7.962,10.174-11.681,15.455c-3.042,4.335-5.78,8.548-8.141,12.569c-5.924,10.098-9.241,18.553-9.241,25.127
        c0,20.793,16.466,37.68,36.82,37.681c20.353,0,36.821-16.887,36.821-37.681c0-6.573-3.315-15.028-9.24-25.126
        C76.973,33.173,74.235,28.959,71.193,24.624z M51.754,93.542c-16.75,0-30.366-13.962-30.366-31.223
        c0-5.114,2.971-12.683,8.355-21.858c2.264-3.86,4.91-7.93,7.858-12.132c3.633-5.16,7.44-10.197,11.415-15.102
        c0.965-1.195,1.881-2.313,2.735-3.337c0.921,1.105,1.835,2.218,2.74,3.337c3.975,4.903,7.782,9.941,11.414,15.102
        c2.949,4.202,5.594,8.271,7.86,12.132c5.383,9.175,8.354,16.746,8.354,21.858C82.12,79.582,68.505,93.542,51.754,93.542z"/>
      <path class="riseFall" d="M51.754,63.003c-12.339-7.029-25.69-14.236-25.69,0c0,14.237,11.502,25.779,25.69,25.779
        c14.188,0,25.69-11.541,25.69-25.779C77.444,48.767,64.145,70.062,51.754,63.003z">
      </path>
    </g>
  </svg>
</template>

<script>
import {iconProps} from '../mixin'
export default {
  name: 'HuiIconAnimatedWater2',
  mixins: [iconProps]
}
</script>

<style scoped lang="less">
  svg {
    overflow: visible;
  }

  @keyframes riseFall {
    from, to {
      transform: scaleY(0);
      opacity: 0;
    }
    50% {
      transform: scaleY(1);
      opacity: 1;
    }
  }

  .riseFall {
    animation-iteration-count: infinite;
    animation-name: riseFall;
    animation-duration: 6s;
    transform-origin: center bottom;
  }
</style>

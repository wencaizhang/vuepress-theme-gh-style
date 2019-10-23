<template>
  <div class="toc-container"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleaveSidebar"
    :class="sidebarClass"
  >
    <div 
      @mouseenter.stop="onMouseenterToggle"
      @mouseleave.stop
      class="toc-toggle d-flex flex-column flex-justify-center flex-items-center"
    >
      <i class="toc-toggle-icon icon-arrow-down " role="button"></i>
      <span class="">Toc</span>
    </div>
    <div class="toc-header">
      目录
      <a
        href="javascript:;"
        @click="handleSetting"
        class="toc-setting"
        aria-label="Setting"
      >
        <span
          class="tooltipped tooltipped-s"
          aria-label="Setting"
        >
          <svg
            t="1571731262545"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1746"
            width="16"
            height="16"
          >
            <path
              fill="#6A737D"
              d="M512 664.977939C427.501813 664.977939 359.012502 596.488629 359.012502 512 359.012502 427.501813 427.501813 359.012502 512 359.012502 596.488629 359.012502 664.987501 427.501813 664.987501 512 664.987501 596.488629 596.488629 664.977939 512 664.977939M883.539699 397.319111 810.825958 388.220335 855.813286 330.368563C885.680589 300.510816 885.680589 252.10189 855.813286 222.234586L801.755859 168.186714C771.898112 138.328967 723.489184 138.328967 693.631437 168.186714L635.770107 213.183599 626.680889 140.460298C626.680889 98.235098 592.455348 64 550.220591 64L473.779409 64C431.554209 64 397.319111 98.235098 397.319111 140.460298L388.229893 213.183599 330.37812 168.186714C300.520374 138.328967 252.111448 138.319409 222.253701 168.186714L168.186714 222.234586C138.328967 252.092333 138.338525 300.510816 168.186714 330.368563L213.193156 388.220335 140.460298 397.319111C98.235098 397.319111 64 431.544652 64 473.779409L64 550.220591C64 592.445791 98.235098 626.680889 140.460298 626.680889L213.193156 635.770107 168.186714 693.621882C138.338525 723.479629 138.328967 771.88855 168.186714 801.755859L222.253701 855.803731C252.10189 885.661478 300.520374 885.661478 330.37812 855.803731L388.229893 810.816403 397.319111 883.530144C397.319111 925.755347 431.544652 959.990445 473.779409 959.990445L550.220591 959.990445C592.445791 959.990445 626.680889 925.755347 626.680889 883.530144L635.770107 810.806842 693.621882 855.79417C723.479629 885.651917 771.88855 885.661478 801.746298 855.803731L855.813286 801.746298C885.661478 771.898112 885.661478 723.470067 855.813286 693.61232L810.816403 635.770107 883.539699 626.680889C925.764902 626.680889 960 592.455348 960 550.220591L960 473.779409C960 431.554209 925.764902 397.319111 883.539699 397.319111"
              p-id="1747"
            />
          </svg>
        </span>
      </a>
      <a
        href="javascript:;"
        @click="togglePined"
        class="toc-pin"
      >
        <span 
          class="tooltipped tooltipped-s"
          :aria-label="pinText"
        >
          <svg
            v-show="pined"
            t="1571729882256"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="8962"
            width="16"
            height="16"
          >
            <path
              d="M692.780522 448a54.984348 54.984348 0 0 1-8.347826-3.895652 65.981217 65.981217 0 0 1-33.146435-43.876174L607.165217 131.205565l-0.467478-13.267478c0-16.228174 9.772522-23.30713 23.841391-29.718261l5.008696-2.048c17.16313-7.791304 28.850087-17.808696 28.850087-37.264696C664.397913 2.960696 648.904348 0 620.989217 0H403.233391c-27.89287 0-43.408696 2.738087-43.408695 48.90713 0 19.433739 11.686957 29.495652 28.872347 37.264696 1.669565 0.667826 3.33913 1.135304 5.008696 2.048 14.06887 6.633739 23.841391 13.712696 23.841391 29.718261l-0.467478 13.267478-44.121043 269.022609a65.981217 65.981217 0 0 1-33.168696 43.876174 54.984348 54.984348 0 0 1-8.347826 3.895652C284.493913 471.30713 245.114435 518.41113 245.114435 573.039304c0 36.329739 8.347826 48.684522 36.240695 48.684522h192.48974L502.427826 1024h19.099826l28.605218-402.276174h192.712347c27.91513 0 36.262957-10.752 36.262957-48.684522 0-54.628174-39.357217-101.732174-86.349913-125.039304z"
              p-id="8963"
              fill="#ffffff"
            />
          </svg>
          <svg
            v-show="!pined"
            t="1571731002697"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="767"
            width="16"
            height="16"
          >
            <path
              d="M685.08596701 594.57629902a54.984348 54.984348 0 0 1-3.14816243-8.65744632 65.981217 65.981217 0 0 1 7.58707121-54.46320913L848.5542975 310.02964305l9.0509668-9.71208053c11.47505188-11.47505188 23.39084625-9.5704131 37.87239313-4.15557463l4.98983759 2.09352822c17.6454495 6.62688172 32.99274186 7.80744245 46.7502114-5.95002709C979.70674147 259.81645397 970.84466481 246.76732088 951.10568638 227.02834245L797.12906518 73.05172124c-19.72323752-19.72323752-32.63070319-28.75846342-65.27714587 3.88798068-13.74172863 13.74172863-12.592649 29.12050209-5.93428689 46.76595159 0.70833644 1.65278503 1.55834031 3.16390262 2.09352822 4.98983759 5.25743155 14.63895521 7.16206892 26.55474958-4.15557463 37.87239313l-9.71208053 9.0509668-221.42599981 159.02942242a65.981217 65.981217 0 0 1-54.47895003 7.5713303 54.984348 54.984348 0 0 1-8.65744632-3.14816243C379.90310744 322.3546988 318.75005369 327.81676069 280.12210141 366.44471297c-25.68900481 25.68900481-28.52235127 40.32796002-8.79911446 60.05119683l136.11080047 136.11080046L143.19277889 867.27012282l13.50561648 13.50561649 304.67915417-264.22526692 136.26820738 136.26820738c19.73897772 19.73897772 33.24459491 18.03897069 60.06693845-8.78337285 38.62795228-38.62795228 44.10575507-99.76526513 27.35753073-149.47474881z"
              fill="#6A737D"
              p-id="768"
            />
          </svg>
        </span>
      </a>
    </div>
    <div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div>
    <div class="toc-view">
      <Toc />
    </div>
  </div>
</template>

<script>
import Toc from "./Toc";

export default {
  name: "",
  components: { Toc },
  data() {
    return {
      pined: false,
      visible: false,
    };
  },
  computed: {
    pinText() {
      return this.pined ? "Unpin this sidebar" : "Pin this sidebar";
    },
    sidebarClass() {
      return {
        "toc-container-show": this.visible
      };
    }
  },
  methods: {
    onMouseenterToggle () {
      this.visible = true;
      console.log('true');
    },
    onMouseenter () {
      console.log('onMouseenter');
    },
    onMouseleaveSidebar () {
      if (this.pined) {
        return
      }
      this.visible = false;
      console.log('false');
    },
    togglePined() {
      this.pined = !this.pined;
      this.visible = this.pined;
      document.querySelector("body").style.marginLeft = this.pined ? "304px" : 0;
    },
    handleSetting() {}
  },
};
</script>

<style lang="stylus">
.toc-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 304px;
  margin-left: -304px;
  height: 100%;
  box-sizing: border-box;
  background-color: #fff;
  transition: margin .2s;
  &.toc-container-show {
    margin-left: 0;

    .toc-toggle {
      opacity: 0;
      pointer-events: none;
      // right: 10px;
      transition: right 0s ease 0s, opacity 0s ease 0s;
    }
  }

  a.toc-pin {
    text-align: center;
    line-height: 1;
    cursor: pointer;
    z-index: 1;
    position: absolute !important;
    top: 26px;
    right: 6px;
    width: 16px;
    height: 16px;
  }

  a.toc-setting {
    text-align: center;
    line-height: 1;
    cursor: pointer;
    z-index: 1;
    position: absolute !important;
    top: 24px;
    right: 26px;
    width: 16px;
    height: 16px;

    &:hover path {
      fill: #fff;
    }
  }

  .toc-header {
    position: absolute;
    top: 0;
    left: 0;
    height: 64px;
    width: 100%;
    z-index: 32;
    display: flex;
    padding: 16px;
    padding-right: 65px;
    font-size: 14px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.7);
    background-color: rgb(55, 62, 67);
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: nowrap;
  }

  .toc-view {
    height: 100%;
    padding: 16px;
    padding-top 64px
    border-right: 1px solid rgb(223, 226, 229);
  }

  .toc-toggle {
    background-color: rgb(242, 245, 247);
    box-shadow: rgba(118, 118, 118, 0.11) 2px 0px 5px 0px;
    opacity: 1;
    height: 94px;
    line-height: 1;
    position: absolute;
    right: -30px;
    text-align: center;
    top: 33%;
    width: 30px;
    z-index: 1000000001;
    cursor: pointer;
    border-radius: 0px 4px 4px 0px;
    border-width: 1px 1px 1px;
    border-style: solid solid solid none;
    border-color: rgb(224, 228, 231) rgb(224, 228, 231) rgb(224, 228, 231);
    border-image: initial;
    border-left: none;
    padding: 6px;
    transition: right 0.25s ease-in 0.2s, opacity 0.35s ease-in 0.2s;
    
    .icon-arrow-down {
      display: inline-block;
      height: 0.5em;
      width: 0.5em;
      font-size: 20px;
      box-sizing: border-box;
      text-indent: -9999px;
      position: relative;
      top: -2px;

      &::before, &::after {
        content: '';
        box-sizing: inherit;
        position: absolute;
        left: 50%;
        top: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }

      &::before {
        height: 0.35em;
        width: 0.35em;
        border-style: solid;
        border-width: 2px 0 0 2px;
        -ms-transform: translate(-75%, -50%) rotate(135deg);
        transform: translate(-75%, -50%) rotate(135deg);
      }
    }

    span {
      position: relative;
      top: 2px;
      color: rgb(15, 46, 71);
      display: inline-block;
      font-size: 12px;
      left: -1px;
      line-height: 14px;
      transform: rotate(-180deg);
      writing-mode: tb-rl;
    }
  }

  .ui-resizable-handle {
    width: 8px;
    right: -4px;
    bottom: 0px;
    cursor: col-resize;
    position: absolute;
    top: 0px;
  }
}
</style>
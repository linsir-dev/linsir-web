<template>
  <ul class="flex user_Overview" v-if="pageflag">
    <li class="user_Overview-item" style="color: #00fdfa">
      <div class="user_Overview_nums allnum">
        <dv-digital-flop :config="config" style="width: 100%; height: 100%">
          100
        </dv-digital-flop>
      </div>
      <p>总设备数</p>
    </li>
    <li class="user_Overview-item" style="color: #07f7a8">
      <div class="user_Overview_nums online">
        <dv-digital-flop
          :config="onlineconfig"
          style="width: 100%; height: 100%"
        />
      </div>
      <p>在线数</p>
    </li>
    <li class="user_Overview-item" style="color: #e3b337">
      <div class="user_Overview_nums offline">
        <dv-digital-flop
          :config="offlineconfig"
          style="width: 100%; height: 100%"
        />
      </div>
      <p>掉线数</p>
    </li>
    <li class="user_Overview-item" style="color: #f5023d">
      <div class="user_Overview_nums laramnum">
        <dv-digital-flop
          :config="laramnumconfig"
          style="width: 100%; height: 100%"
        />
      </div>
      <p>告警次数</p>
    </li>
  </ul>
  <Reacquire v-else @onclick="getData" line-height="200px">重新获取</Reacquire>
</template>
<script setup lang="ts">
import Reacquire from "@/components/reacquire/reacquire.vue";
import { digitalFlop } from "@jiaminghi/data-view";

let style = {
  fontsize: 24,
};
//pageflag
const pageflag = ref(true);

//config
const config = ref({
  number: [100],
  content: "{nt}",
  style: {
    ...style,
    fill: "#00fdfa",
  },
});

//onlineconfig
const onlineconfig = ref({
  number: [0],
  content: "{nt}",
  style: {
    ...style,
    // stroke: "#07f7a8",
    fill: "#07f7a8",
  },
});

//offlineconfig
const offlineconfig = ref({
  number: [0],
  content: "{nt}",
  style: {
    ...style,
    // stroke: "#e3b337",
    fill: "#e3b337",
  },
});

//laramnumconfig
const laramnumconfig = ref({
  number: [0],
  content: "{nt}",
  style: {
    ...style,
    // stroke: "#f5023d",
    fill: "#f5023d",
  },
});

const getData = () => {
  console.log("xxx");
};
</script>
<style lang="scss" scoped>
.user_Overview {
  li {
    flex: 1;

    p {
      text-align: center;
      height: 16px;
      font-size: 16px;
    }

    .user_Overview_nums {
      width: 100px;
      height: 100px;
      text-align: center;
      line-height: 100px;
      font-size: 22px;
      margin: 50px auto 30px;
      background-size: cover;
      background-position: center center;
      position: relative;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      &.bgdonghua::before {
        animation: rotating 14s linear infinite;
      }
    }

    .allnum {
      // background-image: url("../../assets/img/left_top_lan.png");
      &::before {
        background-image: url("../../assets/images/left_top_lan.png");
      }
    }

    .online {
      &::before {
        background-image: url("../../assets/images/left_top_lv.png");
      }
    }

    .offline {
      &::before {
        background-image: url("../../assets/images/left_top_huang.png");
      }
    }

    .laramnum {
      &::before {
        background-image: url("../../assets/images/left_top_hong.png");
      }
    }
  }
}
</style>

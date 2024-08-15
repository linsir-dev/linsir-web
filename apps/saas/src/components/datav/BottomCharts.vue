<template>
  <div class="bottom-charts">
    <el-row :gutter="0">
      <el-col :span="6">
        <dv-charts :option="lineOption1" style="width: 400px; height: 230px" />
      </el-col>
      <el-col :span="6">
        <dv-charts :option="lineOption2" style="width: 400px; height: 230px" />
      </el-col>
      <el-col :span="6">
        <dv-charts :option="lineOption3" style="width: 400px; height: 250px" />
      </el-col>
      <el-col :span="6">
        <dv-charts :option="lineOption4" style="width: 400px; height: 230px" />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import * as echarts from "echarts";

const lineOption1 = reactive({
  title: {
    text: "周销售额趋势",
    style: {
      fill: "#fff",
    },
  },
  radar: {
    indicator: [
      { name: "西峡", max: 300 },
      { name: "周口", max: 300 },
      { name: "南阳", max: 300 },
      { name: "驻马店", max: 300 },
      { name: "郑州", max: 300 },
      { name: "洛阳", max: 300 },
    ],
  },
  series: [
    {
      type: "radar",
      data: [111, 256, 178, 152, 266, 132],
    },
  ],
});

const lineOption2 = reactive({
  title: {
    text: "周销售额趋势",
    style: {
      fill: "#fff",
    },
  },
  xAxis: {
    name: "第一周",
    data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
  },
  yAxis: {
    name: "销售额",
    data: "value",
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: "line",
      smooth: true,
      lineArea: {
        show: true,
        gradient: ["rgba(55, 162, 218, 0.6)", "rgba(55, 162, 218, 0)"],
      },
    },
  ],
});

const lineOption3 = reactive({
  series: [
    {
      type: "gauge",
      startAngle: -Math.PI / 2,
      endAngle: Math.PI * 1.5,
      arcLineWidth: 10,
      data: [
        { name: "A", value: 25, gradient: ["#03c2fd", "#1ed3e5", "#2fded6"] },
        {
          name: "B",
          value: 45,
          gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
          radius: "53%",
        },
        {
          name: "C",
          value: 65,
          gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
          radius: "46%",
        },
        {
          name: "D",
          value: 35,
          gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
          radius: "39%",
        },
        {
          name: "E",
          value: 25,
          gradient: ["#03c2fd", "#1ed3e5", "#2fded6"],
          radius: "32%",
        },
      ],
      axisLabel: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      pointer: {
        show: false,
      },
      dataItemStyle: {
        lineCap: "round",
      },
      backgroundArc: {
        show: false,
      },
      details: {
        show: true,
        formatter: "{name}占比{value}%",
        position: "start",
        offset: [-10, 0],
        style: {
          fill: "#1ed3e5",
          fontSize: 13,
          textAlign: "right",
        },
      },
    },
  ],
});

const lineOption4 = reactive({
  title: {
    text: "气温与降雨量走势图",
  },
  legend: {
    data: ["降雨量", "气温"],
    bottom: 10,
  },
  xAxis: {
    data: [
      "一月份",
      "二月份",
      "三月份",
      "四月份",
      "五月份",
      "六月份",
      "七月份",
      "八月份",
      "九月份",
      "十月份",
      "十一月份",
      "十二月份",
    ],
    axisLabel: {
      style: {
        rotate: 20,
        textAlign: "left",
        textBaseline: "top",
      },
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: [
    {
      name: "降雨量",
      data: "value",
      min: 0,
      max: 300,
      interval: 50,
      splitLine: {
        style: {
          lineDash: [3, 3],
        },
      },
      axisLabel: {
        formatter: "{value} ml",
      },
      axisTick: {
        show: false,
      },
    },
    {
      name: "气温",
      data: "value",
      position: "right",
      min: 0,
      max: 30,
      interval: 5,
      splitLine: {
        show: false,
      },
      axisLabel: {
        formatter: "{value} °C",
      },
      axisTick: {
        show: false,
      },
    },
  ],
  series: [
    {
      name: "降雨量",
      data: [175, 125, 90, 130, 45, 65, 65, 47, 50, 52, 45, 37],
      type: "bar",
      gradient: {
        color: ["#37a2da", "#67e0e3"],
      },
      animationCurve: "easeOutBounce",
    },
    {
      name: "气温",
      data: [23, 18, 16, 14, 10, 8, 6, 6, 6, 6, 6, 5],
      type: "line",
      yAxisIndex: 1,
      animationCurve: "easeOutBounce",
    },
  ],
});
</script>

<style lang="less"></style>

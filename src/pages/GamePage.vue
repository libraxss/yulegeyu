<template>
  <div id="gamePage" class="game-page">
    <a-row align="space-between">
      <img class="icon-func" src="../assets/back.png" @click="doBack" />
      <a-button class="icon-func score">
        <span></span>
        <span>{{ clearBlockNum }} / {{ totalBlockNum }}</span>
      </a-button>
    </a-row>
    <!-- 胜利 -->
    <a-row align="center">
      <div v-if="gameStatus === 3" style="text-align: center">
        <h2>恭喜，你赢啦！🎉</h2>
        <my-ad style="margin-top: 16px" />
      </div>
    </a-row>
    <!-- 分层选块 -->
    <a-row align="center">
      <div v-show="gameStatus > 0" class="level-board">
        <div v-for="(block, idx) in levelBlocksVal" :key="idx">
          <div
            v-if="block.status === 0"
            class="block level-block"
            :class="{
              disabled: !isHolyLight && block.lowerThanBlocks.length > 0,
            }"
            :data-id="block.id"
            :style="{
              zIndex: 100 + block.level,
              left: block.x * widthUnit + 'px',
              top: block.y * heightUnit + 'px',
            }"
            @click="() => doClickBlock(block)"
          >
            <img class="card-icon" :src="block.type" />
            <div
              v-if="!isHolyLight && block.lowerThanBlocks.length > 0"
              class="mask"
            ></div>
          </div>
        </div>
      </div>
    </a-row>
    <!-- 随机选块 -->
    <a-row align="space-between" class="random-board">
      <div
        v-for="(randomBlock, index) in randomBlocksVal"
        :key="index"
        class="random-area"
      >
        <div
          v-if="randomBlock.length > 0"
          :data-id="randomBlock[0].id"
          class="block"
          :style="{ 'z-index': randomBlock.length + 1 }"
          @click="() => doClickBlock(randomBlock[0], index)"
        >
          <img class="card-icon" :src="randomBlock[0].type" />
        </div>
        <!-- 隐藏 -->
        <div
          v-for="(num, index) in Math.max(randomBlock.length - 1, 0)"
          :key="num"
          :style="{ 'z-index': randomBlock.length - index }"
          class="block disabled cover-card"
        >
          <span v-if="canSeeRandom">
            <img class="card-icon" :src="randomBlock[num].type" />
          </span>
        </div>
      </div>
    </a-row>
    <!-- 槽位 -->
    <a-row v-if="slotAreaVal.length > 0" align="center" class="slot-board">
      <div v-for="(slotBlock, index) in slotAreaVal" :key="index" class="block">
        <img class="card-icon" :src="slotBlock?.type" />
      </div>
    </a-row>
    <!-- 技能 -->
    <div class="skill-board">
      <a-space>
        <a-button size="small" @click="doRevert">撤回</a-button>
        <a-button size="small" @click="doRemove">移出</a-button>
        <a-button size="small" @click="doShuffle">洗牌</a-button>
        <a-button size="small" @click="doBroke">破坏</a-button>
        <a-button size="small" @click="doHolyLight">圣光</a-button>
        <a-button size="small" @click="doSeeRandom">透视</a-button>
      </a-space>
    </div>
  </div>
</template>

<script setup lang="ts">
import useGame from "../core/game";
import { onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const {
  gameStatus,
  levelBlocksVal,
  randomBlocksVal,
  slotAreaVal,
  widthUnit,
  heightUnit,
  totalBlockNum,
  clearBlockNum,
  isHolyLight,
  canSeeRandom,
  doClickBlock,
  doStart,
  doShuffle,
  doBroke,
  doRemove,
  doRevert,
  doHolyLight,
  doSeeRandom,
} = useGame();

/**
 * 回上一页
 */
const doBack = () => {
  router.back();
};

onMounted(() => {
  doStart();
});
</script>

<style scoped>
.game-page {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.level-board {
  position: relative;
}

.level-block {
  position: absolute;
}

.random-board {
  margin-top: 8px;
}

.random-area {
  margin-top: 8px;
}

.random-area .block {
  position: relative;
}

.slot-board {
  border: 10px solid #cafc05;
  background-color: #cafc05;
  margin: 16px auto;
  width: fit-content;
}

.slot-board .block {
  border: 1px solid black;
  background-color: #cafc05;
}

.skill-board {
  text-align: center;
}

.block {
  font-size: 0;
  width: 42px;
  height: 42px;
  line-height: 42px;
  border: 1px solid #eee;
  background: rgb(255, 255, 255);
  text-align: center;
  vertical-align: top;
  display: inline-block;
  user-select: none;
}

.disabled {
  background: rgba(0, 0, 0, 0.6);
  cursor: not-allowed;
}

.card-icon {
  width: 100%;
}

.icon-func {
  margin-bottom: 40px;
  width: 130px;
}

.score {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 53px;
  background: url("../assets/score.png") no-repeat;
  background-size: 100% 100%;
}

.mask {
  left: 0;
  top: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.2;
}

.cover-card {
  /* transform: translateX(-50%); */
  margin-left: -22px;
}
</style>

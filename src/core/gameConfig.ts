import { imgPath } from "../utils";
import icon_1 from "../assets/icon/icon_1.png";
import icon_2 from "../assets/icon/icon_2.png";
import icon_3 from "../assets/icon/icon_3.png";
import icon_4 from "../assets/icon/icon_4.png";
import icon_5 from "../assets/icon/icon_5.png";
import icon_6 from "../assets/icon/icon_6.png";
import icon_7 from "../assets/icon/icon_7.png";
import icon_8 from "../assets/icon/icon_8.png";
import icon_9 from "../assets/icon/icon_9.png";
import icon_10 from "../assets/icon/icon_10.png";
import icon_11 from "../assets/icon/icon_11.png";
import icon_12 from "../assets/icon/icon_12.png";
import icon_13 from "../assets/icon/icon_13.png";
import icon_14 from "../assets/icon/icon_14.png";
import icon_15 from "../assets/icon/icon_15.png";
import icon_16 from "../assets/icon/icon_16.png";
import icon_17 from "../assets/icon/icon_17.png";
import icon_18 from "../assets/icon/icon_18.png";
import icon_19 from "../assets/icon/icon_19.png";
import icon_20 from "../assets/icon/icon_20.png";
import icon_21 from "../assets/icon/icon_21.png";

// 动物数组
// const iconUrls = [
//     "icon/icon_1.png",
//     "icon/icon_2.png",
//     "icon/icon_3.png",
//     "icon/icon_4.png",
//     "icon/icon_5.png",
//     "icon/icon_6.png",
//     "icon/icon_7.png",
//     "icon/icon_8.png",
//     "icon/icon_9.png",
//     "icon/icon_10.png",
//     "icon/icon_11.png",
//     "icon/icon_12.png",
//     "icon/icon_13.png",
//     "icon/icon_14.png",
//     "icon/icon_15.png",
//     "icon/icon_16.png",
//     "icon/icon_17.png",
//     "icon/icon_18.png",
//     "icon/icon_19.png",
//     "icon/icon_20.png",
//     "icon/icon_21.png",
// ];

const icons = [
  icon_1,
  icon_2,
  icon_3,
  icon_4,
  icon_5,
  icon_6,
  icon_7,
  icon_8,
  icon_9,
  icon_10,
  icon_11,
  icon_12,
  icon_13,
  icon_14,
  icon_15,
  icon_16,
  icon_17,
  icon_18,
  icon_19,
  icon_20,
  icon_21,
];

export const defaultGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    typeNum: 8,
    // 每层块数（大致）
    levelBlockNum: 24,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 8,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [6, 6],
    // 动物数组
    icons,
};

/**
 * 简单难度
 */
export const easyGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    typeNum: 8,
    // 每层块数（大致）
    levelBlockNum: 8,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 6,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [6, 6],
    // 动物数组
    icons,
};

/**
 * 中等难度
 */
export const middleGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    typeNum: 10,
    // 每层块数（大致）
    levelBlockNum: 12,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 7,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [5, 5],
    // 动物数组
    icons,
};

/**
 * 困难难度
 */
export const hardGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    typeNum: 12,
    // 每层块数（大致）
    levelBlockNum: 16,
    // 边界收缩步长
    borderStep: 1,
    // 总层数（最小为 2）
    levelNum: 8,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [6, 6],
    // 动物数组
    icons,
};

/**
 * 地狱难度
 */
export const lunaticGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    typeNum: 14,
    // 每层块数（大致）
    levelBlockNum: 20,
    // 边界收缩步长
    borderStep: 2,
    // 总层数（最小为 2）
    levelNum: 10,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 动物数组
    icons,
};

/**
 * 天狱难度
 */
export const skyGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    typeNum: 16,
    // 每层块数（大致）
    levelBlockNum: 24,
    // 边界收缩步长
    borderStep: 2,
    // 总层数（最小为 2）
    levelNum: 12,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 动物数组
    icons,
};

/**
 * 羊了个羊难度
 */
export const yangGameConfig: GameConfigType = {
    // 槽容量
    slotNum: 7,
    // 需要多少个一样块的才能合成
    composeNum: 3,
    // 动物类别数
    typeNum: 18,
    // 每层块数（大致）
    levelBlockNum: 28,
    // 边界收缩步长
    borderStep: 3,
    // 总层数（最小为 2）
    levelNum: 15,
    // 随机区块数（数组长度代表随机区数量，值表示每个随机区生产多少块）
    randomBlocks: [8, 8],
    // 动物数组
    icons,
};

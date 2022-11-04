<template>
  <div>
    <el-row type="flex" justify="center" align="middle" style="margin: auto">
      <el-button :type="classType1" @click="selectType('classType1', 1, 24)"
        >单屏
      </el-button>
      <el-button :type="classType2" @click="selectType('classType2', 4, 12)"
        >四分屏
      </el-button>
      <el-button :type="classType3" @click="selectType('classType3', 9, 8)"
        >九分屏
      </el-button>
      <el-button :type="classType4" @click="selectType('classType4', 16, 6)"
        >十六分屏
      </el-button>
      <el-button @click="handleFullScreen">全屏 </el-button>
    </el-row>
    <el-row :gutter="15">
      <el-col :span="4">
        <div>
          <div style="text-align: center">
            <img
              src="@/assets/img/user2.png"
              style="
                width: 100px;
                background-color: transparent;
                border-radius: 50%;
              "
            />
          </div>
          <el-tree
            class="filter-tree"
            :data="data"
            :props="defaultProps"
            highlight-current
            node-key="id"
            @node-click="nodeClick"
            default-expand-all
            :filter-node-method="filterNode"
            ref="treeOne"
          >
            <span slot-scope="{ data }">
              <span> <i :class="data.icon"></i>{{ data.label }} </span>
            </span>
          </el-tree>
        </div>
      </el-col>
      <el-col :span="20"
        ><div class="vcontainer">
          <div class="video">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div>
          <div class="video">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div>
          <div class="video">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div>
          <div class="video">
            <video-player
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: true, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            // src: "http://vjs.zencdn.net/v/oceans.mp4", //url地址
            src: "", //url地址
          },
        ],
        poster: "", //你的封面地址
        width: document.documentElement.clientWidth,
        notSupportedMessage: "无信号", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },

      // tree-data
      data: [
        {
          id: 1,
          label: "1",
          icon: "el-icon-monitor",
          //一级目录
          children: [
            //二级目录
            {
              id: 3,
              label: "2",
              icon: "el-icon-monitor",
              children: [
                //三级目录
                {
                  index: 3,
                  id: 1,
                  label: "设备1",
                  url: "http://vjs.zencdn.net/v/oceans.mp4",
                  icon: "el-icon-map-location",
                },
                {
                  index: 3,
                  id: 2,
                  label: "设备2",
                  url: "http://vjs.zencdn.net/v/oceans.mp4",
                  icon: "el-icon-map-location",
                },
              ],
            }, //label为列表所显示的目录名

            {
              id: 5,
              label: "3",
              icon: "el-icon-monitor",
              children: [
                {
                  index: 3,
                  id: 4,
                  label: "设备3",
                  url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv",
                  icon: "el-icon-map-location",
                },
              ],
            },

            {
              id: 8,
              label: "4",
              icon: "el-icon-monitor",
              children: [
                {
                  index: 3,
                  id: 6,
                  label: "设备4",
                  url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv",
                  icon: "el-icon-map-location",
                },
                {
                  index: 3,
                  id: 7,
                  label: "设备5",
                  url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv",
                  icon: "el-icon-map-location",
                },
              ],
            },

            {
              id: 10,
              label: "6",
              icon: "el-icon-monitor",
              children: [
                {
                  index: 3,
                  id: 9,
                  label: "设备6",
                  url: "https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-720p.flv",
                  icon: "el-icon-map-location",
                },
              ],
            },

            {
              id: 12,
              label: "7",
              icon: "el-icon-monitor",
              children: [
                {
                  index: 3,
                  id: 11,
                  label: "设备7",
                  url: "http://1011.hlsplay.aodianyun.com/demo/game.flv",
                  icon: "el-icon-map-location",
                },
              ],
            },

            {
              id: 14,
              label: "8",
              icon: "el-icon-monitor",
              children: [
                {
                  index: 3,
                  id: 13,
                  label: "设备8",
                  url: "http://47.94.39.191:81/live/test_2.flv",
                  icon: "el-icon-map-location",
                },
                {
                  index: 3,
                  id: 14,
                  label: "设备9",
                  url: "http://47.94.39.191:81/live/test_2.flv",
                  icon: "el-icon-map-location",
                },
                {
                  index: 3,
                  id: 15,
                  label: "设备10",
                  url: "http://47.94.39.191:81/live/test_2.flv",
                  icon: "el-icon-map-location",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    nodeClick(data) {
      console.log("data:", data);
      this.playerOptions["sources"][0].src = data.url;
    },
    filterNode(value, data) {
      console.log("value:", value, "data:", data);
    },
    selectType() {},
    handleFullScreen() {},
  },
};
</script>

<style>
.vcontainer {
  width: 100%;
  height: 90%;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.video {
  border: 2px solid white;
  width: 50%;
  height: 50% !important;
  box-sizing: border-box;
  /**可有可无 */
  /* float: left; */
  /* object-fit: fill; */
}
/* 让视频上移 */
.video-js .vjs-tech {
  top: -23px;
}
.el-col {
  border-radius: 4px;
}
.el-row {
  margin-top: 10px;
}
</style>
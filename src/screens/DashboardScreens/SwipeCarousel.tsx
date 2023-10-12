import React, { useRef, useState, useEffect } from "react";
// import InteractiveChart from './charts';
import InteractiveChart from "./AlternateChart";
import { COLORS } from "../../constants";
import { Dimensions } from "react-native";
import Swiper from "react-native-web-swiper";
import { Platform } from "react-native";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import { CarouselGesture } from "../../utils/helpers";
import { Box } from "@gluestack-ui/themed";
import { ProgressCircle } from "react-native-svg-charts";
import { Text, View } from "@gluestack-ui/themed";
import Animated, {
  useSharedValue,
  withSequence,
  withTiming,
  Easing,
  Keyframe,
  FadeIn,
  FadeOut
} from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";
import PaginationItem from "./Pagination";

import { CustomSize } from "../../utils/helpers";
const data = [
  { chartColor: COLORS.chartLinePink, bgColor: "#b91e7a66" },
  { chartColor: COLORS.chartLineBlue, bgColor: "#0C66B166" },
  { chartColor: COLORS.chartLinePurple, bgColor: "#9368FB66" },
  { chartColor: COLORS.chartLineRed, bgColor: "#F44C4566" }
];
// const DeviceWidth = Dimensions.get('window').width;
const AnimatedSwiper = Animated.createAnimatedComponent(View);
const colors = ["#899F9C", "#899F9C", "#899F9C", "#899F9C"];
const SwipeCarousel = () => {
  const swiper = useRef(null);
  const width = Dimensions.get("window").width;
  const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
  const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);
  const progressValue = useSharedValue<number>(0);

  return (
    <View style={{ flex: 1 }}>
      {/* <Swiper
      ref={swiperRef}
        springConfig={{ bounciness: 0 }}
        // gesturesEnabled={CarouselGesture}
       
        from={0}
        minDistanceToCapture={2}
        minDistanceForAction={0.1}
        controlsProps={{
          prevPos: false,
          nextPos: false,
          dotsTouchable: true,
          dotsPos: "bottom",
          dotActiveStyle: { backgroundColor: COLORS.grey }
        }}
      >
        {data.map((item, index) => (
          <View
            key={index}
          >
            <Box flexDirection="row" ml={20} mt={20}>
              <Box position="relative">
                <ProgressCircle
                  style={{ height: 100, width: 100 }}
                  progress={progressValue.value}
                  progressColor={item.chartColor}
                  backgroundColor={item.bgColor}
                />
                <Box position="absolute" left={32} top={30}>
                  <Text fontWeight="$bold">24&deg;C</Text>
                  <Text fontSize="$sm" color="#B7B7B7">
                    Temp
                  </Text>
                </Box>
              </Box>
              <Box ml={30} mt={20}>
                <Text>30% Lower Today</Text>
                <Text fontSize="$sm" color="#B7B7B7">
                  Updated 10mins ago
                </Text>
              </Box>
            </Box>
            <InteractiveChart chartColor={item.chartColor} />
          </View>
        ))}
      </Swiper> */}

      <Carousel
        
        ref={swiper}
        loop={false}
        width={width - 18}
        height={CustomSize(380, 580)}
        // height={width / 2}
        // autoPlay={true}
        pagingEnabled={true}
        snapEnabled={true}
        onProgressChange={(_, absoluteProgress) =>
          (progressValue.value = absoluteProgress)
        }
        data={data}
        overscrollEnabled= {false}
        scrollAnimationDuration={100}
        onSnapToItem={(index) => console.log("current index:", index)}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Box flexDirection="row" ml={20} mt={20}>
              <Box position="relative">
                <ProgressCircle
                  style={{ height: 100, width: 100 }}
                  progress={0.8}
                  progressColor={item.chartColor}
                  backgroundColor={item.bgColor}
                />
                <Box position="absolute" left={32} top={30}>
                  <Text fontWeight="$bold">24&deg;C</Text>
                  <Text fontSize="$sm" color="#B7B7B7">
                    Temp
                  </Text>
                </Box>
              </Box>
              <Box ml={30} mt={20}>
                <Text>30% Lower Today</Text>
                <Text fontSize="$sm" color="#B7B7B7">
                  Updated 10mins ago
                </Text>
              </Box>
            </Box>
            <InteractiveChart chartColor={item.chartColor} />
          </View>
        )}
      />
      {!!progressValue && (
        <View
          style={{
            marginTop: -40,
            flexDirection: "row",
            justifyContent: "space-between",
            width: 70,
            alignSelf: "center"
          }}
        >
          {colors.map((backgroundColor, index) => {
            return (
              <PaginationItem
                handlePage={swiper}
                backgroundColor={backgroundColor}
                animValue={progressValue}
                index={index}
                key={index}
                // isRotate={isVertical}
                length={colors.length}
              />
            );
          })}
        </View>
      )}
    </View>
  );
};

export default SwipeCarousel;

const fadeIn = new Keyframe({
  0: {
    opacity: 0
  },
  100: {
    opacity: 1
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading: {
    fontSize: 44
  },
  wrapper: {},
  slide: {},
  slide1: {},
  slide2: {},
  slide3: {},
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  },
  img: {
    width: 310,
    height: 350
  }
});

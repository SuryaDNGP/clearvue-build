import { Badge, BadgeIcon, BadgeText, Box, HStack } from "@gluestack-ui/themed";
import React from "react";
import { Text } from "@gluestack-ui/themed";
import { CircleIcon } from "@gluestack-ui/themed";
import { COLORS } from "../../constants";
import { LinearGradient } from "expo-linear-gradient";
const DeviceDetailShared: React.FC<any> = ({ device }) => {
  return (
    <LinearGradient
      style={{ borderRadius: 10, marginBottom: 10, marginHorizontal: 10 }}
      colors={["#F2F2F21A", "#BEB5B51A"]}
    >
      <Box paddingVertical={20} paddingHorizontal={24}>
        <HStack justifyContent="space-between">
          <Box>
            <Text>{device?.title}</Text>
            <Badge paddingLeft={0} bg="transparent">
              <BadgeIcon
                color={device.status === "active" ? COLORS.green : COLORS.red}
                mr="$1"
                width="$2"
                as={CircleIcon}
              />
              <BadgeText
                color={COLORS.white}
                fontSize="$xs"
                textTransform="capitalize"
              >
                {device.status}
              </BadgeText>
            </Badge>
          </Box>
          {Object.keys(device?.data).length === 0 ? (
            <HStack width="100%" justifyContent="center" alignItems="center">
              <Text
                fontSize="$xs"
                sx={{
                  _web: {
                    fontSize: "$sm"
                  }
                }}
                color={COLORS.grey + "50"}
              >
                No data to Show
              </Text>
            </HStack>
          ) : (
            <HStack style={{ gap: 30 }}>
              <Box alignItems="center">
                <Text
                  fontSize="$xs"
                  sx={{
                    _web: {
                      fontSize: "$sm"
                    }
                  }}
                >
                  {device?.data?.temp}&deg;C
                </Text>
                <Text fontSize="$xs" color={COLORS?.pink}>
                  Temp.
                </Text>
              </Box>
              <Box alignItems="center">
                <Text
                  fontSize="$xs"
                  sx={{
                    _web: {
                      fontSize: "$sm"
                    }
                  }}
                >
                  {device?.data?.pressure}pa
                </Text>
                <Text fontSize="$xs" color={COLORS?.captionBlue}>
                  Pressure
                </Text>
              </Box>
              <Box alignItems="center">
                <Text
                  fontSize="$xs"
                  sx={{
                    _web: {
                      fontSize: "$sm"
                    }
                  }}
                >
                  {device?.data?.humidity}%
                </Text>
                <Text fontSize="$xs" color={COLORS?.captionViolet}>
                  Humidity
                </Text>
              </Box>
              <Box alignItems="center">
                <Text
                  fontSize="$xs"
                  sx={{
                    _web: {
                      fontSize: "$sm"
                    }
                  }}
                >
                  {device?.data?.light}lux
                </Text>
                <Text fontSize="$xs" color={COLORS?.textRed}>
                  Light
                </Text>
              </Box>
            </HStack>
          )}
        </HStack>
      </Box>
    </LinearGradient>
  );
};

export default DeviceDetailShared;

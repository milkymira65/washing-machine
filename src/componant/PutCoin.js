import React from "react";
import { Box, Flex, Center, Image } from "@chakra-ui/react";

import Countdown from "./counting";

function CounT() {
  return (
    <Box>
      <Image src="https://cdn.pixabay.com/photo/2016/03/31/20/33/clothes-1295863_960_720.png"></Image>

      <Countdown id="counter" />
    </Box>
  );
}

export default CounT;

import React from "react";
import { Box, Flex, Center, Image, Wrap, Button } from "@chakra-ui/react";
// import SendMessage from "./componant/SendMasage"
// import { useState, useNavigate } from "react-router-dom";

function Wash() {
  // const [putCoin, setPutCoin] = useState("");
  // const [changePic,setChangePic] =useState()
  return (
    <Box w="100%" h="100%" bg="#FEE49A">
      <Image w="10%" ml="10%" src=""></Image>
      <Center>
        <Image
          w="45%"
          src="https://images-ext-1.discordapp.net/external/WJs_tZ_a_UaO80QtqU7oVc5pmdgTVOR9l6OOk5pVxTk/https/i.pinimg.com/564x/c1/bb/0e/c1bb0e115963b3b4351e41e1ff8ebb08.jpg"
        ></Image>
      </Center>

      <Wrap ml="20%">
        <Box w="300px">
          <Image
            w="50%"
            src="https://cdn.pixabay.com/photo/2022/05/19/11/41/laundry-7207217_960_720.png"
          ></Image>
          <Button
            colorScheme="teal"
            variant="solid"
            size="lg"
            mt="5%"
            // onClick={() => {
            //   Navigate(" CounT");
            // }}
          >
            coin operated
          </Button>
        </Box>
        <Box w="300px">
          <Image
            w="50%"
            src="https://cdn.pixabay.com/photo/2022/05/19/11/41/laundry-7207217_960_720.png"
          ></Image>
          <Button colorScheme="teal" variant="solid" size="lg" mt="3%">
            coin operated
          </Button>
        </Box>
        <Box w="300px">
          <Image
            w="50%"
            src="https://cdn.pixabay.com/photo/2022/05/19/11/41/laundry-7207217_960_720.png"
          ></Image>
          <Button colorScheme="teal" variant="solid" size="lg" mt="3%">
            coin operated
          </Button>
        </Box>
        <Box w="300px">
          <Image
            w="50%"
            src="https://cdn.pixabay.com/photo/2022/05/19/11/41/laundry-7207217_960_720.png"
          ></Image>
          <Button colorScheme="teal" variant="solid" size="lg" mt="3%">
            coin operated
          </Button>
        </Box>
        <Box w="300px">
          <Image
            w="50%"
            src="https://cdn.pixabay.com/photo/2022/05/19/11/41/laundry-7207217_960_720.png"
          ></Image>
          <Button colorScheme="teal" variant="solid" size="lg" mt="3%">
            coin operated
          </Button>
        </Box>
        <Box w="300px">
          <Image
            w="50%"
            src="https://cdn.pixabay.com/photo/2022/05/19/11/41/laundry-7207217_960_720.png"
          ></Image>
          <Button colorScheme="teal" variant="solid" size="lg" mt="3%">
            coin operated
          </Button>
        </Box>
      </Wrap>
    </Box>
  );
}

export default Wash;

import { useCallback, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import {
  Image,
  Box,
  Center,
  Text,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'
import Link from "next/link";

export default function Home() {
  // const [test, setTest] = useState([])
  // const testFunction = useCallback(async () => {
  //   const res = await fetch('http://localhost:3030/test')
  //   const resJson = await res.json()
  //   setTest(resJson)
  // }, [])
  // useEffect(() => {
  //   testFunction()
  // }, [testFunction]);
  return (
    <Box>
      <Box w="100%">
        <Image
          src="https://vaccine.trueid.net/static/media/banner.af9b098f.jpg"
          w="100%"
        ></Image>
      </Box>
      <Center mt={10}>
        <Text fontSize={40} color="red">
          True เปิดลงทะเบียนรับการฉีดวัคซีนโควิด-19
        </Text>
      </Center>
      <Grid templateColumns="repeat(12, 1fr)" mt={10}>
        <GridItem colStart={4} colEnd={8}>
          <Box>
            <Text fontSize={25}>เลือกศูนย์ฉีดวัคซีนโควิด-19</Text>
          </Box>
        </GridItem>
      </Grid>
      <Center mt={5}>
        <Select placeholder="เลือกศูนย์ฉีด" size="lg" width="50%">
          <option value="1">ศูนย์ฉีดวัคซีน 1</option>
          <option value="2">ศูนย์ฉีดวัคซีน 2</option>
        </Select>
      </Center>
      <Grid templateColumns="repeat(12, 1fr)" mt={10}>
        <GridItem colStart={4} colEnd={7}>
          <Box>
            <Text fontSize={25} color="red">
              กระตุ้นเข็มที่ 4
            </Text>
            <Text fontSize={15}>
              สำหรับคนไทยและต่างชาติ อายุ 18 ปีขึ้นไป
              ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 4 ด้วยวัคซีนไฟเซอร์
              โดยได้รับเข็มที่ 3 มาแล้วอย่างน้อย 120 วัน เริ่มฉีด 1 - 31 พ.ค. 65
            </Text>
          </Box>
        </GridItem>
        <GridItem colStart={9}>
          <Link href="/form" passHref>
            <Button colorScheme={"red"}>จองวัคซีนเข็มที่ 4</Button>
          </Link>
        </GridItem>
      </Grid>
      <Center mt={100} mb={10}>
        <Image
          src="https://seeklogo.com/images/T/true-logo-8162DB396F-seeklogo.com.png"
          width={40}
        ></Image>
      </Center>
    </Box>
  );
}

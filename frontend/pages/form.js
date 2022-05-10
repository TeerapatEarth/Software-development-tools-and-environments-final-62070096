import { useCallback, useEffect, useState } from "react";
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
import { Input } from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios"

export default function Home() {
  const [prefix, setPrefix] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [personalId, setPersonalId] = useState("")
  const [birthday, setBirthday] = useState("")
  const [houseNumber, setHouseNumber] = useState("")
  const [province, setProvince] = useState("")
  const [district, setDistrict] = useState("")
  const [sub_district, setSub_district] = useState("")
  const [tel, setTel] = useState("")

  const createBooking = async () =>{
    const objBooking = {
      prefix: prefix,
      name: firstname + " " + lastname,
      personalId: personalId,
      birthday: birthday,
      address: houseNumber + " " + province + " " + district + " " + sub_district,
      telephone: tel
    }
    await axios.post("http://localhost:3030/booking/create", objBooking)
    alert("จองวัคซีนสำเร็จ")
  }
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
          ลงทะเบียนรับสิทธิ์วัคซีน
        </Text>
      </Center>
      <Grid templateColumns="repeat(12, 1fr)" mt={5}>
        <GridItem colStart={3} colEnd={12} mt={10}>
          <Text fontSize={25}>ข้อมูลทั่วไป</Text>
        </GridItem>
        <GridItem colStart={3} colEnd={4} mt={5}>
          <Text fontSize={15}>คำนำหน้า</Text>
          <Select placeholder="คำนำหน้า" width="100%" onChange={(e) => setPrefix(e.target.value)}>
            <option value="นาย">นาย</option>
            <option value="นาง">นาง</option>
            <option value="นางสาว">นางสาว</option>
          </Select>
        </GridItem>
        <GridItem colStart={4} colEnd={7} mt={5}>
          <Text fontSize={15} ml={10}>
            ชื่อ
          </Text>
          <Input variant="outline" placeholder="ชื่อ" ml={10} value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
        </GridItem>
        <GridItem colStart={7} colEnd={10} mt={5} ml={10}>
          <Text fontSize={15} ml={10}>
            นามสกุล
          </Text>
          <Input variant="outline" placeholder="นามสกุล" ml={10} value={lastname} onChange={(e) => setLastname(e.target.value)}/>
        </GridItem>
        <GridItem colStart={3} colEnd={6} mt={5}>
          <Text fontSize={15}>เลขบัตรประชาชน</Text>
          <Input variant="outline" placeholder="เลขบัตรประชาชน" value={personalId} onChange={(e) => setPersonalId(e.target.value)}/>
        </GridItem>
        <GridItem colStart={7} colEnd={10} mt={5}>
          <Text fontSize={15}>วันเกิด</Text>
          <input type="date" value={birthday} onChange={(e) => setBirthday(e.target.value)}></input>
        </GridItem>
        <GridItem colStart={3} colEnd={12} mt={10}>
          <Text fontSize={25}>ที่อยู่</Text>
        </GridItem>
        <GridItem colStart={3} colEnd={6} mt={5}>
          <Text fontSize={15}>บ้านเลขที่</Text>
          <Input variant="outline" placeholder="บ้านเลขที่" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)}/>
        </GridItem>
        <GridItem colStart={6} colEnd={9} mt={5}>
          <Text fontSize={15} ml={10}>
            จังหวัด
          </Text>
          <Input variant="outline" placeholder="จังหวัด" ml={10} value={province} onChange={(e) => setProvince(e.target.value)}/>
        </GridItem>
        <GridItem colStart={3} colEnd={6} mt={5}>
          <Text fontSize={15}>เขต / อำเภอ</Text>
          <Input variant="outline" placeholder="เขต / อำเภอ" value={district} onChange={(e) => setDistrict(e.target.value)}/>
        </GridItem>
        <GridItem colStart={6} colEnd={9} mt={5}>
          <Text fontSize={15} ml={10}>
            แขวง / ตำบล
          </Text>
          <Input variant="outline" placeholder="แขวง / ตำบล" ml={10} value={sub_district} onChange={(e) => setSub_district(e.target.value)}/>
        </GridItem>
        <GridItem colStart={3} colEnd={6} mt={5}>
          <Text fontSize={15}>หมายเลขโทรศัพท์</Text>
          <Input variant="outline" placeholder="หมายเลขโทรศัพท์" value={tel} onChange={(e) => setTel(e.target.value)}/>
        </GridItem>
      </Grid>
      <Center mt={10}>
        <Button colorScheme={"red"} onClick={() => createBooking()}>ลงทะเบียน</Button>
        <Link href="/" passHref>
          <Button ml={10}>ยกเลิก</Button>
        </Link>
      </Center>
      <Center mt={100} mb={10}>
        <Image
          src="https://seeklogo.com/images/T/true-logo-8162DB396F-seeklogo.com.png"
          width={40}
        ></Image>
      </Center>
    </Box>
  );
}

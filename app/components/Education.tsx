import {
  Box,
  VStack,
  Button,
  Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Image,
  Heading,
  Stack,
  Container,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";

interface FeatureProps {
  heading: string;
  text: string;
}

const Feature = ({ heading, text }: FeatureProps) => {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600">
        {heading}
      </chakra.h3>
      <chakra.p>{text}</chakra.p>
    </GridItem>
  );
};

export default function Education() {
  return (
    <>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={{ base: "2xl", sm: "4xl" }} fontWeight={"bold"}>
          Education
        </Heading>
      </Stack>
      <Box as={Container} maxW="7xl" mt={14} p={4}>
        {/* <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
  obcaecati ut cupiditate pariatur, dignissimos, placeat amet officiis.
</Text> */}

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Certified Developer Associate
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                Amazon Web Services
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                Aug 2017 (Now Expired)
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
            <UnorderedList>
      <ListItem>
        Demonstrated proficiency in designing, deploying, and maintaining applications on AWS.
      </ListItem>
      <ListItem>
        Validated expertise in implementing industry best practices for scalable and reliable solutions.
      </ListItem>
      <ListItem>
        Hands-on experience leveraging a variety of AWS services for building robust applications.
      </ListItem>
      <ListItem>
        In-depth knowledge of cloud-native tools and technologies on the AWS platform.
      </ListItem>
      <ListItem>
        Commitment to staying current with the latest advancements in cloud computing.
      </ListItem>
      <ListItem>
        Dedication to delivering high-quality solutions aligned with AWS best practices.
      </ListItem>
    </UnorderedList>
            </Flex>
          </GridItem>
        </Grid>

        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                User Experience Foundation Certificate
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                BCS
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                2017
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
            <UnorderedList>
      <ListItem>
        Demonstrated understanding of fundamental principles in User Experience (UX) design.
      </ListItem>
      <ListItem>
        Proficient in creating intuitive and user-friendly interfaces for digital products.
      </ListItem>
      <ListItem>
        Applied user-centered design methodologies to enhance overall user satisfaction.
      </ListItem>
      <ListItem>
        Skilled in conducting user research, usability testing, and gathering user feedback.
      </ListItem>
      <ListItem>
        Experience in creating wireframes, prototypes, and design mockups for UX/UI purposes.
      </ListItem>
      <ListItem>
        Strong emphasis on creating accessible and inclusive digital experiences.
      </ListItem>
      <ListItem>
        Committed to staying updated on the latest trends and best practices in UX design.
      </ListItem>
    </UnorderedList>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                Leading and Influencing Level 1
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                Intelligent Action
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                2016
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                Three day course learning how to lead and influence others in a
                professional environment and adapt to different scenarios,
                further developing verbal com- munication and team work skills.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={4}
        >
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
              <chakra.h2 fontSize="3xl" fontWeight="700">
                BSC Computer Science
              </chakra.h2>
              <chakra.h3 fontSize="2xl" fontWeight="300">
                University of East Anglia
              </chakra.h3>
              <chakra.h3 fontSize="sm" fontWeight="300">
                2016
              </chakra.h3>

              {/* <Button colorScheme="green" size="md">
      Call To Action
    </Button> */}
            </VStack>
          </GridItem>
          <GridItem>
            <Flex>
              <chakra.p>
                Whilst developing my understanding in core Computer Science
                theories, such as data structures and algorithms, I learned how
                to project manage from its conception through to completion. I
                created an e-commerce web application for my final project and
                as part of the software engineering module, developed mobile
                applcations.
              </chakra.p>
            </Flex>
          </GridItem>
        </Grid>
        <Divider mt={12} mb={12} />
      </Box>
    </>
  );
}

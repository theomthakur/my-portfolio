import { FC } from "react";

import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Education } from "pages/about/education/Education";
import { Experience } from "pages/about/experience/Experience";
import { Skills } from "pages/about/skills/Skills";

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);

    // const onPlay = () => {
    //     const audio = new Audio(configs.common.audioFile);
    //     audio.play();
    // };

    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35" data-aos="fade-up">
                    <picture>
  <source
    type="image/webp"
    srcSet={`${process.env.PUBLIC_URL}${configs.common.mainPicture}`}
  />
  <source
    type="image/jpeg"
    srcSet={`${process.env.PUBLIC_URL}${configs.common.mainPictureJPG}`}
  />
  <Image
    borderRadius="xl"
    w="100%"
    src={`${process.env.PUBLIC_URL}${configs.common.mainPicture}`}
    alt="profile image"
  />
</picture>

                </Box>
                <Box flex="0.85">
                    <Heading data-aos="fade-down">{configs.common.name}</Heading>
                    <Flex alignItems="center">
                        <Text fontWeight="bold" opacity="0.5" data-aos="fade" data-aos-delay="200">
                            {configs.common.pronunciation}
                        </Text>

                        {/* <Button
                            size="xs"
                            aria-label="pronunciation button"
                            as={IconButton}
                            variant="icon"
                            fontSize="md"
                            icon={<VolumeIcon />}
                            onClick={onPlay}
                            data-aos="fade"
                            data-aos-delay="400"
                        /> */}
                    </Flex>
                    <Box pt="4" data-aos="fade-up" data-aos-delay="400">
                        <Content fontSize="lg">{content.about}</Content>
                    </Box>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" flexShrink={0} overflow="hidden">
                    <Education />
                </Box>
                <Box flex="0.6" overflow="hidden">
                    <Experience />
                </Box>
            </Flex>
            <Box pt="16">
                <Skills />
            </Box>
            {/* <Box pt="16">
                <Blog />
            </Box> */}
        </Box>
    );
};

import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcos Paulo</Text>
          <Text color="gray.300" fontSize="small">
              eumarcosborgs@gmail.com
          </Text>
        </Box>
      )}
  
      <Avatar size="md" name="Marcos Paulo" src="https://github.com/eumarcosborgs.png"/>
    </Flex>
  )
}
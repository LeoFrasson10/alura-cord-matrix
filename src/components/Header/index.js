import { Box, Text, Button } from "@skynexui/components";
import { boxContainer } from "./styles";

function Header() {
  return (
    <>
      <Box styleSheet={boxContainer}>
        <Text variant="heading5">Chat</Text>
        <Button
          variant="tertiary"
          colorVariant="neutral"
          label="Logout"
          href="/"
        />
      </Box>
    </>
  );
}
export default Header;

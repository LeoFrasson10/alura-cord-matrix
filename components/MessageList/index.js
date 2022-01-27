import { Box, Text, Image } from "@skynexui/components";
import { boxContainer, textLi, image, textSpan } from "./styles";

function MessageList(props) {
  const { mensagens } = props;
  return (
    <Box tag="ul" styleSheet={boxContainer}>
      {mensagens.map((mensagem) => (
        <Text key={mensagem.id} tag="li" styleSheet={textLi}>
          <Box
            styleSheet={{
              marginBottom: "8px",
              display: "flex",
              alignItems: "baseline",
            }}
          >
            <Image
              styleSheet={image}
              src={`https://github.com/${mensagem.de}.png`}
            />
            <Text tag="strong">{mensagem.de}</Text>
            <Text styleSheet={textSpan} tag="span">
              {new Date().toLocaleDateString()}
            </Text>
          </Box>
          {mensagem.texto}
        </Text>
      ))}
    </Box>
  );
}
export default MessageList;

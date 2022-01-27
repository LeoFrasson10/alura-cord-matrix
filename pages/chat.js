import React, { useState } from "react";
import { Box, TextField } from "@skynexui/components";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import {
  boxContainer,
  boxContent,
  boxContainerMessages,
  textFieldChat,
  boxForm,
} from "../styles/pages/chat";

export default function ChatPage() {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([]);

  const handleChangeTextArea = (event) => {
    setMensagem(event.target.value);
  };

  return (
    <Box styleSheet={boxContainer}>
      <Box styleSheet={boxContent}>
        <Header />
        <Box styleSheet={boxContainerMessages}>
          <MessageList mensagens={mensagens} />

          <Box as="form" styleSheet={boxForm}>
            <TextField
              value={mensagem}
              onChange={handleChangeTextArea}
              placeholder="Insira sua mensagem aqui..."
              type="textarea"
              styleSheet={textFieldChat}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  const newMessage = {
                    id: new Date().getTime(),
                    texto: mensagem,
                    de: "leofrasson10",
                  };

                  setMensagens([newMessage, ...mensagens]);
                  setMensagem("");
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

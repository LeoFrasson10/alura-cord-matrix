import React, { useState, useEffect } from "react";
import { Box, TextField } from "@skynexui/components";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import { createClient } from "@supabase/supabase-js";
import {
  boxContainer,
  boxContent,
  boxContainerMessages,
  textFieldChat,
  boxForm,
} from "../styles/pages/chat";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM4Njc4OSwiZXhwIjoxOTU4OTYyNzg5fQ.S3i5XNAb69he1a12LwHDj0J7Q4jetBQwl3KDEfcKFIA";
const SUPASE_URL = "https://nxdkdxiasdnstjanvqbk.supabase.co";

const supabseClient = createClient(SUPASE_URL, SUPABASE_ANON_KEY);

export default function ChatPage() {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([]);

  useEffect(() => {
    supabseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        setMensagens(data);
      });
  }, []);

  const handleChangeTextArea = (event) => {
    setMensagem(event.target.value);
  };

  function handleNewMessage(message) {
    const newMessage = {
      texto: message,
      de: "leofrasson10",
    };

    supabseClient
      .from("mensagens")
      .insert([newMessage])
      .then(({ data }) => {
        setMensagens([data[0], ...mensagens]);
      });

    setMensagem("");
  }

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

                  handleNewMessage(mensagem);
                }
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

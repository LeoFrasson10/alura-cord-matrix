import React, { useState, useEffect } from "react";
import { Box, TextField } from "@skynexui/components";
import Header from "../src/components/Header";
import MessageList from "../src/components/MessageList";
import ButtonSendSticker from "../src/components/ButtonSendSticker";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/router";
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

const supabaseClient = createClient(SUPASE_URL, SUPABASE_ANON_KEY);

function getMessagesInRealtime(adicionaMensagem) {
  return supabaseClient
    .from("mensagens")
    .on("INSERT", (response) => {
      adicionaMensagem(response.new);
    })
    .subscribe();
}

export default function ChatPage() {
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([]);
  const navigate = useRouter();

  function handleNewMessage(message) {
    const newMessage = {
      texto: message,
      de: navigate.query.username,
    };

    supabaseClient
      .from("mensagens")
      .insert([newMessage])
      .then(({ data }) => {
        // setMensagens([data[0], ...mensagens]);
      });

    setMensagem("");
  }

  useEffect(() => {
    if (!navigate.query.username || navigate.query.username === "") {
      navigate.push("/");
    }
  }, []);

  useEffect(() => {
    supabaseClient
      .from("mensagens")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        setMensagens(data);
      });

    getMessagesInRealtime((novaMensagem) => {
      setMensagens((state) => [novaMensagem, ...state]);
    });
  }, []);

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

                  handleNewMessage(mensagem);
                }
              }}
            />
            <ButtonSendSticker
              onStickerClick={(sticker) => {
                handleNewMessage(":sticker:" + sticker);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

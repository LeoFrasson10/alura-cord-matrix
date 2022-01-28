import { useState } from "react";
import Titulo from "../src/components/Title";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { useRouter } from "next/router";
import appConfig from "../config.json";

import {
  boxContainer,
  boxContent,
  boxForm,
  boxImageContainer,
  textUserName,
  image,
  textSubtitle,
  textFieldColors,
  buttonColors,
} from "../styles/pages/index.js";

export default function PaginaInicial() {
  const [username, setUsername] = useState("");
  const navigate = useRouter();

  return (
    <>
      <Box styleSheet={boxContainer}>
        <Box styleSheet={boxContent}>
          {/* Formulário */}
          <Box
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              navigate.push(`/chat?username=${username}`);
            }}
            styleSheet={boxForm}
          >
            <Titulo tag="h2">Boas vindas de volta!</Titulo>
            <Text variant="body3" styleSheet={textSubtitle}>
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              textFieldColors={{
                neutral: textFieldColors,
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              disabled={!username || username.length < 2}
              buttonColors={buttonColors}
            />
          </Box>
          {/* Formulário */}
          {/* Photo Area */}
          <Box styleSheet={boxImageContainer}>
            {username.length >= 2 && (
              <>
                <Image
                  styleSheet={image}
                  src={`https://github.com/${username || "github"}.png`}
                />
                <Text variant="body4" styleSheet={textUserName}>
                  {username || "github"}
                </Text>
              </>
            )}
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}

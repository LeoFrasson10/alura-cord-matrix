import appConfig from "../../../config.json";

export const boxContainer = {
  overflow: "auto",
  display: "flex",
  flexDirection: "column-reverse",
  padding: "8px",
  flex: 1,
  color: appConfig.theme.colors.neutrals["000"],
  marginBottom: "16px",
};

export const textLi = {
  borderRadius: "5px",
  padding: "6px",
  marginBottom: "12px",
  hover: {
    backgroundColor: appConfig.theme.colors.neutrals[700],
  },
};

export const image = {
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  display: "inline-block",
  marginRight: "8px",
};

export const textSpan = {
  fontSize: "10px",
  marginLeft: "8px",
  color: appConfig.theme.colors.neutrals[300],
};

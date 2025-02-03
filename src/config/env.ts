import * as dotenv from "dotenv";

dotenv.config();

export const config = {
  jwtSecret: process.env.JWT_SECRET || "uma_chave_secreta_segura",
  jwtExpiration: process.env.JWT_EXPIRATION || "1d",
};

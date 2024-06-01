import WebSocket from "isomorphic-ws";

export type FetchFn = typeof fetch;
export type WebSocketCl = typeof WebSocket;
export const MJBot = "936929561302675456";
export const NijiBot = "1022952195194359889";
export interface MJConfig {
  ChannelId: string;
  PrivateChannelId?: string;
  BotChannelId?: string;
  SalaiToken: string;
  BotId: typeof MJBot | typeof NijiBot;
  Debug: boolean;
  XSuperProperties: string;
  UserAgent: string;
  __dcfduid: string;
  __sdcfduid: string;
  Limit: number;
  MaxWait: number;
  SessionId: string;
  ServerId?: string;
  Ws?: boolean;
  Remix?: boolean;
  HuggingFaceToken?: string;
  DiscordBaseUrl: string;
  DiscordsaysUrl: string
  WsBaseUrl: string;
  fetch: FetchFn;
  ApiInterval: number;
  WebSocket: WebSocketCl;
  ImageProxy: string;
}
export interface MJConfigParam {
  SalaiToken: string; //DISCORD_TOKEN
  ChannelId?: string; //DISCORD_CHANNEL_ID
  PrivateChannelId?: string; // DISCORD_PRIVATE_CHANNEL_ID
  BotChannelId?: string;
  XSuperProperties?: string;
  UserAgent?: string;
  __dcfduid?: string;
  __sdcfduid?: string;
  ServerId?: string; //DISCORD_SERVER_ID
  BotId?: typeof MJBot | typeof NijiBot; //DISCORD_BOT_ID MJBot OR NijiBot
  Debug?: boolean; // print log
  ApiInterval?: number; //ApiInterval request api interval
  Limit?: number; //Limit of get message list
  MaxWait?: number;
  Remix?: boolean; //Remix:true use remix mode
  Ws?: boolean; //Ws:true use websocket get discord message (ephemeral message)
  HuggingFaceToken?: string; //HuggingFaceToken for verify human
  SessionId?: string;
  DiscordBaseUrl?: string;
  ImageProxy?: string;
  WsBaseUrl?: string;
  fetch?: FetchFn; //Node.js<18 need node.fetch Or proxy
  WebSocket?: WebSocketCl; //isomorphic-ws Or proxy
}

export const DefaultMJConfig: MJConfig = {
  BotId: MJBot,
  ChannelId: "1077800642086703114",
  SalaiToken: "",
  ApiInterval: 350,
  SessionId: "8bb7f5b79c7a49f7d0824ab4b8773a81",
  XSuperProperties: "eyJvcyI6IldpbmRvd3MiLCJicm93c2VyIjoiQ2hyb21lIiwiZGV2aWNlIjoiIiwic3lzdGVtX2xvY2FsZSI6InpoLUNOIiwiYnJvd3Nlcl91c2VyX2FnZW50IjoiTW96aWxsYS81LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzEyNS4wLjAuMCBTYWZhcmkvNTM3LjM2IEVkZy8xMjUuMC4wLjAiLCJicm93c2VyX3ZlcnNpb24iOiIxMjUuMC4wLjAiLCJvc192ZXJzaW9uIjoiMTAiLCJyZWZlcnJlciI6IiIsInJlZmVycmluZ19kb21haW4iOiIiLCJyZWZlcnJlcl9jdXJyZW50IjoiIiwicmVmZXJyaW5nX2RvbWFpbl9jdXJyZW50IjoiIiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X2J1aWxkX251bWJlciI6Mjk3OTYxLCJjbGllbnRfZXZlbnRfc291cmNlIjpudWxsLCJkZXNpZ25faWQiOjB9",
  UserAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0",
  __dcfduid: "8e884ad0ee0411edb73fe1c781663780",
  __sdcfduid: "8e884ad1ee0411edb73fe1c781663780dc2e4e3b84e84e90a2bbc53b85f204bec2a6f0e4ebafa23a79c34cfcf0472bb0",
  Debug: false,
  Limit: 50,
  Ws: true,
  MaxWait: 200,
  ImageProxy: "",
  DiscordBaseUrl: "https://discord.com",
  WsBaseUrl: "wss://gateway.discord.gg/?encoding=json&v=9",
  DiscordsaysUrl:
    typeof document === 'undefined'
      ? 'https://936929561302675456.discordsays.com'
      : '',
  fetch: fetch,
  WebSocket: WebSocket,
};

import "dotenv/config";
import { Midjourney } from "../src";
// require('dotenv/config')

async function main() {
  // const { Midjourney } = require('../src/index')
  const client = new Midjourney({
    ServerId: <string>process.env.MIDJOURNEY_SERVER_ID,
    ChannelId: <string>process.env.MIDJOURNEY_CHANNEL_ID,
    SalaiToken: <string>process.env.MIDJOURNEY_SALAI_TOKEN,
    Debug: true,
    Ws: true, //enable ws is required for remix mode
  });
  const initResponce = await client.init(); //init auto enable remix mode
  // const prompt =
  //   "Big shark --fast";
  // const Imagine = await client.Imagine(
  //   prompt,
  //   (uri, progress) => {
  //     console.log("Imagine.loading", uri, "progress", progress);
  //   }
  // );
  // console.log(Imagine);
  // if (!Imagine) {
  //   console.log("no message");
  //   return;
  // }
  // const V1CustomID = Imagine.options?.find((o) => o.label === "V1")?.custom;
  // if (!V1CustomID) {
  //   console.log("no V1");
  //   return;
  // }
  // // Varition V1
  // const Varition = await client.Custom({
  //   msgId: Imagine.id,
  //   flags: Imagine.flags,
  //   customId: V1CustomID,
  //   content: "Big turtle --fast", //remix mode require content
  //   loading: (uri, progress) => {
  //     console.log("loading", uri, "progress", progress);
  //   },
  // });
  // console.log(Varition);



  // const Variation = await client.Variation({
  //   index: 2,
  //   msgId: Imagine.id,
  //   hash: Imagine.hash,
  //   flags: Imagine.flags,
  //   content: "Big turtle --fast",
  //   loading: (uri, progress) => {
  //     console.log("Variation1.loading", uri, "progress", progress);
  //   },
  // });
  // console.log("Variation", Variation);
  // if (!Variation) {
  //   console.log("no Variation");
  //   return;
  // }
  // const Upscale = await client.Upscale({
  //   index: 2,
  //   msgId: Variation.id,
  //   hash: Variation.hash,
  //   flags: Variation.flags,
  //   content: "Big turtle --fast",
  //   loading: (uri, progress) => {
  //     console.log("Upscale.loading", uri, "progress", progress);
  //   },
  // });
  // console.log("Upscale", Upscale);

  console.log('!!!', initResponce.config)
  setTimeout(async () => {
    const infoResponse = await client.Info()
    const { runningJobs } = infoResponse
    console.log('infoResponse!!!', infoResponse, runningJobs.split('\n'))
  }, 0)
  //   // Custom old
  //   console.log('Custom old!!!');
  //   const Varition = await client.Custom({
  //     index: 1,
  //     msgId: "1162577325297242173",
  //     flags: 0,
  //     customId: "MJ::JOB::low_variation::1::8131645e-8a19-4708-80ed-adae018541cb::SOLO",
  //     // content: "面饼 Girl holding a biscuit Smiling happily Three-quarters profile Lines Monochrome ",
  //     // content: "Coloured flatbread, Girl holding a biscuit Smiling happily Three-quarters profile Lines Monochrome ", //remix mode require content
  //     loading: (uri, progress) => {
  //       console.log("loading", uri, "progress", progress);
  //     },
  //   });
  //   console.log('Custom old!!!!!!', Varition);
  
  
    // // Varition old
    // console.log('Variation old!!!');
    // const Variation = await client.Variation({
    //   msgId: "1162577325297242173",
    //   hash: '8131645e-8a19-4708-80ed-adae018541cb',
    //   flags: 0,
    //   // content: "面饼 Girl holding a biscuit Smiling happily Three-quarters profile Lines Monochrome ",
    //   loading: (uri, progress) => {
    //     console.log("Variation1.loading", uri, "progress", progress);
    //   },
    // });
    // console.log('Variation old!!!!!!', Varition);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
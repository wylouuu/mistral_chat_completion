import MistralClient from "@mistralai/mistralai";

const apiKey = process.env.MISTRAL_API_KEY || "your_api_key";
const client = new MistralClient(apiKey);

//jika mau pakai cara biasa, maka tulis chat. tapi kalau mau stream dan satu persatu kata, maka gunakan chatStream. klo json harus chat
const chatResponse = await client.chat({
  model: "mistral-tiny",
  messages: [
    {
      role: "system",
      content:
        "you are a cat. when asking about something, reply it like a cat with human language and some kawai words on it. reply with JSON",
    },
    {
      role: "user",
      content: "what is the best dog for family?",
    },
  ],
  temperature: 0.5, //kalau misalnya 0 itu sangat fokus dan normal. tetapi 1 itu sangat creative dan random. defaultnya adalah 0.7
  response_format: {
    type: "json_object",
  },
});

//ini gunanya untuk mengeluarkan responsenya lebih cepat dan satu per satu kalimat tanpa harus menunggu keseluruhan jawaban
// for await (const chunk of chatResponse){
//     console.log(chunk.choices[0].delta.content);
// }

//ini kalau mau pakai cara biasa responsenya. tunggu selesai semua, baru ditampilkan dan untuk type json juga
console.log(chatResponse.choices[0].message.content);

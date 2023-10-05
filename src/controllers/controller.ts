import express from 'express';
import * as Services from "../services/services";

export const router = express.Router();

router.get('/', (req, res) => {
  res.send({
    message: 'OK'
  });
});

const format = [
  { tag: "PTemp", type: "int", len: 12 },
  { tag: "BattVolt.value", type: "int", len: 12 },
  { tag: "WaterLevel", type: "int", len: 8 },
];

// const data = { pTemp: 268, value: 224, waterLevel: 115 };

router.post('/encode', async (req, res) => {
  const { body: { object } } = req;
  const { encoded } = await Services.encode(object, format);
  res.send({
    encoded
  });
});

router.post('/decode', async (req, res) => {
  const { body: { buffer } } = req;
  const { decoded } = await Services.decode(buffer, format);
  res.send({
    decoded
  });
});

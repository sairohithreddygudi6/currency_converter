const express=require('express');
const cors=require('cors');
const port=4000;

const app=express();
app.use(cors());
app.use(express.json());

const rates={ USD: 0.012, EUR:0.011};

app.post('/convert', (req, res)=>{
  const {amt}=req.body;
  const usd=(amt*rates.USD).toFixed(2);
  const eur=(amt*rates.EUR).toFixed(2);
  res.json({usd,eur});
});

app.listen(port,()=>{});
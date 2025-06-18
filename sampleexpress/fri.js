app.get('/products/:id',(req,res)=>{
    const productId =req.params.id;
    const product ={id: productId,name:'sample Product',price 19.19};
res.json(product);
});
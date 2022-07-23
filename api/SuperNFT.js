module.exports = (req, res) => {
    const {
        query: { id },
    } = req
    if(id == null){
        res.status(400).json({message:"Payload Id Cannot be null "})
    }else{
        if(id < 0 && id > 100) res.status(400).json({message:"Payload Id is invalid "})
        else {
            const payload = {
                "description": "We Belive The Knowledge is free, and can be accessible for everyone especially for ppl in indonesia.", 
                "external_url": "https://github.com/Natabagass/ERC721/blob/main/assets/pepe.png", 
                "image": "https://github.com/Natabagass/ERC721/raw/main/assets/pepe.png", 
                "name": `SuperNFT #${id}/10`
            }
            res.status(400).json(payload)
        }
    }
}
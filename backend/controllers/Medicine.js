const AllMedicine = (req,res)=>{
    res.status(200).json('All Medicine')
}

const Medicine_add =(req,res)=>{
    res.status(200).json(req.body)
}

module.exports = {AllMedicine,Medicine_add};
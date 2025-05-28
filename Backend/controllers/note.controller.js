export const getAllNote = (req , res)=>{
  res.status(200).send("Hello notebook")
}

export const createNote = (req , res)=>{
    res.status(201).json({message:"Note created sucessfully !"})
}


export const updateNote = (req , res) =>{
    res.status(200).json({message:"note updated sucessfully"})
}

export const deleteNode = (req , res) =>{
    res.status(200).send({message:"Note deleted sucessfully"})
}
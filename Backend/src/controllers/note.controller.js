import Notes from "../model/note.model.js";

export const getAllNote = async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
  } catch (error) {
    console.log("Error in getAllNote controller", error.message);
    res.status(500).json({ message: "Internal server error " });
  }
};

export const getNoteById = async (req, res) => {
  try {
    const note = await Notes.findById(req.params.id);
    if (note) return res.status(404).json({ message: "Notes not found" });
    res.status(200).json(note);
  } catch (error) {
    console.log("Error in getAllNote controller", error.message);
    res.status(500).json({ message: "Internal server error " });
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newNode = new Notes({ title, content });

    await newNode.save();

    res.status(201).json({ message: "Note created sucessfull !" });
  } catch (error) {
    console.log("Error in getAllNote controller", error.message);
    res.status(500).json({ message: "Internal server error " });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!updatedNote)
      return res.status(404).json({ message: "Note not found " });
    res.status(200).json({ message: "note updated sucessfully" });
  } catch (error) {
    console.log("Error in getAllNote controller", error.message);
    res.status(500).json({ message: "Internal server error " });
  }
};

export const deleteNode = async (req, res) => {
  try {
    const deleteNote = await Notes.findByIdAndDelete(req.params.id);

    if (!deleteNode) return res.status(404).json({ message: "Note not found" });

    res.status(200).send({ message: "Note deleted sucessfully" });
  } catch (error) {
    console.log("Error in getAllNote controller", error.message);
    res.status(500).json({ message: "Internal server error " });
  }
};

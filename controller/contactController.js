import Contact from "../module/contact.js";

export const Contact_from = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(201).json({ message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error in Contact_from:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

import Contact from "../module/contact.js";

export const Contact_from = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Request body:", req.body); // debug ke liye

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).json({ success: true, msg: "Message saved successfully ✅" });
  } catch (error) {
    console.error("Controller Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

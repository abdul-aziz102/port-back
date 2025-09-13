import Contact from '../module/contact.js'

export const Contact_from = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Request body:", req.body); // debug ke liye

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // yahan apna database save ya email send logic lagao
    res.status(200).json({ success: true, msg: "Message sent successfully" });
  } catch (error) {
    console.error("Controller Error:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


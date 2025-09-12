import Contact from '../module/contact.js'

export const Contact_from = async (req,res) => {
    try {
        const { name, email, message } = req.body;
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Contact created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}
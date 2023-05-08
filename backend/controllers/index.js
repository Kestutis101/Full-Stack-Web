import User from "../Model/UserModel.js";

export async function createClient(req, res) {
  try {
    const { name, surname, email, registeredDate } = req.body;

    const newUser = new User({
      name,
      surname,
      email,
      registeredDate,
    });

    const createdUser = await newUser.save();

    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllClient(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateClient(req, res) {
  try {
    const { id } = req.params;
    const { name, surname, email, registeredDate } = req.body;

    const updatedClient = await User.findByIdAndUpdate(
      id,
      { name, surname, email, registeredDate },
      { new: true }
    );

    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function deleteClient(req, res) {
  try {
    const { id } = req.params;

    const deletedClient = await User.findByIdAndDelete(id);


    res.status(200).json(deletedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
// name
// surname
// email
// registeredDate

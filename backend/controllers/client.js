import Client from "../Model/ClientModel.js";

export async function createClient(req, res) {
  try {
    const { fullName, email, registeredDate } = req.body;

    const newClient = new Client({
      fullName,
      email,
      registeredDate,
    });

    const createdClient = await newClient.save();

    res.status(201).json(createdClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function getAllClient(req, res) {
  try {
    const client = await Client.find();
    res.status(200).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export async function updateClient(req, res) {
  try {
    const { id } = req.params;
    const { fullName, email, registeredDate } = req.body;

    const updatedClient = await Client.findByIdAndUpdate(
      id,
      { fullName, email, registeredDate },
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

    const deletedClient = await Client.findByIdAndDelete({ _id: id });

    res.status(200).json(deletedClient);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

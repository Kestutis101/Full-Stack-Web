import Client from "../Model/ClientModel.js";

export async function clientDoesntExist(req, res, next) {
  const { id } = req.params;

  try {
    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ error: "This user doesn't exist" });
    }

    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function checkClientExists(req, res, next) {
  const { fullName, email } = req.body;

  try {
    const existingClient = await Client.findOne({
      $or: [{ fullName: fullName }, { email: email }],
    });

    if (existingClient) {
      return res.status(409).json({ error: "User already exists" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

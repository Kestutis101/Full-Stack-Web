import Client from "../Model/ClientModel.js";

export async function clientDoesntExist(req, res, next) {
  const { id } = req.params;

  try {
    const client = await Client.findById(id);

    if (!client) {
      return res.status(404).json({ error: "Šis vartotojas neegzistuoja" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

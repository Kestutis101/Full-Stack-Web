import User from "../Model/UserModel.js";

export async function userDoesntExist(req, res, next) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "Šis vartotojas neegzistuoja" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

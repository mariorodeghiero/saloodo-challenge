let mockUser = require("../mock/users");

module.exports = {
  async store(req, res) {

    const { email } = req.body;
    console.log(req.body)

    let user = await mockUser.users.find(user => user.email === email);

    if (!user) {
      console.log(`User not found !!`);
      return res.status(404).send({ message: "User not found" });
    }
    console.log(`User Authenticated `);
    return res.status(200).json(user);
  }
};

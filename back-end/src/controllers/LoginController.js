module.exports = {
  async store(req, res) {
    const users = [
      {
        email: "admin@gmail.com",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
        password: "admin",
        name: "Eugene Powell",
        admin_id: 213,
        typeOfAccess: "manager"
      },
      {
        email: "biker@gmail.com",
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        name: "Arthur Stone",
        password: "biker",
        biker_id: 10,
        typeOfAccess: "biker"
      }
    ];

    const { email } = req.body;

    let user = await users.find(user => user.email === email);

    if (!user) {
      console.log(`User not found !!`);
      return res.status(404).send({ message: "User not found" });
    }
    console.log(`User Authenticated `);
    return res.status(200).json(user);
  }
};

db.createUser(
        {
            user: "kuser",
            pwd: "kpass",
            roles: [
                {
                    role: "readWrite",
                    db: "kogito"
                }
            ]
        }
);

import { Server } from "socket.io";

let connections = {};
let messages = {};
let timeOnline = {};

export const connectToSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
            allowedHeaders: ["*"],
            credentials: true,
        },
    });

    io.on("connection", (socket) => {
        console.log(`Socket connected: ${socket.id}`);

        // Handle user joining a call
        socket.on("join-call", (path) => {
            if (!connections[path]) {
                connections[path] = [];
            }
            connections[path].push(socket.id);
            timeOnline[socket.id] = new Date();

            // Notify all users in the room about the new user
            connections[path].forEach((id) => {
                io.to(id).emit("user-joined", socket.id, connections[path]);
            });
        });

        // Handle signaling between users
        socket.on("signal", (toId, message) => {
            io.to(toId).emit("signal", socket.id, message);
        });

        // Handle chat messages
        socket.on("chat-message", (data, sender) => {
            let matchingRoom = null;

            // Find the room the user is in
            for (const [roomKey, roomValue] of Object.entries(connections)) {
                if (roomValue.includes(socket.id)) {
                    matchingRoom = roomKey;
                    break;
                }
            }

            if (matchingRoom) {
                if (!messages[matchingRoom]) {
                    messages[matchingRoom] = [];
                }
                messages[matchingRoom].push({ sender, data, "socket-id-sender": socket.id });
                console.log("message", matchingRoom, ":", sender, data);

                // Broadcast the message to all users in the room
                connections[matchingRoom].forEach((elem) => {
                    io.to(elem).emit("chat-message", data, sender, socket.id);
                });
            }
        });

        // Handle user disconnecting
        socket.on("disconnect", () => {
            console.log(`Socket disconnected: ${socket.id}`);

            if (timeOnline[socket.id]) {
                delete timeOnline[socket.id];
            }

            for (const [key, value] of Object.entries(connections)) {
                const index = value.indexOf(socket.id);
                if (index !== -1) {
                    value.splice(index, 1);

                    // Notify remaining users in the room
                    value.forEach((elem) => {
                        io.to(elem).emit("user-left", socket.id);
                    });

                    // Remove the room if empty
                    if (value.length === 0) {
                        delete connections[key];
                    }
                    break;
                }
            }
        });
    });

    return io;
};
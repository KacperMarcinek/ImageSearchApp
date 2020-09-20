import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID gyShWZJj7rHvqWvuxcBDxvTY1I7QxXKj9ytbxvt6niU",
	},
});

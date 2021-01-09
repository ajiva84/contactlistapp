const getState = ({ getStore, getActions, setStore }) => {
	const baseURL = "https://assets.breatheco.de/apis/fake/contact";
	const agenda_slug = "Azam_super_agenda";

	return {
		store: {
			contact: [
				{
					id: "1732",
					agenda_slug: "Azam2_super_agenda",
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-12-22 23:55:08"
				},
				{
					id: "1732",
					agenda_slug: "Azam2_super_agenda",
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-12-22 23:55:08"
				},
				{
					id: "1732",
					agenda_slug: "Azam2_super_agenda",
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					phone: "7864445566",
					address: "47568 NW 34ST, 33434 FL, USA",
					created_at: "2020-12-22 23:55:08"
				}
			]
		},

		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			syncData: () => {
				fetch(`${baseURL}/agenda/${agenda_slug}`)
					.then(response => {
						if (!response.ok) throw new Error(response.statusText);
						return response.json();
					})
					.then(data => setStore({ contact: data }))
					.catch(err => console.error(err));
			},
			addContact: contact => {
				fetch(`${baseURL}/`, {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					},
					body: JSON.stringify(contact)
				})
					.then(response => {
						if (!response.ok) throw new Error(response.statusText);
						return response.json();
					})
					.then(data => getActions().syncData())
					.catch(err => console.error(err));
			},
			deleteContact: contactID => {
				fetch(`${baseURL}/${contactID}`, {
					method: "DELETE"
				})
					.then(response => {
						if (!response.ok) throw new Error(response.statusText);
						return response.json();
					})
					.then(data => getActions().syncData())
					.catch(err => console.error(err));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

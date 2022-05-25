
// const apiPath = "https://federicoshytte.dk";

const postHeader = {
    "Content-Type": "application/json"
};
const apiPath = "http://83.221.156.59/api"

export async function getColor() {
    console.log(`${apiPath}/color`)
    let response = await fetch(`${apiPath}/color`)
    let data = await response.json();
	return data
}


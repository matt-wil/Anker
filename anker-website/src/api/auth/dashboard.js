export async function getDashboardContent(){
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${import.meta.env.VITE_ANKER_API}/admin/api`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                "credentials": "include"
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err.messsage)
    }
}
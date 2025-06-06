export async function getDashboardContent(){
    try {
        const response = await fetch(`${import.meta.env.VITE_ANKER_API}/api`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err.messsage)
    }
}
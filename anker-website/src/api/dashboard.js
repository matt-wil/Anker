export async function getDashboardContent(){
    try {
        const response = await fetch(`http://127.0.0.1:5001/api`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error(err.messsage)
    }
}
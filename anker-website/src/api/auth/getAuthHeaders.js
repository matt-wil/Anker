const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        console.warn("No token found. Cannot get auth headers.")
        return {}
    }
    return {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
            "credentials": "include"
    }
}

export {getAuthHeaders}
import { useEffect, useState } from "react"
import { getDashboardContent } from "../../api/auth/dashboard"
import { FiSettings } from "react-icons/fi"
import Tooltip from "../../components/Tooltip"

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      setLoading(true)
      setError(null)
      try {
        const data = await getDashboardContent()
        if (data) {
          setDashboardData(data)
        } else {
          setError("Failed to load dashboard data.")
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err)
        setError("Failed to laod dashboard data")
      } finally {
        setLoading(false)
      }
    }
    fetchDashboardData()
  }, []);

  if (loading) {
    return <div>Loading Dashboard data...</div>
  }

  if (error) {
    return <div>Error loading dashboard data: {error}</div>
  }
      
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
    <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Anker Dashboard</h1>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Unser Artists</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {dashboardData.artists.map(artist => (
                        <div key={artist.artist_id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={artist.profile_image} alt={artist.name} className="w-full h-32 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-semibold mb-2">{artist.name}</h3>
                                <p className="text-sm italic text-gray-500 mb-1">{artist.profession}</p>
                                <p className="text-sm text-gray-600 mb-2">Specialties: {artist.specialties || 'N/A'}</p>
                                <p className="text-xs text-gray-700">{artist.bio.substring(0, 80)}...</p>
                                {/* Add links or more details here */}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            

            {/** Portfolio Images */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Portfolio Bilder</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {dashboardData.portfolio_images.slice(0, 10).map(image => (
                        <img key={image.image_id} src={image.image_url} alt={image.description} className="w-full h-32 object-cover rounded-md shadow-sm" />
                    ))}
                </div>
                {dashboardData.portfolio_images.length > 10 && (
                    <p className="mt-2 text-blue-500 cursor-pointer">Zeigt alle Portfolio Bilder...</p>
                )}
            </section>
            
            <div className="flex justify-end">
            <Tooltip
              text="Settings"
              position="left"
            >
              <button type="button" className="cursor-pointer text-3xl p-3 hover:drop-shadow-2xl hover:bg-gray-700 rounded-full">
                <FiSettings/>
              </button>
            </Tooltip>
            </div>
            {/* Add sections for bookings, clients, and services using Tailwind classes */}
        </div>
    </div>
    </>
  )
}

export default Dashboard
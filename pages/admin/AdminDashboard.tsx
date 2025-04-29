import { useNavigate } from 'react-router-dom';

type AdminCardType = 
  | 'Students' 
  | 'Faculty' 
  | 'Classes'
  | 'Schedule'
  | 'Grades'
  | 'Attendance'
  | 'Messages'
  | 'Settings';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleCardClick = (label: AdminCardType) => {
    navigate(`/admin/${label.toLowerCase().replace(' ', '-')}`);
  };

  const handleCreateNewClick = () => {
    navigate('/admin/create-new');
  };

  const cardData: { label: AdminCardType; subtitle: string; icon: string; color: string; hoverClass: string }[] = [
    { label: 'Students', subtitle: 'Manage student records', icon: '👨‍🎓', color: 'blue', hoverClass: 'hover:bg-blue-50' },
    { label: 'Faculty', subtitle: 'Faculty management', icon: '👩‍🏫', color: 'green', hoverClass: 'hover:bg-green-50' },
    { label: 'Classes', subtitle: 'Class and courses', icon: '📚', color: 'purple', hoverClass: 'hover:bg-purple-50' },
    { label: 'Schedule', subtitle: 'Academic calendar', icon: '📅', color: 'orange', hoverClass: 'hover:bg-orange-50' },
    { label: 'Grades', subtitle: 'Grade management', icon: '📊', color: 'indigo', hoverClass: 'hover:bg-indigo-50' },
    { label: 'Attendance', subtitle: 'Attendance records', icon: '✅', color: 'pink', hoverClass: 'hover:bg-pink-50' },
    { label: 'Messages', subtitle: 'School communications', icon: '💬', color: 'red', hoverClass: 'hover:bg-red-50' },
    { label: 'Settings', subtitle: 'System configuration', icon: '⚙️', color: 'gray', hoverClass: 'hover:bg-gray-50' }
  ];

  return (
    <div className="mx-auto px-8 py-6">
      <div className="mx-auto">
        <div className="mx-4">
          <div className="mx-auto">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold">School Administration Dashboard</h1>
                <p className="mt-2 text-gray-600">Welcome back! Here's your school management overview</p>
              </div>
              <button 
                onClick={handleCreateNewClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors flex items-center"
              >
                <span className="mr-2">+</span> Create New
              </button>
            </div>
            
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                <h3 className="text-gray-500 text-sm font-medium">Total Students</h3>
                <p className="text-2xl font-bold mt-1">1,245</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
                <h3 className="text-gray-500 text-sm font-medium">Faculty Members</h3>
                <p className="text-2xl font-bold mt-1">87</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
                <h3 className="text-gray-500 text-sm font-medium">Active Classes</h3>
                <p className="text-2xl font-bold mt-1">42</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-orange-500">
                <h3 className="text-gray-500 text-sm font-medium">Upcoming Events</h3>
                <p className="text-2xl font-bold mt-1">5</p>
              </div>
            </div>

            {/* Main Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {cardData.map((card) => (
                <div 
                  key={card.label}
                  onClick={() => handleCardClick(card.label)}
                  className={`flex flex-col h-40 w-full bg-white rounded-lg shadow-md p-6 cursor-pointer ${card.hoverClass} transition-colors border border-${card.color}-200`}
                >
                  <div className="flex-grow">
                    <div className={`text-3xl mb-3 text-${card.color}-600`}>
                      {card.icon}
                    </div>
                    <h2 className={`text-xl font-semibold text-${card.color}-800`}>
                      {card.label}
                    </h2>
                    <p className="text-gray-600 mt-1 text-sm">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Recent Activity Section */}
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recent School Activity</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <span className="text-blue-600">👨‍🎓</span>
                  </div>
                  <div>
                    <p className="font-medium">15 new students enrolled</p>
                    <p className="text-gray-500 text-sm">Today</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <span className="text-green-600">📚</span>
                  </div>
                  <div>
                    <p className="font-medium">New Math 101 class created</p>
                    <p className="text-gray-500 text-sm">Yesterday</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <span className="text-purple-600">👩‍🏫</span>
                  </div>
                  <div>
                    <p className="font-medium">Dr. Smith updated grades for Chemistry</p>
                    <p className="text-gray-500 text-sm">2 days ago</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
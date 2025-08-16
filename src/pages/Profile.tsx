import { useState } from 'react';
import Icon from '@/components/ui/icon';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Компонент круговой диаграммы
  const CircularProgress = ({ percentage, size = 80, strokeWidth = 8, color = 'text-primary' }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-gray-700"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className={color}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-white">{percentage}%</span>
        </div>
      </div>
    );
  };

  // Компонент статистической карточки
  const StatCard = ({ title, value, subtitle, level, color = 'text-primary' }) => (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
      <div className="text-sm text-gray-400 mb-2">{title}</div>
      <div className={`text-2xl font-bold ${color} mb-1`}>{value}</div>
      {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
      {level && (
        <div className="flex items-center mt-2">
          <div className="flex-1 bg-gray-700 rounded-full h-1">
            <div 
              className={`h-1 rounded-full bg-gradient-to-r from-pink-500 to-blue-500`}
              style={{ width: `${level}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 ml-2">{level}%</span>
        </div>
      )}
    </div>
  );

  // Компонент карточки карты
  const MapCard = ({ name, image, winRate, matches, kd, color }) => (
    <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center space-x-4">
      <img src={image} alt={name} className="w-12 h-12 rounded object-cover" />
      <div className="flex-1">
        <div className="text-white font-medium">{name}</div>
        <div className="text-xs text-gray-400">W = {matches.wins} L = {matches.losses}</div>
        <div className="text-xs text-gray-500">K/D = {kd} W/R = {winRate}%</div>
      </div>
      <div className="text-right">
        <div className={`text-lg font-bold ${color}`}>{winRate}%</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gray-800 border-b border-gray-700 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center space-x-6">
            <img 
              src="https://cdn.poehali.dev/files/457c776b-d149-4f61-b76d-ccf92e23492e.png" 
              alt="Profile Avatar" 
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <div className="text-sm text-gray-400">#???</div>
              <h1 className="text-3xl font-bold">h1zmi</h1>
              <div className="text-gray-400">ID: 246433814</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Statistics */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Stats */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="BarChart3" size={20} className="text-primary" />
                <h2 className="text-lg font-semibold">Statistic</h2>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {/* Kill/Deaths Ratio */}
                <div className="text-center">
                  <CircularProgress percentage={10} color="text-pink-500" />
                  <div className="mt-2">
                    <div className="text-sm text-gray-400">Kill/Deaths</div>
                    <div className="font-bold">K = <span className="text-blue-400">9</span> D = <span className="text-pink-500">93</span></div>
                    <div className="text-xs text-pink-500">Low</div>
                  </div>
                </div>

                {/* Calibration */}
                <div className="text-center">
                  <div className="relative">
                    <Icon name="Shield" size={60} className="text-gray-600 mx-auto mb-2" />
                  </div>
                  <div className="text-sm text-gray-400">Calibration</div>
                  <div className="text-2xl font-bold text-pink-500">6/10</div>
                  <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                    <div className="bg-gradient-to-r from-pink-500 to-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
                  </div>
                </div>

                {/* Additional Stats */}
                <div className="col-span-2 grid grid-cols-2 gap-4">
                  <StatCard title="Rating" value="0.44" level={20} color="text-pink-500" />
                  <StatCard title="AVG" value="2" level={15} color="text-pink-500" />
                  <StatCard title="Impact" value="0.26" level={25} color="text-pink-500" />
                  <StatCard title="KPR" value="0.08" level={10} color="text-pink-500" />
                  <StatCard title="Assists" value="5" level={30} color="text-pink-500" />
                  <StatCard title="SVR" value="0.22" level={20} color="text-pink-500" />
                </div>
              </div>
            </div>

            {/* Map Statistics */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Icon name="Map" size={20} className="text-primary" />
                <h2 className="text-lg font-semibold">Map Statistic</h2>
              </div>

              {/* Win Rate Summary */}
              <div className="mb-6 p-4 bg-gray-700/50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <CircularProgress percentage={33} size={100} color="text-pink-500" />
                  <div>
                    <div className="text-sm text-gray-400">Win Rate</div>
                    <div className="font-bold">W = <span className="text-blue-400">2</span> L = <span className="text-pink-500">4</span></div>
                  </div>
                </div>
              </div>

              {/* Maps Grid */}
              <div className="grid md:grid-cols-2 gap-4">
                <MapCard 
                  name="Zone 7"
                  image="/api/placeholder/60/60"
                  winRate={100}
                  matches={{wins: 1, losses: 0}}
                  kd="0.0"
                  color="text-green-400"
                />
                <MapCard 
                  name="Sandstone"
                  image="/api/placeholder/60/60"
                  winRate={0}
                  matches={{wins: 0, losses: 0}}
                  kd="0"
                  color="text-gray-400"
                />
                <MapCard 
                  name="Rust"
                  image="/api/placeholder/60/60"
                  winRate={33}
                  matches={{wins: 1, losses: 2}}
                  kd="0.06"
                  color="text-pink-500"
                />
                <MapCard 
                  name="Province"
                  image="/api/placeholder/60/60"
                  winRate={0}
                  matches={{wins: 0, losses: 1}}
                  kd="0.3"
                  color="text-pink-500"
                />
                <MapCard 
                  name="Sakura"
                  image="/api/placeholder/60/60"
                  winRate={0}
                  matches={{wins: 0, losses: 0}}
                  kd="0"
                  color="text-gray-400"
                />
                <MapCard 
                  name="Breeze"
                  image="/api/placeholder/60/60"
                  winRate={0}
                  matches={{wins: 0, losses: 1}}
                  kd="0.0"
                  color="text-pink-500"
                />
                <MapCard 
                  name="Dune"
                  image="/api/placeholder/60/60"
                  winRate={0}
                  matches={{wins: 0, losses: 0}}
                  kd="0"
                  color="text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Side Info */}
          <div className="space-y-6">
            {/* Player Info */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Clock" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">Playtime</span>
                  </div>
                  <span className="font-semibold">0h</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">Join Date</span>
                  </div>
                  <span className="font-semibold">15.03.2025</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Gamepad2" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">Games</span>
                  </div>
                  <span className="font-semibold">6</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-gray-400" />
                    <span className="text-sm text-gray-400">MVP</span>
                  </div>
                  <span className="font-semibold">0</span>
                </div>
              </div>
            </div>

            {/* League */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-2">League</div>
              <div className="flex items-center space-x-3">
                <Icon name="Shield" size={32} className="text-gray-500" />
                <span className="text-lg font-semibold">Default</span>
              </div>
            </div>

            {/* Places */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="text-sm text-gray-400 mb-4">Places</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-yellow-500 font-bold">#1</span>
                  <div className="flex items-center space-x-2">
                    <img src="/api/placeholder/20/20" alt="player" className="w-5 h-5 rounded" />
                    <span>r1dz3</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 font-bold">#2</span>
                  <div className="flex items-center space-x-2">
                    <img src="/api/placeholder/20/20" alt="player" className="w-5 h-5 rounded" />
                    <span>away</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-orange-500 font-bold">#3</span>
                  <div className="flex items-center space-x-2">
                    <img src="/api/placeholder/20/20" alt="player" className="w-5 h-5 rounded" />
                    <span>f3ktori</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Calibration */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">#-</span>
                <div className="flex items-center space-x-2">
                  <Icon name="Target" size={16} className="text-gray-400" />
                  <span>Calibration 6/10</span>
                </div>
              </div>
            </div>

            {/* Recent Matches */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={20} className="text-primary" />
                <h3 className="font-semibold">Recent Matches</h3>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {['L', 'L', 'W', 'W', 'L', 'L'].map((result, index) => (
                  <div 
                    key={index}
                    className={`w-8 h-8 rounded flex items-center justify-center text-xs font-bold ${
                      result === 'W' ? 'bg-blue-600 text-white' : 'bg-pink-600 text-white'
                    }`}
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
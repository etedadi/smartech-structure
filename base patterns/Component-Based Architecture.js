// Header.js
import React from 'react';

const Header = () => (
  <header>
    <h1>Dashboard</h1>
  </header>
);

export default Header;

// Sidebar.js
import React from 'react';

const Sidebar = () => (
  <aside>
    <nav>
      <ul>
        <li>Home</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </nav>
  </aside>
);

export default Sidebar;

// UserStats.js
import React from 'react';

const UserStats = ({ stats }) => (
  <div>
    <h2>User Statistics</h2>
    <p>Posts: {stats.posts}</p>
    <p>Followers: {stats.followers}</p>
  </div>
);

export default UserStats;

// ActivityFeed.js
import React from 'react';

const ActivityFeed = ({ activities }) => (
  <div>
    <h2>Recent Activities</h2>
    <ul>
      {activities.map(activity => (
        <li key={activity.id}>{activity.description}</li>
      ))}
    </ul>
  </div>
);

export default ActivityFeed;

// Dashboard.js
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import UserStats from './UserStats';
import ActivityFeed from './ActivityFeed';

const Dashboard = ({ stats, activities }) => (
  <div>
    <Header />
    <Sidebar />
    <main>
      <UserStats stats={stats} />
      <ActivityFeed activities={activities} />
    </main>
  </div>
);

export default Dashboard;

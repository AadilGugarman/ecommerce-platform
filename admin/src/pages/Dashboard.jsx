import WelcomeSection from "../components/dashboard/WelcomeSection";
import StatCard from "../components/dashboard/StatCard";
import ProductsTable from "../components/tables/ProductsTable";

import {
  People,
  ReceiptLong,
  Inventory2,
  Category,
} from "@mui/icons-material";

const Dashboard = () => (
  <div className="space-y-6">
    <WelcomeSection />

    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Users"
        value="12,450"
        icon={<People />}
        color="from-blue-500 to-blue-700"
      />
      <StatCard
        title="Total Orders"
        value="3,290"
        icon={<ReceiptLong />}
        color="from-green-500 to-green-700"
      />
      <StatCard
        title="Total Products"
        value="1,240"
        icon={<Inventory2 />}
        color="from-purple-500 to-purple-700"
      />
      <StatCard
        title="Total Categories"
        value="48"
        icon={<Category />}
        color="from-pink-500 to-pink-700"
      />
    </div>

    <ProductsTable />
  </div>
);

export default Dashboard;

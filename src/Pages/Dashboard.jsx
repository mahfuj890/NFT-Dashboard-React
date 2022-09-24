import FeaturesProductSection from "../Components/Section/FeaturesProductSection";
import RecentTransactionSection from "../Components/Section/RecentTransactionSection";
import ToActionSection from "../Components/Section/ToActionSection";
import WalletSection from "../Components/Section/WalletSection";

function Dashboard() {
  return (
    <section className="dashboard_content_wrapper">
      <div className="dashboard_outer_grid">
        <div className="dasbhoard_left_wrapper">
          <ToActionSection />
          <FeaturesProductSection />
        </div>
        <div className="dasbhoard_right_wrapper">
          <WalletSection />
          <RecentTransactionSection />
        </div>
      </div>
    </section>
  );
}

export default Dashboard;

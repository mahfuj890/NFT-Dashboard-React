import FeaturesProductSection from "../Components/Section/FeaturesProductSection";
import RecentTransactionSection from "../Components/Section/RecentTransactionSection";
import ToActionSection from "../Components/Section/ToActionSection";
import WalletSection from "../Components/Section/WalletSection";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import { useForm } from "react-hook-form";

function Dashboard() {
  useDocumentTitle("Home");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
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

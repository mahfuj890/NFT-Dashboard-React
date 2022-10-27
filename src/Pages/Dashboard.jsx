import FeaturesProductSection from "../Components/Section/FeaturesProductSection";
import RecentTransactionSection from "../Components/Section/RecentTransactionSection";
import ToActionSection from "../Components/Section/ToActionSection";
import WalletSection from "../Components/Section/WalletSection";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import { useForm } from "react-hook-form";


function Dashboard() {
  useDocumentTitle("Home")

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));
  return (
    <section className="dashboard_content_wrapper">
      <div className="dashboard_outer_grid">
        <div className="dasbhoard_left_wrapper">
         jh
         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input type="number" placeholder="enter number" defaultValue="test" {...register("example")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <button type="submit" >submit </button>
    </form>
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

import Provider from "../provider";
import Header from "./_components/Header";

export default function DashboardLayout({ children }) {
  return (
    <Provider>
      <Header />
      <div className="pt-20 px-10 md:px-20 lg:px-40 xl:px-60">
             {children}
      </div>
 
    </Provider>
  );
}

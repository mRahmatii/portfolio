import { Fragment } from "react";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children }) {
  return (
    <Fragment>
      <div className="inset-0 flex justify-center sm:px-8 overflow-x-auto min-h-screen">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

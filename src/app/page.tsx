"use cleint";

import { redirect } from "next/navigation";


export default function Home() {

  return redirect('/app')
  return (
    <div className="bg-black text-white">
      <section>
          <p>Hello</p>
      </section>
    </div>
  );
}
